import {
  PLK_PATTERN_2COLOR,
  PLK_PATTERN_3COLOR,
  STRIPE_PATTERN_2COLOR,
  STRIPE_PATTERN_3COLOR,
  applyColorsToPattern,
} from './canvas'

export const adjustColorBrightness = (hex: string, percent: number): string => {
  hex = hex.replace('#', '')
  let r = parseInt(hex.substring(0, 2), 16)
  let g = parseInt(hex.substring(2, 4), 16)
  let b = parseInt(hex.substring(4, 6), 16)
  r = Math.max(0, Math.min(255, r + percent))
  g = Math.max(0, Math.min(255, g + percent))
  b = Math.max(0, Math.min(255, b + percent))
  const rr = r.toString(16).padStart(2, '0')
  const gg = g.toString(16).padStart(2, '0')
  const bb = b.toString(16).padStart(2, '0')
  return `#${rr}${gg}${bb}`
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const extractColorIdFromText = (text: string): string | null => {
  if (!text) return null
  const parts = text.trim().split(' ')
  return parts[parts.length - 1] || null
}

/**
 * Build the grid that gets passed to BeltCanvas / renderBeltCanvas.
 *
 * designType controls which base pattern is used:
 *   'classic-2'  →  PLK 2-colour
 *   'classic-3'  →  PLK 3-colour
 *   'stripe-2'   →  Stripe 2-colour
 *   'stripe-3'   →  Stripe 3-colour
 *
 * color1 / color2 / color3 / color4 are the "Name ID" strings as returned by
 * the colour picker (e.g. "Mid Grey 399").  color4 is the stripe colour.
 *
 * threadColors is the THREAD_COLORS database from constants.ts.
 */
export const generateGridDataFromColors = (
  color1: string,
  color2: string,
  color3: string = '',
  color4: string = '',
  threadColors: Record<string, { name: string; hex: string }> = {},
  designType: 'classic-2' | 'classic-3' | 'stripe-2' | 'stripe-3' = 'classic-2'
): string[][] => {
  const getColorHex = (colorText: string): string | null => {
    if (!colorText) return null
    const parts = colorText.trim().split(' ')
    const colorId = parts[parts.length - 1]
    return threadColors[colorId]?.hex ?? null
  }

  const color1Hex = getColorHex(color1)
  const color2Hex = getColorHex(color2)
  const color3Hex = getColorHex(color3)
  const stripeHex = getColorHex(color4)   // color4 is the stripe colour

  // Pick the matching base pattern
  let basePattern: string[][]
  switch (designType) {
    case 'classic-3':
      basePattern = PLK_PATTERN_3COLOR
      break
    case 'stripe-2':
      basePattern = STRIPE_PATTERN_2COLOR
      break
    case 'stripe-3':
      basePattern = STRIPE_PATTERN_3COLOR
      break
    case 'classic-2':
    default:
      basePattern = PLK_PATTERN_2COLOR
  }

  // If no colours have been chosen yet, return the base pattern as-is
  // (the canvas will show the placeholder grey/red shades).
  if (!color1Hex && !color2Hex && !color3Hex && !stripeHex) {
    return basePattern.map((row) => [...row])
  }

  // For stripe patterns the stripe colour is color4 / stripeHex
  // For classic patterns there is no stripe; color3 maps to the 3rd thread.
  const isStripe = designType === 'stripe-2' || designType === 'stripe-3'

  return applyColorsToPattern(
    basePattern,
    color1Hex,
    color2Hex,
    color3Hex,
    isStripe ? stripeHex : null
  )
}

export const generateInvoiceEmail = (
  designData: any,
  sizes: any[],
  customerData: any
): string => {
  let emailBody = `NEW BELT DESIGN REQUEST\n\n`

  emailBody += `DESIGN DETAILS:\n`
  emailBody += `Design Name: ${designData.designName}\n`
  emailBody += `Belt Width: ${designData.beltWidth}\n`
  emailBody += `Thread Colour 1: ${designData.threadColour1}\n`
  emailBody += `Thread Colour 2: ${designData.threadColour2}\n`
  emailBody += `Thread Colour 3: ${designData.threadColour3}\n`
  emailBody += `Stripe Colour: ${designData.stripeColour}\n`
  emailBody += `Leather Colour: ${designData.leatherColour}\n`
  emailBody += `Buckle Finish: ${designData.buckleFinish}\n`
  emailBody += `Custom Stamp: ${designData.hasStamp ? 'Yes - Custom logo uploaded' : 'No'}\n\n`

  emailBody += `SIZES & QUANTITIES:\n`
  sizes.forEach((item) => {
    emailBody += `${item.size}: ${item.quantity} belt(s)\n`
  })
  emailBody += `\n`

  emailBody += `CUSTOMER INFORMATION:\n`
  emailBody += `Name: ${customerData.name}\n`
  emailBody += `Email: ${customerData.email}\n`
  emailBody += `Address:\n`
  emailBody += `${customerData.addressLine1}\n`
  if (customerData.addressLine2) emailBody += `${customerData.addressLine2}\n`
  emailBody += `${customerData.city}\n`
  if (customerData.stateRegion) emailBody += `${customerData.stateRegion}\n`
  if (customerData.postcode) emailBody += `${customerData.postcode}\n`
  emailBody += `${customerData.country}\n`

  return emailBody
}
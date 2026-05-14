import {
  PLK_PATTERN_2COLOR,
  PLK_PATTERN_3COLOR,
  PLK_PATTERN_4COLOR,
  STRIPE_PATTERN_2COLOR,
  STRIPE_PATTERN_3COLOR,
  CLASSIC_2STRIPE_PATTERN_COLOR,
  CHAIN_PATTERN,
  AZTEC_PATTERN,
  TRIPLE_STRIPE_PATTERN,
  DIAMOND_STRIPE_PATTERN,
  STRIPEY_PATTERN,
  DIAMONDS_PATTERN,
  ALT_BLOCK_PATTERN,
  CLASSIC_STRIPE_PATTERN,
  CLASSIC_DOUBLE_STRIPE_PATTERN,
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

export type DesignType =
  | 'classic-2'
  | 'classic-3'
  | 'classic-4'
  | 'stripe-2'
  | 'stripe-3'
  | 'classic-2stripe'
  | 'classicstripe-3'
  | 'classicdoublestripe-4'
  | 'chain-3'
  | 'aztec-2'
  | 'triplestripe-4'
  | 'diamondstripe-2'
  | 'stripey-2'
  | 'diamonds-2'
  | 'altblock-4'

export const generateGridDataFromColors = (
  color1: string,
  color2: string,
  color3: string = '',
  color4: string = '',        // Stripe 1 (or classic color3/4)
  threadColors: Record<string, { name: string; hex: string }> = {},
  designType: DesignType = 'classic-2',
  color5: string = ''         // Stripe 2 (only for classic-2stripe)
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
  const stripe1Hex = getColorHex(color4)   // stripe 1
  const stripe2Hex = getColorHex(color5)   // stripe 2 (only classic-2stripe)

  let basePattern: string[][]
  switch (designType) {
    case 'classic-3':
      basePattern = PLK_PATTERN_3COLOR
      break
    case 'classic-4':
      basePattern = PLK_PATTERN_4COLOR
      break
    case 'stripe-2':
      basePattern = STRIPE_PATTERN_2COLOR
      break
    case 'stripe-3':
      basePattern = STRIPE_PATTERN_3COLOR
      break
    case 'classic-2stripe':
      basePattern = CLASSIC_2STRIPE_PATTERN_COLOR
      break
    case 'classicstripe-3':
      basePattern = CLASSIC_STRIPE_PATTERN
      break
    case 'classicdoublestripe-4':
      basePattern = CLASSIC_DOUBLE_STRIPE_PATTERN
      break
    case 'chain-3':
      basePattern = CHAIN_PATTERN
      break
    case 'aztec-2':
      basePattern = AZTEC_PATTERN
      break
    case 'triplestripe-4':
      basePattern = TRIPLE_STRIPE_PATTERN
      break
    case 'diamondstripe-2':
      basePattern = DIAMOND_STRIPE_PATTERN
      break
    case 'stripey-2':
      basePattern = STRIPEY_PATTERN
      break
    case 'diamonds-2':
      basePattern = DIAMONDS_PATTERN
      break
    case 'altblock-4':
      basePattern = ALT_BLOCK_PATTERN
      break
    case 'classic-2':
    default:
      basePattern = PLK_PATTERN_2COLOR
  }

  if (!color1Hex && !color2Hex && !color3Hex && !stripe1Hex && !stripe2Hex) {
    return basePattern.map((row) => [...row])
  }

  // const isStripe = designType === 'stripe-2' || designType === 'stripe-3'

  return applyColorsToPattern(
    basePattern,
    color1Hex,
    color2Hex,
    color3Hex,
    stripe1Hex,
    designType === 'classic-2stripe' ? stripe2Hex : null,
    designType === 'classic-4',
    designType
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
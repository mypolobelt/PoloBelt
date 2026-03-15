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

export const generateGridDataFromColors = (
  color1: string,
  color2: string,
  color3: string = '',
  color4: string = '',
  threadColors: Record<string, { name: string; hex: string }> = {}
): string[][] => {
  const getColorHex = (colorText: string): string => {
    if (!colorText) return '#FFFFFF'
    const parts = colorText.trim().split(' ')
    const colorId = parts[parts.length - 1]
    return threadColors[colorId]?.hex || '#FFFFFF'
  }

  const backgroundColors = [
    getColorHex(color1),
    getColorHex(color2),
    ...(color3 ? [getColorHex(color3)] : []),
    ...(color4 ? [getColorHex(color4)] : [])
  ].filter(c => c !== '#FFFFFF')

  const grid: string[][] = Array(20)
    .fill(null)
    .map(() => Array(64).fill('#FFFFFF'))

  if (backgroundColors.length === 0) return grid

  // Fixed diamond color (brown)
  const diamondColor = '#6B4830'

  // Define repeating diamond dimensions - wider and more pixelated
  const diamondSpacing = 16 // Distance between diamond centers (horizontally)
  const diamondWidth = 8    // Half-width of each diamond (wider)
  const diamondHeight = 6   // Half-height of each diamond

  // First, fill sections with alternating background colors
  const sectionWidth = diamondSpacing
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 64; col++) {
      const sectionIndex = Math.floor(col / sectionWidth) % backgroundColors.length
      grid[row][col] = backgroundColors[sectionIndex]
    }
  }

  // Then draw the fixed diamond shapes on top with pixelated edges
  for (let diamondIndex = 0; diamondIndex < 5; diamondIndex++) {
    const centerCol = 8 + (diamondIndex * diamondSpacing)
    const centerRow = 10 // Center vertically (middle of 20 rows)

    // Draw each diamond shape with harder edges (pixelated)
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 64; col++) {
        const distRow = Math.abs(row - centerRow)
        const distCol = Math.abs(col - centerCol)

        // Create a more blocky diamond shape with sharp angles
        const normalizedDist = (distCol / diamondWidth) + (distRow / diamondHeight)

        // If within diamond bounds, use fixed diamond color
        if (normalizedDist <= 1.0) {
          grid[row][col] = diamondColor
        }
      }
    }
  }

  return grid
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
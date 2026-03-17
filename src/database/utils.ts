export const adjustColorBrightness = (hex: string, percent: number): string => {
  hex = hex.replace('#', '');



  // Convert to RGB 

  let r = parseInt(hex.substring(0, 2), 16);

  let g = parseInt(hex.substring(2, 4), 16);

  let b = parseInt(hex.substring(4, 6), 16);

  // Adjust brightness 

  r = Math.max(0, Math.min(255, r + percent));

  g = Math.max(0, Math.min(255, g + percent));

  b = Math.max(0, Math.min(255, b + percent));

  // Convert back to hex 

  const rr = r.toString(16).padStart(2, '0');

  const gg = g.toString(16).padStart(2, '0');

  const bb = b.toString(16).padStart(2, '0');



  return `#${rr}${gg}${bb}`;
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

  const rows = 10
  const cols = 64

  const grid: string[][] = Array.from({ length: rows }, () =>
    Array(cols).fill('#FFFFFF')
  )

  if (backgroundColors.length === 0) return grid

  // 🔥 Diamond color (you can tweak)
  const diamondColor = '#7a3b00'

  // 🔥 Layout settings
  const diamondSpacing =16
  const sectionWidth = diamondSpacing

  // Step diamond size (controls shape)
  const diamondHalfHeight = 3

  // ✅ STEP 1: Fill background stripes
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const sectionIndex =
        Math.floor(col / sectionWidth) % backgroundColors.length
      grid[row][col] = backgroundColors[sectionIndex]
    }
  }

  // ✅ STEP 2: Draw pixel-perfect diamonds (ON TOP)
  for (let diamondIndex = 0; diamondIndex < 5; diamondIndex++) {
    const centerCol = 8 + diamondIndex * diamondSpacing
    const centerRow = Math.floor(rows / 2)

    for (let rowOffset = -diamondHalfHeight; rowOffset <= diamondHalfHeight; rowOffset++) {
      const currentRow = centerRow + rowOffset

      // This creates the stepped width (like your image)
      const width = diamondHalfHeight - Math.abs(rowOffset)

      for (let colOffset = -width; colOffset <= width; colOffset++) {
        const currentCol = centerCol + colOffset

        if (
          currentRow >= 0 &&
          currentRow < rows &&
          currentCol >= 0 &&
          currentCol < cols
        ) {
          grid[currentRow][currentCol] = diamondColor
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
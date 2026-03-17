import { adjustColorBrightness } from './utils'
import { LEATHER_COLORS } from './constants'

export const drawThreadPattern = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  baseColor: string
): void => {
  const darkerColor = adjustColorBrightness(baseColor, -40)

  // Draw thicker vertical lines for thread texture
  for (let i = 0; i < width; i += 1.5) {

    ctx.globalAlpha = 0.6; // Increased from 0.3 to 0.6 for more visibility 

    ctx.strokeStyle = darkerColor;

    ctx.lineWidth = 1; // Increased from 0.5 to 1 

    ctx.beginPath();

    ctx.moveTo(x + i, y);

    ctx.lineTo(x + i, y + height);

    ctx.stroke();

  }

  // Add occasional thicker lines to simulate thread bundles
  for (let i = 0; i < width; i += 6) {

    ctx.globalAlpha = 0.8;

    ctx.strokeStyle = darkerColor;

    ctx.lineWidth = 1.5;

    ctx.beginPath();

    ctx.moveTo(x + i, y);

    ctx.lineTo(x + i, y + height);

    ctx.stroke();

  }

  ctx.globalAlpha = 1.0
}

export const renderBeltCanvas = (
  canvas: HTMLCanvasElement | null,
  gridData: string[][],
  leatherColorName: string
): void => {
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rows = gridData.length
  const cols = gridData[0]?.length || 64

  const cellWidth = canvas.width / cols
  const cellHeight = canvas.height / rows

  const leatherColour =
    LEATHER_COLORS[leatherColorName as keyof typeof LEATHER_COLORS] ||
    LEATHER_COLORS.Brown

  const DIAMOND_COLOR = '#7a3b00'

  // Clear canvas
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Leather base
  ctx.fillStyle = leatherColour
  ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4)

  // ✅ STEP 1: Draw background + thread (skip diamonds)
  for (let r = 0; r < rows; r++) {

    for (let c = 0; c < cols; c++) {

      let color = gridData[r][c];

      const x = c * cellWidth;

      const y = r * cellHeight;



      // Replace brown leather with selected leather colour 

      if (color === '#552B06') {

        color = leatherColour;

      }



      // Fill base color 

      ctx.fillStyle = color;

      ctx.fillRect(x, y, cellWidth, cellHeight);



      // Add vertical threading pattern (except for leather) 

      if (gridData[r][c] !== '#552B06') {

        drawThreadPattern(ctx, x, y, cellWidth, cellHeight, color);

      }

    }

  }

  // ✅ STEP 2: Draw diamonds LAST (on top, clean)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const color = gridData[r][c]
      if (color !== DIAMOND_COLOR) continue

      const x = c * cellWidth
      const y = r * cellHeight

      ctx.fillStyle = color
      ctx.fillRect(x, y, cellWidth, cellHeight)
    }
  }

  // Border
  ctx.strokeStyle = '#999999'
  ctx.lineWidth = 2
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

export const canvasToImage = (canvas: HTMLCanvasElement | null): string => {
  if (!canvas) return ''
  return canvas.toDataURL('image/png')
}

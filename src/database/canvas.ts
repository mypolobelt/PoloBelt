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
    ctx.globalAlpha = 0.6
    ctx.strokeStyle = darkerColor
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x + i, y)
    ctx.lineTo(x + i, y + height)
    ctx.stroke()
  }

  // Add occasional thicker lines to simulate thread bundles
  for (let i = 0; i < width; i += 6) {
    ctx.globalAlpha = 0.8
    ctx.strokeStyle = darkerColor
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(x + i, y)
    ctx.lineTo(x + i, y + height)
    ctx.stroke()
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

  // Clear canvas with white background
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw leather strip on bottom as background
  ctx.fillStyle = leatherColour
  ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4)

  // Draw each pattern cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const color = gridData[r][c]
      const x = c * cellWidth
      const y = r * cellHeight

      // Skip white cells (empty space)
      if (color === '#FFFFFF') continue

      // Fill base color
      ctx.fillStyle = color
      ctx.fillRect(x, y, cellWidth, cellHeight)

      // Add vertical threading pattern
      drawThreadPattern(ctx, x, y, cellWidth, cellHeight, color)
    }
  }

  // Add a border to make it look more like a finished product
  ctx.strokeStyle = '#999999'
  ctx.lineWidth = 2
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

export const canvasToImage = (canvas: HTMLCanvasElement | null): string => {
  if (!canvas) return ''
  return canvas.toDataURL('image/png')
}

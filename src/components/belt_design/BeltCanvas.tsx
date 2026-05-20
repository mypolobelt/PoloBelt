'use client'

import { renderBeltCanvas } from '@/database/canvas'
import { useRef, useEffect } from 'react'

interface BeltCanvasProps {
  gridData: string[][]
  leatherColor: string
}

export function BeltCanvas({ gridData, leatherColor }: BeltCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current && gridData && gridData.length > 0) {
      // Check if we have actual thread colors (not just placeholder)
      const hasActualColors = gridData.some(row =>
        row.some(cell => cell !== '#D3D3D3' && cell !== '#552B06')
      );

      renderBeltCanvas(
        canvasRef.current,
        gridData,
        leatherColor,
        !hasActualColors  // isSelected = true only when no actual colors are selected yet
      )
    }
  }, [gridData, leatherColor])

  return (
    <div className="w-full flex justify-center p-2 sm:p-3 md:p-4 rounded-none shadow-md overflow-x-auto">
      <canvas
        ref={canvasRef}
        width={768}
        height={120}
        className="rounded-none"
        style={{
          width: '100%',
          maxWidth: '768px',
          height: 'auto',
          aspectRatio: '768 / 120',
        }}
      />
    </div>
  )
}
'use client'

import { renderBeltCanvas } from '@/database/canvas'
import { useRef, useEffect, forwardRef } from 'react'

interface BeltCanvasProps {
  gridData: string[][]
  leatherColor: string
}

export const BeltCanvas = forwardRef<HTMLCanvasElement, BeltCanvasProps>(
  function BeltCanvas({ gridData, leatherColor }, ref) {
    const internalRef = useRef<HTMLCanvasElement>(null)
    const canvasEl = (ref as React.RefObject<HTMLCanvasElement>) ?? internalRef

    useEffect(() => {
      if (canvasEl.current && gridData && gridData.length > 0) {
        const hasActualColors = gridData.some(row =>
          row.some(cell => cell !== '#D3D3D3' && cell !== '#552B06')
        )
        renderBeltCanvas(canvasEl.current, gridData, leatherColor, !hasActualColors)
      }
    }, [gridData, leatherColor, canvasEl])

    return (
      <div className="w-full flex justify-center p-2 sm:p-3 md:p-4 rounded-none shadow-md overflow-x-auto">
        <canvas
          ref={canvasEl}
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
)
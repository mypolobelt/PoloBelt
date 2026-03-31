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
    if (canvasRef.current) {
      renderBeltCanvas(canvasRef.current, gridData, leatherColor)
    }
  }, [gridData, leatherColor])
  return (
    <div className="w-full flex justify-center p-2 sm:p-3 md:p-4 rounded-none shadow-md overflow-x-auto">
      <canvas
        ref={canvasRef}
        width={768}
        height={120}
        className=" rounded-none"
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

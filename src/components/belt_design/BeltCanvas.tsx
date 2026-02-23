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
    <div className="flex justify-center bg-white p-4 rounded-lg shadow-md">
      <canvas
        ref={canvasRef}
        width={768}
        height={120}
        className="border border-gray-300 rounded"
      />
    </div>
  )
}

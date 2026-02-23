'use client'

import { BELT_SIZES } from '@/database/constants'
import { useState } from 'react'

interface SizeRow {
  id: string
  size: string
  quantity: number
}

export function OrderForm() {
  const [sizeRows, setSizeRows] = useState<SizeRow[]>([
    { id: '1', size: '', quantity: 1 },
  ])

  const addSizeRow = () => {
    const newId = (Math.max(...sizeRows.map((r) => parseInt(r.id)), 0) + 1).toString()
    setSizeRows([...sizeRows, { id: newId, size: '', quantity: 1 }])
  }

  const updateSizeRow = (id: string, size: string, quantity: number) => {
    setSizeRows(
      sizeRows.map((row) => (row.id === id ? { ...row, size, quantity } : row))
    )
  }

  const removeSizeRow = (id: string) => {
    if (sizeRows.length > 1) {
      setSizeRows(sizeRows.filter((row) => row.id !== id))
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
        Order Quantities
      </h3>
      <p className="text-sm text-charcoal mb-4">
        Add the sizes and quantities you need:
      </p>

      <div className="space-y-3">
        {sizeRows.map((row) => (
          <div key={row.id} className="flex gap-3 items-end">
            <select
              value={row.size}
              onChange={(e) =>
                updateSizeRow(row.id, e.target.value, row.quantity)
              }
              className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
            >
              <option value="">Select Size</option>
              {BELT_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={row.quantity}
              onChange={(e) =>
                updateSizeRow(row.id, row.size, parseInt(e.target.value) || 1)
              }
              placeholder="Qty"
              className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm text-center focus:outline-none focus:border-gold"
            />
            {sizeRows.length > 1 && (
              <button
                onClick={() => removeSizeRow(row.id)}
                className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={addSizeRow}
        className="mt-4 w-full px-4 py-2 bg-sage text-white rounded-lg font-semibold hover:bg-sage/80 transition-all"
      >
        + Add Another Size
      </button>
    </div>
  )
}

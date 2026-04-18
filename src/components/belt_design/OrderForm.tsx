'use client'

import { BELT_SIZES } from '@/database/constants'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useState } from 'react'

interface SizeRow {
  id: string
  size: string
  quantity: number
}

interface OrderFormProps {
  sizeRows: SizeRow[]
  onAddSize: () => void
  onUpdateSize: (id: string, size: string, quantity: number) => void
  onRemoveSize: (id: string) => void
}

export function OrderForm({
  sizeRows,
  onAddSize,
  onUpdateSize,
  onRemoveSize,
}: OrderFormProps) {
  const [showSizingModal, setShowSizingModal] = useState(false)

  return (
    <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-7 rounded-none shadow-lg">
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-burgundy mb-3 sm:mb-4 pb-2 border-b-2 border-gold">
        Order Quantities
      </h3>
      <div className='flex justify-between gap-5'>
        <p className="text-xs sm:text-sm md:text-sm lg:text-base text-charcoal mb-3 sm:mb-4">
          Add the sizes and quantities you need
        </p>
        <button
          onClick={() => setShowSizingModal(true)}
          className="text-xs sm:text-sm md:text-sm lg:text-base text-blue-500 mb-3 sm:mb-4 hover:underline"
        >
          See Our Sizing Guide
        </button>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {sizeRows.map((row) => (
          <div key={row.id} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-end">
            <select
              value={row.size}
              onChange={(e) =>
                onUpdateSize(row.id, e.target.value, row.quantity)
              }
              className="flex-1 px-3 py-2 sm:py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
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
                onUpdateSize(row.id, row.size, parseInt(e.target.value) || 1)
              }
              placeholder="Qty"
              className="w-full sm:w-24 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm text-center focus:outline-none focus:border-gold"
            />
            {sizeRows.length > 1 && (
              <Button
                onClick={() => onRemoveSize(row.id)}
                className="py-5"
              >
                ✕
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        onClick={onAddSize}
        className='mt-2'
      >
        + Add Another Size
      </Button>

      {/* Sizing Guide Modal */}
      {showSizingModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-none shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b-2 border-gold p-4 flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-burgundy">
                Sizing Guide
              </h2>
              <button
                onClick={() => setShowSizingModal(false)}
                className="text-2xl text-charcoal hover:text-burgundy"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-lg font-serif font-bold text-burgundy mb-4 text-center">
                  Sizing Guide
                </h3>
                <Image
                  src="/assets/Sizing_Guide.webp"
                  alt="Sizing Guide"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="border-t-2 border-gray-200 pt-8">
                <h3 className="text-lg font-serif font-bold text-burgundy mb-4 text-center">
                  Belt & Collar Sizing Tables
                </h3>
                <Image
                  src="/assets/Size_Table.webp"
                  alt="Size Table"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t-2 border-gold p-4 flex justify-center">
              <Button onClick={() => setShowSizingModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

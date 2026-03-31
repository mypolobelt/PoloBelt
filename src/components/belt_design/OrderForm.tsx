'use client'

import { BELT_SIZES } from '@/database/constants'
import { Button } from '../ui/button'
import Link from 'next/link'

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
  return (
    <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-7 rounded-none shadow-lg">
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-burgundy mb-3 sm:mb-4 pb-2 border-b-2 border-gold">
        Order Quantities
      </h3>
      <div className='flex justify-between gap-5'>
        <p className="text-xs sm:text-sm md:text-sm lg:text-base text-charcoal mb-3 sm:mb-4">
          Add the sizes and quantities you need
        </p>
        <Link href="sizing" className=" text-xs sm:text-sm md:text-sm lg:text-base text-blue-500 mb-3 sm:mb-4">
          See Our Sizing Guide
        </Link>
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
    </div>
  )
}

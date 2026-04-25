'use client'

import { BELT_SIZES, COLLAR_SIZES, DOG_LEAD_SIZE } from '@/database/constants'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useState } from 'react'

type ProductType = 'Belt' | 'Collar' | 'Dog Lead'

interface SizeRow {
  id: string
  productType: ProductType
  size: string
  width: 'Standard (3cm)' | 'Slim (2.5cm)'
  stamped: 'Yes' | 'No'
  quantity: number
}

interface OrderFormProps {
  sizeRows: SizeRow[]
  onAddSize: () => void
  onUpdateSize: (
    id: string,
    productType: ProductType,
    size: string,
    width: 'Standard (3cm)' | 'Slim (2.5cm)',
    stamped: 'Yes' | 'No',
    quantity: number
  ) => void
  onRemoveSize: (id: string) => void
}

const PRODUCT_TYPES: ProductType[] = ['Belt', 'Collar', 'Dog Lead']

const getSizesForProductType = (productType: ProductType): string[] => {
  switch (productType) {
    case 'Belt':
      return BELT_SIZES
    case 'Collar':
      return COLLAR_SIZES
    case 'Dog Lead':
      return DOG_LEAD_SIZE
    default:
      return BELT_SIZES
  }
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
      <div className='flex flex-col sm:flex-row justify-between gap-5'>
        <div className="flex-1">
          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-charcoal mb-2">
            Add each product, size, width, stamp option and quantity you need
          </p>
          <p className="text-xs sm:text-sm text-amber-700 italic mb-3 sm:mb-4">
            * Stamps for collars and leads are by special request only.
          </p>
        </div>
        <button
          onClick={() => setShowSizingModal(true)}
          className="text-xs sm:text-sm md:text-sm lg:text-base text-blue-500 mb-3 sm:mb-4 hover:underline whitespace-nowrap"
        >
          See Our Sizing Guide
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {sizeRows.map((row) => {
          const availableSizes = getSizesForProductType(row.productType)
          const isCollarOrLead = row.productType === 'Collar' || row.productType === 'Dog Lead'

          return (
            <div key={row.id} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-end">
              <select
                value={row.productType}
                onChange={(e) => {
                  const newProductType = e.target.value as ProductType
                  const newSizes = getSizesForProductType(newProductType)
                  onUpdateSize(row.id, newProductType, newSizes[0] || '', row.width, row.stamped, row.quantity)
                }}
                className="w-full sm:w-32 px-3 py-2 sm:py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
              >
                {PRODUCT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                value={row.size}
                onChange={(e) =>
                  onUpdateSize(row.id, row.productType, e.target.value, row.width, row.stamped, row.quantity)
                }
                className="flex-1 px-3 py-2 sm:py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
              >
                <option value="">Select Size</option>
                {availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {row.productType === 'Belt' ? (
                <select
                  value={row.width}
                  onChange={(e) =>
                    onUpdateSize(
                      row.id,
                      row.productType,
                      row.size,
                      e.target.value as 'Standard (3cm)' | 'Slim (2.5cm)',
                      row.stamped,
                      row.quantity
                    )
                  }
                  className="w-full sm:w-40 px-3 py-2 sm:py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
                >
                  <option value="Standard (3cm)">Wide (3cm)</option>
                  <option value="Slim (2.5cm)">Slim (2.5cm)</option>
                </select>
              ) : (
                <div className="w-full sm:w-40 px-3 py-2 sm:py-2 border-2 border-gray-200 bg-gray-100 rounded-none font-sans text-xs sm:text-sm text-gray-500 text-center">
                  Standard Width
                </div>
              )}
              <select
                value={row.stamped}
                onChange={(e) =>
                  onUpdateSize(
                    row.id,
                    row.productType,
                    row.size,
                    row.width,
                    e.target.value as 'Yes' | 'No',
                    row.quantity
                  )
                }
                disabled={isCollarOrLead}
                className={`w-full sm:w-32 px-3 py-2 sm:py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold ${isCollarOrLead ? 'bg-gray-100 text-gray-400' : ''}`}
                title={isCollarOrLead ? 'Stamps for collars and leads are by special request only' : ''}
              >
                <option value="No">Stamped: No</option>
                <option value="Yes">Stamped: Yes</option>
              </select>
              <input
                type="number"
                min="0"
                value={row.quantity}
                onChange={(e) =>
                  onUpdateSize(
                    row.id,
                    row.productType,
                    row.size,
                    row.width,
                    row.stamped,
                    e.target.value === '' ? 0 : Math.max(0, parseInt(e.target.value) || 0)
                  )
                }
                onBlur={() => {
                  if (!row.quantity || row.quantity < 1) {
                    onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped, 1)
                  }
                }}
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
          )
        })}
      </div>

      <Button
        onClick={onAddSize}
        className='mt-4'
      >
        + Add Another Item
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

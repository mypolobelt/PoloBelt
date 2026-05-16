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
  stampImage: string | null
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

const labelClass = "block text-[10px] font-bold   uppercase tracking-widest mb-1"
const selectClass = "w-full px-3 py-2 border-2 border-gray-200 bg-white rounded-none font-sans text-sm focus:outline-none focus:border-gold transition-colors"
const disabledSelectClass = "w-full px-3 py-2 border-2 border-gray-100 bg-gray-50 rounded-none font-sans text-sm text-gray-400 cursor-not-allowed"

export function OrderForm({
  sizeRows,
  stampImage,
  onAddSize,
  onUpdateSize,
  onRemoveSize,
}: OrderFormProps) {
  const [showSizingModal, setShowSizingModal] = useState(false)

  // Determines whether the stamped dropdown should be disabled for a given row,
  // and what label to show in place of the dropdown.
  const getStampedState = (row: SizeRow): { disabled: boolean; reason: string | null } => {
    if (row.productType === 'Collar' || row.productType === 'Dog Lead') {
      return { disabled: true, reason: 'Special request only' }
    }
    if (row.width === 'Slim (2.5cm)') {
      return { disabled: true, reason: 'Not available on Slim' }
    }
    if (stampImage) {
      // Logo uploaded — stamp is always Yes for Standard belts, no choice needed
      return { disabled: true, reason: null }
    }
    return { disabled: false, reason: null }
  }

  const StampedField = ({ row, className }: { row: SizeRow; className?: string }) => {
    const { disabled, reason } = getStampedState(row)

    if (disabled) {
      return (
        <div className={`${disabledSelectClass} ${className ?? ''}`}>
          {reason ?? (row.stamped === 'Yes' ? 'Yes — logo applied' : 'No')}
        </div>
      )
    }

    return (
      <select
        value={row.stamped}
        onChange={(e) =>
          onUpdateSize(row.id, row.productType, row.size, row.width, e.target.value as 'Yes' | 'No', row.quantity)
        }
        className={`${selectClass} ${className ?? ''}`}
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
    )
  }

  return (
    <div className="bg-white rounded-none shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b-2 border-gold flex items-center justify-between">
        <h3 className="text-xl   font-bold  ">
          Order Quantities
        </h3>
        <button
          onClick={() => setShowSizingModal(true)}
          className="text-xs font-semibold text-blue-600 hover:underline whitespace-nowrap"
        >
          Sizing Guide →
        </button>
      </div>

      <div className="px-5 py-3 bg-amber-50 border-b border-amber-200">
        <p className="text-xs text-amber-800">
          Add each product, size, width and quantity below.{' '}
          <span className="italic">Stamps for collars and leads are by special request only.</span>
        </p>
      </div>

      {/* Column headers — desktop only */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1.2fr_1fr_80px_36px] gap-3 px-5 pt-4 pb-1">
        {['Product', 'Size', 'Width', 'Stamped', 'Qty', ''].map((h) => (
          <span key={h} className={labelClass}>{h}</span>
        ))}
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100">
        {sizeRows.map((row, index) => {
          const availableSizes = getSizesForProductType(row.productType)

          return (
            <div key={row.id} className="px-5 py-4">
              {/* Mobile: stacked card */}
              <div className="lg:hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold   uppercase tracking-widest">
                    Item {index + 1}
                  </span>
                  {sizeRows.length > 1 && (
                    <button
                      onClick={() => onRemoveSize(row.id)}
                      className="text-xs text-red-400 hover:text-red-600 font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Product</label>
                    <select
                      value={row.productType}
                      onChange={(e) => {
                        const newProductType = e.target.value as ProductType
                        const newSizes = getSizesForProductType(newProductType)
                        onUpdateSize(row.id, newProductType, newSizes[0] || '', row.width, row.stamped, row.quantity)
                      }}
                      className={selectClass}
                    >
                      {PRODUCT_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Size</label>
                    <select
                      value={row.size}
                      onChange={(e) => onUpdateSize(row.id, row.productType, e.target.value, row.width, row.stamped, row.quantity)}
                      className={selectClass}
                    >
                      <option value="">Select size</option>
                      {availableSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Width</label>
                    {row.productType === 'Belt' ? (
                      <select
                        value={row.width}
                        onChange={(e) =>
                          onUpdateSize(row.id, row.productType, row.size, e.target.value as 'Standard (3cm)' | 'Slim (2.5cm)', row.stamped, row.quantity)
                        }
                        className={selectClass}
                      >
                        <option value="Standard (3cm)">Wide (3cm)</option>
                        <option value="Slim (2.5cm)">Slim (2.5cm)</option>
                      </select>
                    ) : (
                      <div className={disabledSelectClass}>Standard</div>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Stamped</label>
                    <StampedField row={row} />
                  </div>
                  <div className="col-span-2">
                    <label className={labelClass}>Quantity</label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped, Math.max(1, row.quantity - 1))}
                        className="w-9 h-9 border-2 border-gray-200 text-gray-600 hover:border-gold hover:  font-bold text-lg flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={row.quantity}
                        onChange={(e) =>
                          onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped,
                            e.target.value === '' ? 1 : Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="w-16 py-2 border-2 border-gray-200 rounded-none font-sans text-sm text-center focus:outline-none focus:border-gold"
                      />
                      <button
                        onClick={() => onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped, row.quantity + 1)}
                        className="w-9 h-9 border-2 border-gray-200 text-gray-600 hover:border-gold hover:  font-bold text-lg flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: single row */}
              <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1.2fr_1fr_80px_36px] gap-3 items-center">
                <select
                  value={row.productType}
                  onChange={(e) => {
                    const newProductType = e.target.value as ProductType
                    const newSizes = getSizesForProductType(newProductType)
                    onUpdateSize(row.id, newProductType, newSizes[0] || '', row.width, row.stamped, row.quantity)
                  }}
                  className={selectClass}
                >
                  {PRODUCT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  value={row.size}
                  onChange={(e) => onUpdateSize(row.id, row.productType, e.target.value, row.width, row.stamped, row.quantity)}
                  className={selectClass}
                >
                  <option value="">Select size</option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>

                {row.productType === 'Belt' ? (
                  <select
                    value={row.width}
                    onChange={(e) =>
                      onUpdateSize(row.id, row.productType, row.size, e.target.value as 'Standard (3cm)' | 'Slim (2.5cm)', row.stamped, row.quantity)
                    }
                    className={selectClass}
                  >
                    <option value="Standard (3cm)">Wide (3cm)</option>
                    <option value="Slim (2.5cm)">Slim (2.5cm)</option>
                  </select>
                ) : (
                  <div className={disabledSelectClass}>Standard width</div>
                )}

                <StampedField row={row} />

                {/* Qty stepper */}
                <div className="flex items-center border-2 border-gray-200 focus-within:border-gold transition-colors">
                  <button
                    onClick={() => onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped, Math.max(1, row.quantity - 1))}
                    className="w-7 h-9 text-gray-500 hover:  font-bold text-base flex items-center justify-center"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={row.quantity}
                    onChange={(e) =>
                      onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped,
                        e.target.value === '' ? 1 : Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-full py-2 font-sans text-sm text-center focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    onClick={() => onUpdateSize(row.id, row.productType, row.size, row.width, row.stamped, row.quantity + 1)}
                    className="w-7 h-9 text-gray-500 hover:  font-bold text-base flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                {sizeRows.length > 1 ? (
                  <button
                    onClick={() => onRemoveSize(row.id)}
                    className="w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-500 border-2 border-transparent hover:border-red-200 transition-colors text-lg"
                    title="Remove row"
                  >
                    ✕
                  </button>
                ) : (
                  <div className="w-9" />
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
        <button
          onClick={onAddSize}
          className="flex items-center gap-2 text-sm font-semibold   hover:text-gold transition-colors"
        >
          <span className="w-6 h-6 border-2 border-current flex items-center justify-center text-base leading-none">+</span>
          Add Another Item
        </button>
      </div>

      {/* Sizing Guide Modal */}
      {showSizingModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-none shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b-2 border-gold p-4 flex justify-between items-center">
              <h2 className="text-xl   font-bold  ">Sizing Guide</h2>
              <button
                onClick={() => setShowSizingModal(false)}
                className="text-2xl text-charcoal hover: "
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-lg   font-bold   mb-4 text-center">Sizing Guide</h3>
                <Image src="/assets/Sizing_Guide.webp" alt="Sizing Guide" width={1000} height={600} className="w-full h-auto" />
              </div>
              <div className="border-t-2 border-gray-200 pt-8">
                <h3 className="text-lg   font-bold   mb-4 text-center">Belt & Collar Sizing Tables</h3>
                <Image src="/assets/Size_Table.webp" alt="Size Table" width={1000} height={600} className="w-full h-auto" />
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t-2 border-gold p-4 flex justify-center">
              <Button onClick={() => setShowSizingModal(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
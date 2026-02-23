/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { ColorPickerModal } from './ColorPickerModal'
import { Button } from '../ui/button'

interface ControlsPanelProps {
  designName: string
  onDesignNameChange: (name: string) => void
  beltWidth: string
  onBeltWidthChange: (width: string) => void
  leatherColor: string
  onLeatherColorChange: (color: string) => void
  buckleFinish: string
  onBuckleFinishChange: (finish: string) => void
  colorCount: string
  onColorCountChange: (count: string) => void
  threadColor1: string
  onThreadColor1Change: (color: string) => void
  threadColor2: string
  onThreadColor2Change: (color: string) => void
  threadColor3: string
  onThreadColor3Change: (color: string) => void
  stripeColor: string
  onStripeColorChange: (color: string) => void
  showColorCountSection: boolean
  showThreadColorSection: boolean
  showThreadColor3: boolean
  showStripeColor: boolean
  stampImage: string | null
  onStampChange: (file: File | null) => void
  onStampRemove: () => void
}

export function ControlsPanel({
  designName,
  onDesignNameChange,
  beltWidth,
  onBeltWidthChange,
  leatherColor,
  onLeatherColorChange,
  buckleFinish,
  onBuckleFinishChange,
  colorCount,
  onColorCountChange,
  threadColor1,
  onThreadColor1Change,
  threadColor2,
  onThreadColor2Change,
  threadColor3,
  onThreadColor3Change,
  stripeColor,
  onStripeColorChange,
  showColorCountSection,
  showThreadColorSection,
  showThreadColor3,
  showStripeColor,
  stampImage,
  onStampChange,
  onStampRemove,
}: ControlsPanelProps) {
  const [colorPickerOpen, setColorPickerOpen] = useState(false)
  const [currentColorField, setCurrentColorField] = useState<
    1 | 2 | 3 | 4 | null
  >(null)

  const openColorPicker = (field: 1 | 2 | 3 | 4) => {
    setCurrentColorField(field)
    setColorPickerOpen(true)
  }

  const handleSelectColor = (colorId: string, colorName: string) => {
    const displayText = `${colorName} ${colorId}`
    switch (currentColorField) {
      case 1:
        onThreadColor1Change(displayText)
        break
      case 2:
        onThreadColor2Change(displayText)
        break
      case 3:
        onThreadColor3Change(displayText)
        break
      case 4:
        onStripeColorChange(displayText)
        break
    }
    setColorPickerOpen(false)
  }

  const handleStampUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onStampChange(file)
    }
  }

  return (
    <>
      <aside className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-8 max-w-sm">
        {/* Design Presets */}
        <div className="mb-6">
          <h3 className="text-xl font-serif font-bold text-burgundy mb-3 pb-2 border-b-2 border-gold">
            Design Name
          </h3>
          <input
            type="text"
            value={designName}
            onChange={(e) => onDesignNameChange(e.target.value)}
            placeholder="Enter design name"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
          />
        </div>

        {/* Color Count Selection */}
        {showColorCountSection && (
          <div className="mb-6">
            <h3 className="text-xl font-serif font-bold text-burgundy mb-3 pb-2 border-b-2 border-gold">
              Number of Thread Colours
            </h3>
            <select
              value={colorCount}
              onChange={(e) => onColorCountChange(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
            >
              <option value="">-- Select --</option>
              <option value="2">2 Colors</option>
              <option value="3">3 Colors</option>
            </select>
          </div>
        )}

        {/* Thread Colors */}
        {showThreadColorSection && (
          <div className="mb-6">
            <h3 className="text-xl font-serif font-bold text-burgundy mb-3 pb-2 border-b-2 border-gold">
              Thread Colours
            </h3>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                Thread Colour 1
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={threadColor1}
                  readOnly
                  placeholder="e.g., red 46"
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
                />
                <button
                  onClick={() => openColorPicker(1)}
                  className="px-4 py-2 bg-gold text-white rounded-lg font-semibold bg-yellow-600 transition-all cursor-pointer"
                >
                  Choose
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                Thread Colour 2
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={threadColor2}
                  readOnly
                  placeholder="e.g., mid grey 399"
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
                />
                <button
                  onClick={() => openColorPicker(2)}
                  className="px-4 py-2 bg-gold text-white rounded-lg font-semibold bg-yellow-600 transition-all cursor-pointer"
                >
                  Choose
                </button>
              </div>
            </div>

            {showThreadColor3 && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Thread Colour 3
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={threadColor3}
                    readOnly
                    placeholder="Third color"
                    className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
                  />
                  <button
                    onClick={() => openColorPicker(3)}
                    className="px-4 py-2 bg-gold text-white rounded-lg font-semibold bg-yellow-600 cursor-pointer transition-all"
                  >
                    Choose
                  </button>
                </div>
              </div>
            )}

            {showStripeColor && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Stripe Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={stripeColor}
                    readOnly
                    placeholder="Stripe color"
                    className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
                  />
                  <button
                    onClick={() => openColorPicker(4)}
                    className="px-4 py-2 bg-gold text-white rounded-lg font-semibold bg-yellow-600 cursor-pointer transition-all"
                  >
                    Choose
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Additional Specifications */}
        <div className="mb-6">
          <h3 className="text-xl font-serif font-bold text-burgundy mb-3 pb-2 border-b-2 border-gold">
            Additional Specifications
          </h3>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              Belt Width
            </label>
            <select
              value={beltWidth}
              onChange={(e) => onBeltWidthChange(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
            >
              <option value="Standard (3cm)">Standard (3cm)</option>
              <option value="Slim (2.5cm)">Slim (2.5cm)</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              Leather Colour
            </label>
            <select
              value={leatherColor}
              onChange={(e) => onLeatherColorChange(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
            >
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="Tan">Tan</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              Buckle Finish
            </label>
            <select
              value={buckleFinish}
              onChange={(e) => onBuckleFinishChange(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
            >
              <option value="Brass">Brass</option>
              <option value="Silver">Silver</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              Custom Stamp
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleStampUpload}
              className="w-full px-2 py-1 border-2 border-gray-300 rounded-lg text-sm"
            />
            {stampImage && (
              <div className="mt-2">
                <img
                  src={stampImage}
                  alt="Stamp preview"
                  className="max-w-24 max-h-12 border border-gray-300 rounded"
                />
                <Button
                  onClick={onStampRemove}
                  className="mt-2 px-2 py-1 bg-red-600 text-white font-semibold hover:bg-red-700 transition-all text-sm"
                >
                  Remove Stamp
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>

      <ColorPickerModal
        isOpen={colorPickerOpen}
        onClose={() => setColorPickerOpen(false)}
        onSelectColor={handleSelectColor}
      />
    </>
  )
}

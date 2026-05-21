'use client'

import { BASIC_PALETTE, THREAD_COLORS } from '@/database/constants'
import { X } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'

interface ColorPickerModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectColor: (colorId: string, colorName: string) => void
}

export function ColorPickerModal({
  isOpen,
  onClose,
  onSelectColor,
}: ColorPickerModalProps) {
  const [activeTab, setActiveTab] = useState<'basic' | 'full'>('basic')

  if (!isOpen) return null

  const handleColorSelect = (colorId: string) => {
    const color = THREAD_COLORS[colorId]
    if (color) {
      onSelectColor(colorId, color.name)
      onClose()
    }
  }

  const colors =
    activeTab === 'basic'
      ? BASIC_PALETTE.map((id) => ({ id, ...THREAD_COLORS[id] }))
      : Object.entries(THREAD_COLORS).map(([id, color]) => ({ id, ...color }))

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
    >
      {/* Backdrop tap-to-close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-50 bg-white w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-t-2xl sm:rounded-none max-h-[92vh] sm:max-h-[80vh] flex flex-col shadow-2xl mx-0 sm:mx-4">

        {/* Drag handle on mobile */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-5 sm:px-8 py-4 border-b-2 border-yellow-600 shrink-0">
          <h3 className="text-xl sm:text-2xl font-bold">Choose Thread Colour</h3>
          <button
            onClick={onClose}
            className="text-charcoal hover:bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center transition-all shrink-0"
            aria-label="Close"
          >
            <X className="size-5 sm:size-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 px-5 sm:px-8 pt-4 pb-2 shrink-0">
          {(['basic', 'full'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-all border-2 ${activeTab === tab
                  ? 'bg-yellow-600 text-white border-yellow-600'
                  : 'bg-white border-gray-300 text-black hover:border-yellow-400'
                }`}
            >
              {tab === 'basic' ? 'Basic Colors' : 'Full Palette'}
            </button>
          ))}
        </div>

        {/* Color grid — scrollable */}
        <div className="overflow-y-auto px-5 sm:px-8 py-4" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            {colors.map(({ id, name, hex }) => (
              <button
                key={id}
                onClick={() => handleColorSelect(id)}
                className="border-2 border-gray-200 hover:border-yellow-500 active:scale-95 transition-all text-center bg-white p-1.5 sm:p-2 cursor-pointer"
              >
                <div
                  className="w-full aspect-square mb-1.5 border border-gray-300"
                  style={{ backgroundColor: hex }}
                />
                <div className="font-bold text-xs leading-tight text-gray-800">{id}</div>
                {activeTab === 'basic' && name && (
                  <div className="text-xs mt-0.5 leading-tight text-gray-500 truncate">{name}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null
  return createPortal(modal, document.body)
}
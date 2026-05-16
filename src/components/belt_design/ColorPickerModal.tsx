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

  const modal = (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      style={{ WebkitBackdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-none p-8 max-w-5xl w-full max-h-[80vh] md:max-h-[70vh] overflow-y-auto relative z-50 shadow-2xl" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gold">
          <h3 className="text-2xl font-bold  ">
            Choose Thread Colour
          </h3>
          <button
            onClick={onClose}
            className="text-2xl font-light text-charcoal hover:bg-cream rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all shrink-0"
          >
            <X className='size-6' />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-6 py-2 rounded-none font-semibold transition-all whitespace-nowrap ${activeTab === 'basic'
              ? 'bg-yellow-600 text-white cursor-pointer border-2 border-gold'
              : 'bg-white border-2 border-gray-300 text-black'
              }`}
          >
            Basic Colors
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`px-6 py-2 rounded-none font-semibold transition-all whitespace-nowrap ${activeTab === 'full'
              ? 'bg-yellow-600 text-white cursor-pointer border-2 border-gold'
              : 'bg-white border-2 border-gray-300 text-black'
              }`}
          >
            Full Palette
          </button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {(activeTab === 'basic'
            ? BASIC_PALETTE.map((id) => ({ id, ...THREAD_COLORS[id] }))
            : Object.entries(THREAD_COLORS).map(([id, color]) => ({
              id,
              ...color,
            }))
          ).map(({ id, name, hex }) => (
            <button
              key={id}
              onClick={() => handleColorSelect(id)}
              className="border-3 border-gray-300 rounded-none p-3 hover:border-gold transition-all text-center bg-white active:shadow-lg"
              style={{
                backgroundColor: 'white',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div
                className="w-full h-16 rounded-none mb-2 border border-gray-400"
                style={{
                  backgroundColor: hex,
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased'
                }}
              />
              <div className="font-bold text-sm" style={{ color: '#1A1A1A' }}>{id}</div>
              {activeTab === 'basic' && <div className="text-xs mt-1" style={{ color: '#3D3D3D' }}>{name}</div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null

  return createPortal(modal, document.body)
}

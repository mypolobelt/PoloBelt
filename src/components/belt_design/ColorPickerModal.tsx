'use client'

import { BASIC_PALETTE, THREAD_COLORS } from '@/database/constants'
import {  X } from 'lucide-react'
import { useState } from 'react'

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

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-none p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gold">
          <h3 className="text-2xl font-serif font-bold text-burgundy">
            Choose Thread Colour
          </h3>
          <button
            onClick={onClose}
            className="text-2xl font-light text-charcoal hover:bg-cream rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all"
          >
            <X className='size-6' />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-6 py-2 rounded-none font-semibold transition-all ${activeTab === 'basic'
              ? 'bg-cream text-charcoal bg-yellow-600 cursor-pointer hover:border-gold border-2 border-transparent'
              : 'bg-white border text-black'
              }`}
          >
            Basic Colors
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`px-6 py-2 rounded-none font-semibold transition-all ${activeTab === 'full'
              ? 'bg-cream text-charcoal bg-yellow-600 cursor-pointer hover:border-gold border-2 border-transparent'
              : 'bg-white border text-black'
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
              className="border-3 border-gray-300 rounded-none p-3 hover:border-gold hover:-translate-y-0.5 hover:shadow-lg transition-all text-center bg-white"
            >
              <div
                className="w-full h-16 rounded-none mb-2 border border-gray-400"
                style={{ backgroundColor: hex }}
              />
              <div className="font-bold text-burgundy text-sm">{id}</div>
              <div className="text-xs text-charcoal mt-1">{name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

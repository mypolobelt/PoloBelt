'use client'

import { useState } from 'react'
import { BASIC_PALETTE, THREAD_COLORS } from '@/database/constants'
import { THREAD_FAMILIES, THREAD_FAMILY_MAP } from '@/database/threadChart'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { ThreadPreviewModal } from './ThreadPreviewModal'

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
  const [previewId, setPreviewId] = useState<string | null>(null)

  if (!isOpen) return null

  const familyGroups = THREAD_FAMILIES.map((fam) => ({
    family: fam,
    ids: BASIC_PALETTE.filter((id) => THREAD_FAMILY_MAP[id] === fam.id),
  }))

  const selectAndClose = (colorId: string, colorName: string) => {
    onSelectColor(colorId, colorName)
    setPreviewId(null)
    onClose()
  }

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

        {/* Color grid — scrollable, grouped the same way as the thread chart page */}
        <div className="overflow-y-auto px-5 sm:px-8 py-4" style={{ WebkitOverflowScrolling: 'touch' }}>
          {familyGroups.map(({ family, ids }) => (
            <div key={family.id} className="mb-5 last:mb-0">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{family.name}</h4>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                {ids.map((id) => {
                  const color = THREAD_COLORS[id]
                  if (!color) return null
                  return (
                    <button
                      key={id}
                      onClick={() => setPreviewId(id)}
                      className="border-2 border-gray-200 hover:border-yellow-500 active:scale-95 transition-all text-center bg-white p-1.5 sm:p-2 cursor-pointer"
                    >
                      <div
                        className="w-full aspect-square mb-1.5 border border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="font-bold text-xs leading-tight text-gray-800 truncate">{color.name}</div>
                      {/^\d+$/.test(id) && (
                        <div className="text-[10px] mt-0.5 leading-tight text-gray-500">No. {id}</div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewId && (
        <ThreadPreviewModal
          threadId={previewId}
          allIds={BASIC_PALETTE}
          onNavigate={setPreviewId}
          onClose={() => setPreviewId(null)}
          ctaLabel="Select this colour"
          onCta={selectAndClose}
        />
      )}
    </div>
  )

  if (typeof document === 'undefined') return null
  return createPortal(modal, document.body)
}

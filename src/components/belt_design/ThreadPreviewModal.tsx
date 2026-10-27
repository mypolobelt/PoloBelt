'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { THREAD_COLORS } from '@/database/constants'
import { THREAD_FAMILIES, THREAD_FAMILY_MAP, THREAD_PHOTOS } from '@/database/threadChart'

interface ThreadPreviewModalProps {
  threadId: string
  /** Full ordered list of ids, for Previous / Next navigation. */
  allIds: string[]
  onNavigate: (id: string) => void
  onClose: () => void
  /** Primary action button. */
  ctaLabel: string
  onCta: (id: string, name: string) => void
}

export function ThreadPreviewModal({
  threadId,
  allIds,
  onNavigate,
  onClose,
  ctaLabel,
  onCta,
}: ThreadPreviewModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const color = THREAD_COLORS[threadId]
  const index = allIds.indexOf(threadId)
  const familyId = THREAD_FAMILY_MAP[threadId]
  const familyName = THREAD_FAMILIES.find((f) => f.id === familyId)?.name ?? ''
  const photo = THREAD_PHOTOS[threadId]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadId])

  const step = (dir: 1 | -1) => {
    if (index < 0) return
    const next = allIds[(index + dir + allIds.length) % allIds.length]
    onNavigate(next)
  }

  if (!mounted || !color) return null

  const modal = (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-white w-full sm:max-w-3xl rounded-t-2xl sm:rounded-none max-h-[94vh] sm:max-h-[85vh] overflow-y-auto shadow-2xl mx-0 sm:mx-4">
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-charcoal bg-white hover:bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center shadow transition-all"
        >
          <X className="size-5" />
        </button>

        <div className="grid sm:grid-cols-[1.3fr_1fr]">
          {/* Photo, or a "coming soon" placeholder when none exists yet */}
          <div className="relative p-3 sm:p-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt={`${color.name} on a polo belt`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-400">
                  <Camera className="size-8" />
                  <p className="text-sm font-medium">Example photo coming soon!</p>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="p-5 sm:p-6 sm:pr-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className="w-12 h-12 rounded-md border border-gray-300 shrink-0"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <h2 className="text-2xl font-bold leading-tight">{color.name}</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {/^\d+$/.test(threadId) ? `Thread No. ${threadId} · ` : ''}{familyName}
                </p>
              </div>
            </div>

            <button
              onClick={() => onCta(threadId, color.name)}
              className="min-h-11 px-4 bg-[#1a1a2e] text-white text-sm font-semibold hover:bg-[#2a2a46] transition-colors"
            >
              {ctaLabel}
            </button>

            <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-200 mt-auto">
              <button
                onClick={() => step(-1)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="size-4" /> Previous
              </button>
              <span className="text-[11px] text-gray-400">
                {index >= 0 ? `${index + 1} of ${allIds.length}` : ''}
              </span>
              <button
                onClick={() => step(1)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900"
              >
                Next <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

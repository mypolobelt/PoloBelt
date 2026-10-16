'use client'

import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Check, Plus } from 'lucide-react'
import { THREAD_COLORS } from '@/database/constants'
import { THREAD_FAMILIES, THREAD_FAMILY_MAP, THREAD_PHOTOS } from '@/database/threadChart'
import { beltIllustrationSrc, companionsFor } from '@/database/threadIllustration'

interface ThreadPreviewModalProps {
  threadId: string
  /** Full ordered list of ids, for Previous / Next navigation. */
  allIds: string[]
  onNavigate: (id: string) => void
  onClose: () => void
  /** Primary action button. */
  ctaLabel: string
  onCta: (id: string, name: string) => void
  /** "Add to my shades" shortlist — omit to hide (e.g. inside the design tool picker). */
  isSaved?: boolean
  onToggleSave?: (id: string) => void
}

const threadLabel = (id: string, name: string) => {
  const isNumbered = /^\d+$/.test(id)
  return isNumbered ? `${name} No. ${id}` : name
}

export function ThreadPreviewModal({
  threadId,
  allIds,
  onNavigate,
  onClose,
  ctaLabel,
  onCta,
  isSaved,
  onToggleSave,
}: ThreadPreviewModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const color = THREAD_COLORS[threadId]
  const index = allIds.indexOf(threadId)
  const familyId = THREAD_FAMILY_MAP[threadId]
  const familyName = THREAD_FAMILIES.find((f) => f.id === familyId)?.name ?? ''

  const imageSrc = useMemo(() => {
    const photo = THREAD_PHOTOS[threadId]
    if (photo) return photo
    const [a, b] = companionsFor(threadId)
    return beltIllustrationSrc(color?.hex ?? '#888888', THREAD_COLORS[a]?.hex ?? '#888888', THREAD_COLORS[b]?.hex ?? '#888888')
  }, [threadId, color])

  const isIllustration = !THREAD_PHOTOS[threadId]

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
          {/* Photo / illustration */}
          <div className="relative p-3 sm:p-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageSrc} alt={`${color.name} on a polo belt`} className="w-full h-full object-cover" />
              {isIllustration && (
                <span className="absolute left-3 bottom-3 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-gray-900 px-2.5 py-1 rounded-full">
                  Illustration
                </span>
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

            {isIllustration && (
              <p className="text-xs text-gray-500 leading-relaxed">
                A photo of a real belt in this shade will go here.
              </p>
            )}

            <div className="flex flex-col gap-2">
              {onToggleSave && (
                <button
                  onClick={() => onToggleSave(threadId)}
                  aria-pressed={!!isSaved}
                  className={`min-h-11 px-4 inline-flex items-center justify-center gap-2 text-sm font-semibold border-2 transition-colors ${isSaved ? 'border-charcoal bg-gray-50' : 'border-gray-300 hover:border-yellow-500'
                    }`}
                >
                  {isSaved ? <Check className="size-4" /> : <Plus className="size-4" />}
                  {isSaved ? 'In my shades' : 'Add to my shades'}
                </button>
              )}
              <button
                onClick={() => onCta(threadId, color.name)}
                className="min-h-11 px-4 bg-[#1a1a2e] text-white text-sm font-semibold hover:bg-[#2a2a46] transition-colors"
              >
                {ctaLabel}
              </button>
            </div>

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

export { threadLabel }

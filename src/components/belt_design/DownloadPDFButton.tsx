'use client'

import { useState, RefObject } from 'react'
import { pdf } from '@react-pdf/renderer'
import { DesignSpecPDFDocument, ThreadColorDetail } from './DesignSpecPDF'
import { THREAD_COLORS } from '@/database/constants'
import { Button } from '../ui/button'
import { renderBeltCanvas } from '@/database/canvas'

interface DownloadPDFButtonProps {
    designName: string
    threadColors: string[]
    leatherColor: string
    buckleFinish: string
    stampImage: string | null
    teamColorImage?: string | null
    canvasRef: RefObject<HTMLCanvasElement>
    gridData?: string[][]
}

function parseThreadColorDetails(threadColors: string[]): ThreadColorDetail[] {
    return threadColors.map(raw => {
        const parts = raw.trim().split(' ')
        const id = parts[parts.length - 1]
        const name = parts.slice(0, -1).join(' ')
        const dbEntry = THREAD_COLORS[id as keyof typeof THREAD_COLORS]
        return {
            name: (dbEntry as { name: string; hex: string } | undefined)?.name || name,
            id,
            hex: (dbEntry as { name: string; hex: string } | undefined)?.hex || '#888888',
        }
    })
}

async function getLogoPngDataUri(): Promise<string | undefined> {
    try {
        const img = new Image()
        img.src = '/assets/logo.webp'
        await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve()
            img.onerror = reject
        })
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth || 200
        canvas.height = img.naturalHeight || 200
        const ctx = canvas.getContext('2d')
        if (!ctx) return undefined
        ctx.drawImage(img, 0, 0)
        return canvas.toDataURL('image/png')
    } catch {
        return undefined
    }
}

export function DownloadPDFButton({
    designName,
    threadColors,
    leatherColor,
    buckleFinish,
    stampImage,
    teamColorImage,
    canvasRef,
    gridData,
}: DownloadPDFButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false)

    const handleDownload = async () => {
        setIsGenerating(true)
        try {
            // Use off-screen canvas for correct colors if gridData is available
            let beltImage: string | null = null
            if (gridData && gridData.length > 0) {
                const offscreen = document.createElement('canvas')
                offscreen.width = 768
                offscreen.height = 120
                renderBeltCanvas(offscreen, gridData, leatherColor || 'Brown', false)
                beltImage = offscreen.toDataURL('image/png')
            } else if (canvasRef.current) {
                beltImage = canvasRef.current.toDataURL('image/png')
            }

            const threadColorDetails = parseThreadColorDetails(threadColors)
            const logoUrl = await getLogoPngDataUri()

            const doc = (
                <DesignSpecPDFDocument
                    designName={designName}
                    beltImage={beltImage}
                    threadColorDetails={threadColorDetails}
                    leatherColor={leatherColor}
                    buckleFinish={buckleFinish}
                    stampImage={stampImage}
                    teamColorImage={teamColorImage}
                    logoUrl={logoUrl}
                />
            )

            const blob = await pdf(doc).toBlob()
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${designName || 'design-spec'}.pdf`
            a.click()
            URL.revokeObjectURL(url)
        } catch (err) {
            console.error('PDF generation failed:', err)
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <Button
            type="button"
            variant="outline"
            onClick={handleDownload}
            disabled={isGenerating}
            className="border-2 border-[#c9a84c] text-[#8a6a1a] bg-white hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition-all text-xs sm:text-sm font-semibold"
        >
            {isGenerating ? 'Generating PDF…' : '⬇ Download Design Spec (PDF)'}
        </Button>
    )
}

export { parseThreadColorDetails }

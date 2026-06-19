'use client'

import { useState, RefObject } from 'react'
import { pdf } from '@react-pdf/renderer'
import { DesignSpecPDFDocument, ThreadColorDetail } from './DesignSpecPDF'
import { THREAD_COLORS } from '@/database/constants'
import { Button } from '../ui/button'

interface DownloadPDFButtonProps {
    designName: string
    threadColors: string[]
    leatherColor: string
    buckleFinish: string
    stampImage: string | null
    canvasRef: RefObject<HTMLCanvasElement>
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

export function DownloadPDFButton({
    designName,
    threadColors,
    leatherColor,
    buckleFinish,
    stampImage,
    canvasRef,
}: DownloadPDFButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false)

    const handleDownload = async () => {
        setIsGenerating(true)
        try {
            const beltImage = canvasRef.current
                ? canvasRef.current.toDataURL('image/png')
                : null

            const threadColorDetails = parseThreadColorDetails(threadColors)

            const doc = (
                <DesignSpecPDFDocument
                    designName={designName}
                    beltImage={beltImage}
                    threadColorDetails={threadColorDetails}
                    leatherColor={leatherColor}
                    buckleFinish={buckleFinish}
                    stampImage={stampImage}
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
            className="border-gold text-gold hover:bg-gold hover:text-white transition-all text-xs sm:text-sm"
        >
            {isGenerating ? 'Generating...' : '⬇ Download Design Spec (PDF)'}
        </Button>
    )
}

export { parseThreadColorDetails }

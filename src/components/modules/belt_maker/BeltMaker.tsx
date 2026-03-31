/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { BeltCanvas } from '@/components/belt_design/BeltCanvas'
import { ControlsPanel } from '@/components/belt_design/ControlsPanel'
import { CustomerForm } from '@/components/belt_design/CustomerForm'
import { DesignPresets } from '@/components/belt_design/DesignPresets'
import { OrderForm } from '@/components/belt_design/OrderForm'
import { SpecificationSheet } from '@/components/belt_design/SpecificationSheet'
import { DESIGN_PRESETS, THREAD_COLORS } from '@/database/constants'
import { generateGridDataFromColors } from '@/database/utils'
import { useState, useRef, useEffect } from 'react'

const DEFAULT_PATTERN = Array(20)
    .fill(null)
    .map(() =>
        Array(64)
            .fill(null)
            .map(() => '#FFFFFF')
    )

interface SizeRow {
    id: string
    size: string
    quantity: number
}

export default function BeltMaker() {
    const [gridData, setGridData] = useState<string[][]>(DEFAULT_PATTERN)
    const [designName, setDesignName] = useState('')
    const [beltWidth, setBeltWidth] = useState('Standard (3cm)')
    const [leatherColor, setLeatherColor] = useState('Brown')
    const [buckleFinish, setBuckleFinish] = useState('Brass')
    const [colorCount, setColorCount] = useState('')
    const [threadColor1, setThreadColor1] = useState('')
    const [threadColor2, setThreadColor2] = useState('')
    const [threadColor3, setThreadColor3] = useState('')
    const [stripeColor, setStripeColor] = useState('')
    const [showColorCountSection, setShowColorCountSection] = useState(false)
    const [showThreadColorSection, setShowThreadColorSection] = useState(false)
    const [showThreadColor3, setShowThreadColor3] = useState(false)
    const [showStripeColor, setShowStripeColor] = useState(false)
    const [stampImage, setStampImage] = useState<string | null>(null)
    const [sizeRows, setSizeRows] = useState<SizeRow[]>([
        { id: '1', size: '', quantity: 1 },
    ])
    const canvasRef = useRef<HTMLCanvasElement>(null!)

    const handleStampChange = (file: File | null) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setStampImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleStampRemove = () => {
        setStampImage(null)
    }

    const handleAddSizeRow = () => {
        const newId = (Math.max(...sizeRows.map((r) => parseInt(r.id)), 0) + 1).toString()
        setSizeRows([...sizeRows, { id: newId, size: '', quantity: 1 }])
    }

    const handleUpdateSizeRow = (id: string, size: string, quantity: number) => {
        setSizeRows(
            sizeRows.map((row) => (row.id === id ? { ...row, size, quantity } : row))
        )
    }

    const handleRemoveSizeRow = (id: string) => {
        if (sizeRows.length > 1) {
            setSizeRows(sizeRows.filter((row) => row.id !== id))
        }
    }

    const handleResetDesign = () => {
        setGridData(DEFAULT_PATTERN)
        setDesignName('')
        setBeltWidth('Standard (3cm)')
        setLeatherColor('Brown')
        setBuckleFinish('Brass')
        setColorCount('')
        setThreadColor1('')
        setThreadColor2('')
        setThreadColor3('')
        setStripeColor('')
        setShowColorCountSection(false)
        setShowThreadColorSection(false)
        setShowThreadColor3(false)
        setShowStripeColor(false)
        setStampImage(null)
    }

    const handleResetOrder = () => {
        setSizeRows([{ id: '1', size: '', quantity: 1 }])
    }

    const handlePresetLoad = (presetId: string) => {
        const preset = DESIGN_PRESETS[presetId]
        if (preset) {
            setDesignName(preset.name)
            setLeatherColor(preset.leather)
            setBuckleFinish(preset.buckle)

            // Clear all thread colors first
            setThreadColor1('')
            setThreadColor2('')
            setThreadColor3('')
            setStripeColor('')
            setShowStripeColor(false)

            // Then set the new ones based on preset
            if (preset.threads.length > 0) {
                setThreadColor1(preset.threads[0])
            }
            if (preset.threads.length > 1) {
                setThreadColor2(preset.threads[1])
            }
            if (preset.threads.length > 2) {
                setThreadColor3(preset.threads[2])
            }
            if (preset.threads.length > 3) {
                setStripeColor(preset.threads[3])
                setShowStripeColor(true)
            } else {
                setShowStripeColor(false)
            }

            setColorCount(preset.threads.length.toString())
            setShowColorCountSection(true)
        }
    }

    useEffect(() => {
        if (colorCount === '2' || colorCount === '3') {
            setShowThreadColorSection(true)
            setShowThreadColor3(colorCount === '3')
        } else {
            setShowThreadColorSection(false)
            setShowThreadColor3(false)
        }
    }, [colorCount])

    useEffect(() => {
        let designType: 'classic-2' | 'classic-3' | 'stripe-2' | 'stripe-3' = 'classic-2'

        // Determine design type based on color count and stripe color
        if (colorCount === '3') {
            designType = stripeColor ? 'stripe-3' : 'classic-3'
        } else if (colorCount === '2') {
            designType = stripeColor ? 'stripe-2' : 'classic-2'
        }

        const newGridData = generateGridDataFromColors(
            threadColor1,
            threadColor2,
            threadColor3,
            stripeColor,
            THREAD_COLORS,
            designType
        )
        setGridData(newGridData)
    }, [threadColor1, threadColor2, threadColor3, stripeColor, colorCount])

    return (
        <main className="bg-linear-to-br from-white to-gray-100">
            <div className="md:w-10/12 mx-auto py-8 sm:py-12 lg:py-8">
                {/* Header - Responsive */}
                <header className="px-4 md:px-6 py-4 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-burgundy mb-1 sm:mb-2 drop-shadow-sm">
                        Polo Belt Designer
                    </h1>
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-sage">
                        Custom Argentinian Polo Belts
                    </p>
                </header>

                {/* Design Presets - Responsive */}
                <section className="px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-12">
                    <DesignPresets onLoadPreset={handlePresetLoad} />
                </section>

                {/* Belt Canvas - Shows below presets on mobile/tablet */}
                <section className="lg:hidden px-4 sm:px-6 mb-8 sm:mb-10">
                    {/* belt canvas */}
                    <div className="w-full flex justify-center">
                        <BeltCanvas
                            gridData={gridData}
                            leatherColor={leatherColor}
                        />
                    </div>

                    {/* Specification Sheet - Mobile only */}
                    <div className="mt-6 sm:mt-8 md:w-full">
                        <SpecificationSheet
                            designName={designName}
                            threadColors={[threadColor1, threadColor2, threadColor3, stripeColor].filter(
                                (c) => c
                            )}
                            beltWidth={beltWidth}
                            leatherColor={leatherColor}
                            buckleFinish={buckleFinish}
                            hasStamp={!!stampImage}
                        />
                    </div>
                    {/* Order Form - Mobile only */}
                    <div className="mt-6 sm:mt-8">
                        <OrderForm
                            sizeRows={sizeRows}
                            onAddSize={handleAddSizeRow}
                            onUpdateSize={handleUpdateSizeRow}
                            onRemoveSize={handleRemoveSizeRow}
                        />
                    </div>

                </section>

                {/* Main Content - Responsive Grid */}
                <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
                        {/* Left Panel - Controls */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20 sm:top-24 max-h-[calc(100vh-5rem)] overflow-y-auto">
                                <ControlsPanel
                                    designName={designName}
                                    onDesignNameChange={setDesignName}
                                    beltWidth={beltWidth}
                                    onBeltWidthChange={setBeltWidth}
                                    leatherColor={leatherColor}
                                    onLeatherColorChange={setLeatherColor}
                                    buckleFinish={buckleFinish}
                                    onBuckleFinishChange={setBuckleFinish}
                                    colorCount={colorCount}
                                    onColorCountChange={setColorCount}
                                    threadColor1={threadColor1}
                                    onThreadColor1Change={setThreadColor1}
                                    threadColor2={threadColor2}
                                    onThreadColor2Change={setThreadColor2}
                                    threadColor3={threadColor3}
                                    onThreadColor3Change={setThreadColor3}
                                    stripeColor={stripeColor}
                                    onStripeColorChange={setStripeColor}
                                    showColorCountSection={showColorCountSection}
                                    showThreadColorSection={showThreadColorSection}
                                    showThreadColor3={showThreadColor3}
                                    showStripeColor={showStripeColor}
                                    stampImage={stampImage}
                                    onStampChange={handleStampChange}
                                    onStampRemove={handleStampRemove}
                                />
                            </div>
                        </div>

                        {/* Right Panel - Everything (Hidden on mobile) */}
                        <div className="hidden lg:block lg:col-span-3 border">
                            {/* Design Name Display */}
                            <div className="text-center">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-burgundy p-2">
                                    {designName || 'New Design'}
                                </h2>
                            </div>

                            {/* Belt Canvas */}
                            <div className="w-full flex justify-center">
                                <BeltCanvas
                                    gridData={gridData}
                                    leatherColor={leatherColor}
                                />
                            </div>

                            {/* Specification Sheet */}
                            <SpecificationSheet
                                designName={designName}
                                threadColors={[threadColor1, threadColor2, threadColor3, stripeColor].filter(
                                    (c) => c
                                )}
                                beltWidth={beltWidth}
                                leatherColor={leatherColor}
                                buckleFinish={buckleFinish}
                                hasStamp={!!stampImage}
                            />

                            {/* Order Form */}
                            <div className="pt-4 sm:pt-6">
                                <OrderForm
                                    sizeRows={sizeRows}
                                    onAddSize={handleAddSizeRow}
                                    onUpdateSize={handleUpdateSizeRow}
                                    onRemoveSize={handleRemoveSizeRow}
                                />
                            </div>

                            {/* Customer Form */}
                            <div className="pt-4 sm:pt-6">
                                <CustomerForm
                                    canvasRef={canvasRef}
                                    stampImage={stampImage}
                                    designDetails={{
                                        designName,
                                        threadColors: [threadColor1, threadColor2, threadColor3, stripeColor].filter(c => c),
                                        beltWidth,
                                        leatherColor,
                                        buckleFinish,
                                        hasStamp: !!stampImage,
                                    }}
                                    sizeOrders={sizeRows
                                        .filter(row => row.size)
                                        .map(row => ({
                                            size: row.size,
                                            quantity: row.quantity,
                                        }))}
                                    onResetDesign={handleResetDesign}
                                    onResetOrder={handleResetOrder}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Customer Form - Mobile only */}
                <div className="lg:hidden  px-4 sm:px-6 mb-8 sm:mb-10">
                    <CustomerForm
                        canvasRef={canvasRef}
                        stampImage={stampImage}
                        designDetails={{
                            designName,
                            threadColors: [threadColor1, threadColor2, threadColor3, stripeColor].filter(c => c),
                            beltWidth,
                            leatherColor,
                            buckleFinish,
                            hasStamp: !!stampImage,
                        }}
                        sizeOrders={sizeRows
                            .filter(row => row.size)
                            .map(row => ({
                                size: row.size,
                                quantity: row.quantity,
                            }))}
                        onResetDesign={handleResetDesign}
                        onResetOrder={handleResetOrder}
                    />
                </div>
            </div>
        </main>
    )
}
/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import { BeltCanvas } from '@/components/belt_design/BeltCanvas'
import { CustomerForm } from '@/components/belt_design/CustomerForm'
import { DesignPresets } from '@/components/belt_design/DesignPresets'
import { OrderForm } from '@/components/belt_design/OrderForm'
import { SpecificationSheet } from '@/components/belt_design/SpecificationSheet'
import { ColorPickerModal } from '@/components/belt_design/ColorPickerModal'
import { Button } from '@/components/ui/button'
import { DESIGN_PRESETS, THREAD_COLORS } from '@/database/constants'
import { generateGridDataFromColors } from '@/database/utils'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
// Create empty grid pattern - just plain canvas with grid lines

const DEFAULT_PATTERN = Array(20)
    .fill(null)
    .map(() =>
        Array(64)
            .fill(null)
            .map(() => '#D3D3D3')
    )
type ProductType = 'Belt' | 'Collar' | 'Dog Lead'
interface SizeRow {
    id: string
    productType: ProductType
    size: string
    width: 'Standard (3cm)' | 'Slim (2.5cm)'
    stamped: 'Yes' | 'No'
    quantity: number
}
type Stage = 1 | 2 | 3 | 4

export default function BeltMaker() {

    const [currentStage, setCurrentStage] = useState<Stage>(1)
    const [gridData, setGridData] = useState<string[][]>(DEFAULT_PATTERN)
    const [designName, setDesignName] = useState('')
    const [beltWidth] = useState('Per size selection')
    const [leatherColor, setLeatherColor] = useState('Brown')
    const [buckleFinish, setBuckleFinish] = useState('Brass')
    const [colorCount, setColorCount] = useState('')
    const [threadColor1, setThreadColor1] = useState('')
    const [threadColor2, setThreadColor2] = useState('')
    const [threadColor3, setThreadColor3] = useState('')
    const [stripeColor, setStripeColor] = useState('')
    const [showThreadColorSection, setShowThreadColorSection] = useState(false)
    const [showThreadColor3, setShowThreadColor3] = useState(false)
    const [showStripeColor, setShowStripeColor] = useState(false)
    const [stampImage, setStampImage] = useState<string | null>(null)
    const [teamColorImage, setTeamColorImage] = useState<string | null>(null)
    const [sizeRows, setSizeRows] = useState<SizeRow[]>([
        { id: '1', productType: 'Belt', size: '', width: 'Standard (3cm)', stamped: 'No', quantity: 1 },
    ])
    const [colorPickerOpen, setColorPickerOpen] = useState(false)
    const [currentColorField, setCurrentColorField] = useState<1 | 2 | 3 | 4 | 5 | 6 | null>(null)
    const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
    const [classicColorCount, setClassicColorCount] = useState<2 | 3 | 4 | null>(null)
    const [classic3StripeColorCount, setClassic3StripeColorCount] = useState<2 | 3 | null>(null)
    const [outerStripeColor, setOuterStripeColor] = useState('')
    const [innerStripeColor, setInnerStripeColor] = useState('')
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
    const handleTeamColorImageChange = (file: File | null) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setTeamColorImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }
    const handleTeamColorImageRemove = () => {
        setTeamColorImage(null)
    }
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
    const goToStage = (stage: Stage) => {
        setCurrentStage(stage)
        scrollToTop()
    }
    const handleAddSizeRow = () => {
        const newId = (Math.max(...sizeRows.map((r) => parseInt(r.id)), 0) + 1).toString()
        setSizeRows([...sizeRows, { id: newId, productType: 'Belt', size: '', width: 'Standard (3cm)', stamped: 'No', quantity: 1 }])
    }
    const handleUpdateSizeRow = (
        id: string,
        productType: ProductType,
        size: string,
        width: 'Standard (3cm)' | 'Slim (2.5cm)',
        stamped: 'Yes' | 'No',
        quantity: number
    ) => {
        setSizeRows(
            sizeRows.map((row) => (row.id === id ? { ...row, productType, size, width, stamped, quantity } : row))
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
        setLeatherColor('Brown')
        setBuckleFinish('Brass')
        setColorCount('')
        setThreadColor1('')
        setThreadColor2('')
        setThreadColor3('')
        setStripeColor('')
        setShowThreadColorSection(false)
        setShowThreadColor3(false)
        setShowStripeColor(false)
        setStampImage(null)
        setTeamColorImage(null)
        setSelectedPreset(null)
        setClassicColorCount(null)
        setClassic3StripeColorCount(null)
        setOuterStripeColor('')
        setInnerStripeColor('')
        goToStage(1)
    }
    const handleResetOrder = () => {
        setSizeRows([{ id: '1', productType: 'Belt', size: '', width: 'Standard (3cm)', stamped: 'No', quantity: 1 }])

    }
    const handleBackToDesignSelection = () => {
        handleResetDesign()
        handleResetOrder()
    }
    const handlePresetLoad = (presetId: string) => {
        setGridData(DEFAULT_PATTERN)
        setSelectedPreset(presetId)
        const preset = DESIGN_PRESETS[presetId]
        if (!preset) return
        // Special handling for "The Classic" - load default colors but let user change count
        if (presetId === 'plk') {
            setDesignName('')
            setLeatherColor(preset.leather)
            setBuckleFinish(preset.buckle)
            setThreadColor1(preset.threads[0] || '')
            setThreadColor2(preset.threads[1] || '')
            setThreadColor3('')
            setStripeColor('')
            setColorCount('2')
            setShowStripeColor(false)
            setShowThreadColorSection(true)
            setShowThreadColor3(false)
            goToStage(2)
            return

        }
        // Special handling for "Classic + Stripe" - load 2 main colors + stripe
        if (presetId === 'mxyeo') {
            setDesignName('')
            setLeatherColor(preset.leather)
            setBuckleFinish(preset.buckle)
            setThreadColor1(preset.threads[0] || '')
            setThreadColor2(preset.threads[1] || '')
            setThreadColor3('')
            setStripeColor(preset.threads[3] || '')
            setColorCount('2')
            setShowStripeColor(true)
            setShowThreadColorSection(true)
            setShowThreadColor3(false)
            goToStage(2)
            return
        }
        // Special handling for "Classic & 3 Stripe" - load default colors but let user customize

        if (presetId === 'classic_3stripe') {
            setDesignName('')
            setLeatherColor(preset.leather)
            setBuckleFinish(preset.buckle)
            setThreadColor1(preset.threads[0] || '')
            setThreadColor2(preset.threads[1] || '')
            setThreadColor3('')
            setClassic3StripeColorCount(3)
            setOuterStripeColor(preset.threads[0] || '')
            setInnerStripeColor(preset.threads[1] || '')
            setStripeColor('')
            setColorCount('2')
            setShowStripeColor(false)
            setShowThreadColorSection(true)
            setShowThreadColor3(false)
            goToStage(2)
            return
        }
        // Standard preset loading for other designs - use preset's default colors

        setDesignName('')
        setLeatherColor(preset.leather)
        setBuckleFinish(preset.buckle)
        setThreadColor1(preset.threads[0] || '')
        setThreadColor2(preset.threads[1] || '')
        setThreadColor3(preset.threads[2] || '')
        setStripeColor(preset.threads[3] || '')
        setShowStripeColor(preset.threads.length > 3)
        setColorCount(preset.threads.length.toString())
        setShowThreadColorSection(true)
        setShowThreadColor3(preset.threads.length >= 3)
        goToStage(2)
    }
    // const handleClassicColorCount = (count: 2 | 3 | 4) => {
    //     setClassicColorCount(count)
    //     setColorCount(count.toString())
    //     setShowThreadColorSection(true)
    //     setShowThreadColor3(count >= 3)
    //     setShowStripeColor(count === 4)
    // }
    const handleClassic3StripeColorCount = (count: 2 | 3) => {
        setClassic3StripeColorCount(count)
        setColorCount(count.toString())
        setShowThreadColorSection(true)
        setShowThreadColor3(count === 3)
    }
    const openColorPicker = (field: 1 | 2 | 3 | 4 | 5 | 6) => {
        setCurrentColorField(field)
        setColorPickerOpen(true)
    }
    const handleSelectColor = (colorId: string, colorName: string) => {
        const displayText = `${colorName} ${colorId}`
        switch (currentColorField) {
            case 1:
                setThreadColor1(displayText)
                break
            case 2:
                setThreadColor2(displayText)
                break
            case 3:
                setThreadColor3(displayText)
                break
            case 4:
                setStripeColor(displayText)
                break
            case 5:
                setOuterStripeColor(displayText)
                break
            case 6:
                setInnerStripeColor(displayText)
                break
        }
        setColorPickerOpen(false)
    }
    const canProceedToStage3 = () => {
        if (selectedPreset === 'classic_3stripe') {
            const hasRequiredMainColours = classic3StripeColorCount === 2
                ? !!threadColor1 && !!threadColor2
                : !!threadColor1 && !!threadColor2 && !!threadColor3
            return !!colorCount && hasRequiredMainColours && !!outerStripeColor && !!innerStripeColor
        }
        if (colorCount === '4') {
            return !!threadColor1 && !!threadColor2 && !!threadColor3 && !!stripeColor
        }
        return !!colorCount && !!threadColor1 && !!threadColor2
    }
    const canProceedToStage4 = () => {
        return sizeRows.some(row => row.size && row.quantity > 0)
    }
    useEffect(() => {
        if (colorCount === '2' || colorCount === '3' || colorCount === '4') {
            setShowThreadColorSection(true)
            setShowThreadColor3(colorCount === '3' || colorCount === '4')
            setShowStripeColor(colorCount === '4' || !!stripeColor)
        } else {
            setShowThreadColorSection(false)
            setShowThreadColor3(false)
            setShowStripeColor(!!stripeColor)
        }
    }, [colorCount, stripeColor])
    useEffect(() => {
        if (!colorCount) {
            setGridData(DEFAULT_PATTERN)
            return
        }
        const needsSecondMainColour = !(selectedPreset === 'classic_3stripe' && classic3StripeColorCount === 2)
        if (!threadColor1 || (needsSecondMainColour && !threadColor2)) {
            setGridData(DEFAULT_PATTERN)
            return
        }
        let designType: 'classic-2' | 'classic-3' | 'classic-4' | 'stripe-2' | 'stripe-3' = 'classic-2'
        const colorCountNum = parseInt(colorCount) || 0
        const effectiveStripeColor = selectedPreset === 'classic_3stripe' ? outerStripeColor : stripeColor
        const hasStripe = !!effectiveStripeColor
        const effectiveThreadColor2 =
            selectedPreset === 'classic_3stripe' && classic3StripeColorCount === 2
                ? threadColor2
                : threadColor2
        if (selectedPreset === 'classic_3stripe') {
            if (!outerStripeColor || !innerStripeColor) {
                setGridData(DEFAULT_PATTERN)
                return
            }
            designType = 'stripe-3'
        } else if (colorCountNum === 4) {
            designType = 'classic-4'
        } else if (hasStripe) {
            designType = colorCountNum >= 3 ? 'stripe-3' : 'stripe-2'
        } else {
            designType = colorCount === '3' ? 'classic-3' : 'classic-2'
        }
        const newGridData = generateGridDataFromColors(
            threadColor1,
            effectiveThreadColor2,
            threadColor3,
            effectiveStripeColor,
            THREAD_COLORS,
            designType,
            innerStripeColor
        )
        setGridData(newGridData)
    }, [threadColor1, threadColor2, threadColor3, stripeColor, outerStripeColor, innerStripeColor, colorCount, selectedPreset, classic3StripeColorCount])
    const stageIndicator = (
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-8">
            {[1, 2, 3, 4].map((stage) => (
                <div key={stage} className="flex items-center">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all ${currentStage > stage
                        ? 'bg-primary text-white'
                        : currentStage === stage
                            ? 'border border-primary text-primary'
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                        {currentStage > stage ? (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            stage
                        )}
                    </div>
                    {stage < 4 && (
                        <div className={`w-8 sm:w-12 h-1 mx-1 sm:mx-2 transition-all ${currentStage > stage ? 'bg-primary' : 'bg-gray-200'
                            }`} />
                    )}
                </div>
            ))}
        </div>
    )
    const labels = ['Choose Design', 'Customise', 'Project Specification', 'Your Details']
    const stageLabel = (
        <div className="text-center mb-6">
            <span className="text-lg md:text-xl  font-bold">
                Stage {currentStage}: {labels[currentStage - 1]}
            </span>
        </div>
    )

    const PRICING = {
        Belt: [
            { min: 1, max: 1, price: 50 },
            { min: 2, max: 9, price: 45 },
            { min: 10, max: 30, price: 40 },
            { min: 31, max: 49, price: 37.5 },
            { min: 50, max: Infinity, price: 35 },
        ],
        Collar: [
            { min: 1, max: 1, price: 35 },
            { min: 2, max: 9, price: 31 },
            { min: 10, max: 30, price: 28 },
            { min: 31, max: 49, price: 25 },
            { min: 50, max: Infinity, price: 23.5 },
        ],
        'Dog Lead': [
            { min: 1, max: 1, price: 40 },
            { min: 2, max: 9, price: 36 },
            { min: 10, max: 30, price: 32 },
            { min: 31, max: 49, price: 28 },
            { min: 50, max: Infinity, price: 26.5 },
        ],
    }
    const getUnitPrice = (productType: ProductType, quantity: number) => {
        const tiers = PRICING[productType]

        const tier = tiers.find(t => quantity >= t.min && quantity <= t.max)
        return tier ? tier.price : 0
    }
    const calculatePricing = () => {
        let subtotal = 0

        sizeRows.forEach(row => {
            if (!row.size || row.quantity <= 0) return

            const unitPrice = getUnitPrice(row.productType, row.quantity)
            subtotal += unitPrice * row.quantity
        })

        // Logo fee logic
        const hasStamp = !!stampImage
        const totalQuantity = sizeRows.reduce((sum, row) => sum + row.quantity, 0)

        let logoFee = 0
        if (hasStamp && totalQuantity >= 30) {
            logoFee = 25 // per design (you have 1 design here)
        }

        return {
            subtotal,
            logoFee,
            total: subtotal + logoFee,
        }
    }
    const pricing = calculatePricing()
    return (
        <main className="bg-linear-to-br from-white to-gray-100 min-h-screen">
            <div className="w-full mx-auto py-6 sm:py-8 lg:py-6">
                {/* Header */}
                <header className="px-4 md:px-6 py-4 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-sm">
                        Custom Design Tool
                    </h1>
                </header>
                {/* Stage Indicator */}
                <div className="px-4 sm:px-6 lg:px-8 mt-6">
                    {currentStage > 1 && (
                        <div className="max-w-6xl mx-auto mb-4">
                            <Button
                                onClick={handleBackToDesignSelection}
                                variant="outline"
                                className="px-6"
                            >
                                ← Back to Design Selection
                            </Button>
                        </div>
                    )}
                    {stageIndicator}
                    {stageLabel}
                </div>
                {/* Stage 1: Choose Design */}
                {currentStage === 1 && (
                    <section className="px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white border p-6 rounded-none shadow-lg">
                                <DesignPresets onLoadPreset={handlePresetLoad} />
                            </div>
                            <div className="mt-4 text-center text-sm text-charcoal">
                                Can&apos;t find the design you want?{' '}
                                <a href="mailto:sales@mypolobelt.com" className="text-primary underline hover:text-primary/80">
                                    Email
                                </a>{' '}
                                us!
                            </div>
                        </div>
                    </section>
                )}
                {/* Stage 2: Customize Design */}
                {currentStage === 2 && (
                    <>
                        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
                            <div className="max-w-4xl mx-auto">
                                {/* Design Name */}
                                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                    <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                        Design Name
                                    </h3>
                                    <input
                                        type="text"
                                        value={designName}
                                        onChange={(e) => setDesignName(e.target.value)}
                                        placeholder="Enter a name for your design"
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                    />
                                </div>
                                {/* Number of Colors - Special handling for The Classic */}
                                {selectedPreset === 'plk' && !classicColorCount ? (
                                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                        <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold text-center">
                                            The Classic Design
                                        </h3>
                                        <p className="text-sm text-charcoal mb-4 text-center">
                                            Select how many colours you would like for your Classic design
                                        </p>
                                        <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                            <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                                Number of Thread Colours
                                            </h3>
                                            <select
                                                value={colorCount}
                                                onChange={(e) => setColorCount(e.target.value)}
                                                className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                            >
                                                <option value="">-- Select Number of Colours --</option>
                                                <option value="2">2 Colours</option>
                                                <option value="3">3 Colours</option>
                                                <option value="4">4 Colours</option>
                                                {/* {selectedPreset === 'plk' && <option value="4">4 Colours</option>} */}
                                            </select>
                                        </div>
                                    </div>
                                ) : selectedPreset === 'classic_3stripe' && !classic3StripeColorCount ? (
                                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                        <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold text-center">
                                            Classic + 3 Stripe Design
                                        </h3>
                                        <p className="text-sm text-charcoal mb-4 text-center">
                                            Select how many main colours you would like for your design
                                        </p>
                                        <div className="flex justify-center gap-4">
                                            <Button
                                                onClick={() => handleClassic3StripeColorCount(2)}
                                                variant="outline"
                                                className="px-8 py-3"
                                            >
                                                2 Colours
                                            </Button>
                                            <Button
                                                onClick={() => handleClassic3StripeColorCount(3)}
                                                variant="outline"
                                                className="px-8 py-3"
                                            >
                                                3 Colours
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                        <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                            Number of Thread Colours
                                        </h3>
                                        <select
                                            value={colorCount}
                                            onChange={(e) => setColorCount(e.target.value)}
                                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                        >
                                            <option value="">-- Select Number of Colours --</option>
                                            <option value="2">2 Colours</option>
                                            <option value="3">3 Colours</option>
                                            {selectedPreset === 'plk' && <option value="4">4 Colours</option>}
                                        </select>
                                    </div>
                                )}
                                {/* Thread Colors */}
                                {showThreadColorSection && (
                                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                        <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                            Choose Thread Colours
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                    Thread Colour 1
                                                </label>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={threadColor1}
                                                        readOnly
                                                        placeholder="Select a color"
                                                        className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                                    />
                                                    <Button
                                                        onClick={() => openColorPicker(1)}
                                                    >
                                                        Choose
                                                    </Button>
                                                </div>
                                            </div>
                                            {(selectedPreset !== 'classic_3stripe' || classic3StripeColorCount === 2) && (
                                                <div>
                                                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                        Thread Colour 2
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={threadColor2}
                                                            readOnly
                                                            placeholder="Select a color"
                                                            className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                                        />
                                                        <Button
                                                            onClick={() => openColorPicker(2)}                                                   >
                                                            Choose
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                            {showThreadColor3 && (
                                                <div>
                                                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                        Thread Colour 3
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={threadColor3}
                                                            readOnly
                                                            placeholder="Select a color"
                                                            className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                                        />
                                                        <Button
                                                            onClick={() => openColorPicker(3)}
                                                        >
                                                            Choose
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                            {showStripeColor && (
                                                <div>
                                                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                        {colorCount === '4' ? 'Thread Colour 4' : 'Stripe Colour'}
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={stripeColor}
                                                            readOnly
                                                            placeholder="Select a color"
                                                            className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                                        />
                                                        <Button
                                                            onClick={() => openColorPicker(4)}
                                                        >
                                                            Choose
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                            {/* Outer and Inner Stripe Colors for Classic 3 Stripe */}
                                            {selectedPreset === 'classic_3stripe' && classic3StripeColorCount && (
                                                <>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                            Outer Stripe Colour
                                                        </label>
                                                        <div className="flex gap-2">
                                                            <input
                                                                type="text"
                                                                value={outerStripeColor}
                                                                readOnly
                                                                placeholder="Select outer stripe color"
                                                                className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                                            />
                                                            <Button
                                                                onClick={() => openColorPicker(5)}
                                                            >
                                                                Choose
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                            Inner Stripe Colour
                                                        </label>
                                                        <div className="flex gap-2">
                                                            <input
                                                                type="text"
                                                                value={innerStripeColor}
                                                                readOnly
                                                                placeholder="Select inner stripe color"
                                                                className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                                            />
                                                            <Button
                                                                onClick={() => openColorPicker(6)}
                                                            >
                                                                Choose
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </>

                                            )}
                                        </div>
                                    </div>
                                )}
                                {/* Additional Specifications */}
                                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                    <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                        Belt Specifications
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                Leather Colour
                                            </label>
                                            <select
                                                value={leatherColor}
                                                onChange={(e) => setLeatherColor(e.target.value)}
                                                className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                            >
                                                <option value="Brown">Brown</option>
                                                <option value="Black">Black</option>
                                                <option value="Tan">Tan</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                                                Buckle Finish
                                            </label>
                                            <select
                                                value={buckleFinish}
                                                onChange={(e) => setBuckleFinish(e.target.value)}
                                                className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                            >
                                                <option value="Brass">Brass</option>
                                                <option value="Silver">Silver</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Logo Upload */}
                                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                                    <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                        Custom Logo / Stamp
                                    </h3>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleStampChange(e.target.files?.[0] || null)}
                                        className="w-full px-2 py-2 border-2 border-gray-300 rounded-none text-sm"
                                    />
                                    {stampImage && (
                                        <div className="mt-3">
                                            <Image
                                                src={stampImage}
                                                alt="Logo preview"
                                                height={1000}
                                                width={1000}
                                                className="max-w-12 max-h-12"
                                            />
                                            <Button
                                                onClick={handleStampRemove}
                                                className="mt-2 px-3 py-1 bg-red-600 text-white text-xs"
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                {/* Team Colors Upload */}
                                <div className="bg-white border p-6 rounded-none shadow-lg mb-3">
                                    <h3 className="text-lg font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
                                        Upload Team Colours
                                    </h3>
                                    <p className="text-xs text-charcoal mb-3">
                                        Upload an image of your team colours and we will endeavour to match them
                                    </p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleTeamColorImageChange(e.target.files?.[0] || null)}
                                        className="w-full px-2 py-2 border-2 border-gray-300 rounded-none text-sm"
                                    />
                                    {teamColorImage && (
                                        <div className="mt-3">
                                            <Image
                                                src={teamColorImage}
                                                alt="Team colors"
                                                className="max-w-12 max-h-12"
                                                height={1000}
                                                width={1000}
                                            />
                                            <Button
                                                onClick={handleTeamColorImageRemove}
                                                className="mt-2 px-3 py-1 bg-red-600 text-white text-xs"
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                {/* Navigation */}
                                <div className="flex justify-between items-center mt-2">
                                    <Button
                                        onClick={handleBackToDesignSelection}
                                        variant="outline"
                                        className="px-6"
                                    >
                                        ← Back to Designs
                                    </Button>
                                    <Button
                                        onClick={() => goToStage(3)}
                                        disabled={!canProceedToStage3()}
                                        className="px-8"
                                    >
                                        Continue to Sizes →
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </>
                )}
                {/* Stage 3: Sizes & Quantities */}
                {currentStage === 3 && (
                    <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
                        <div className="max-w-4xl mx-auto">
                            <SpecificationSheet
                                designName={designName}
                                threadColors={[threadColor1, threadColor2, threadColor3, stripeColor].filter((c) => c)}
                                beltWidth={beltWidth}
                                leatherColor={leatherColor}
                                buckleFinish={buckleFinish}
                                hasStamp={!!stampImage}
                            />
                            <div className="mt-6">
                                <OrderForm
                                    sizeRows={sizeRows}
                                    onAddSize={handleAddSizeRow}
                                    onUpdateSize={handleUpdateSizeRow}
                                    onRemoveSize={handleRemoveSizeRow}
                                />
                            </div>
                            <div className="bg-white border p-4 mt-6 shadow-md">
                                <h3 className="font-bold mb-2">Pricing Summary</h3>

                                <div className="text-sm space-y-1">
                                    <div>Subtotal: £{pricing.subtotal.toFixed(2)}</div>

                                    {pricing.logoFee > 0 && (
                                        <div>Logo Setup: £{pricing.logoFee.toFixed(2)}</div>
                                    )}

                                    <div className="font-bold text-lg">
                                        Total: £{pricing.total.toFixed(2)}
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        * Delivery not included
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <Button
                                    onClick={() => goToStage(2)}
                                    variant="outline"
                                >
                                    ← Back
                                </Button>
                                <Button
                                    onClick={() => goToStage(4)}
                                    disabled={!canProceedToStage4()}
                                    className="px-8"
                                >
                                    Continue  →
                                </Button>
                            </div>
                        </div>
                    </section>
                )}
                {/* Stage 4: Customer Details */}
                {currentStage === 4 && (
                    <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
                        <div className="max-w-4xl mx-auto">
                            <SpecificationSheet
                                designName={designName}
                                threadColors={[threadColor1, threadColor2, threadColor3, stripeColor].filter((c) => c)}
                                beltWidth={beltWidth}
                                leatherColor={leatherColor}
                                buckleFinish={buckleFinish}
                                hasStamp={!!stampImage}
                            />
                            <div className="mt-6">
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
                                        .filter(row => row.size && row.quantity > 0)
                                        .map(row => ({
                                            size: row.size,
                                            width: row.width,
                                            stamped: row.stamped,
                                            quantity: row.quantity,
                                        }))}
                                    onResetDesign={handleResetDesign}
                                    onResetOrder={handleResetOrder}
                                />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <Button
                                    onClick={() => goToStage(3)}
                                    variant="outline"
                                    className="px-6"
                                >
                                    ← Back to Sizes
                                </Button>
                                {/* <Button
                                    onClick={handleResetDesign}
                                    variant="outline"
                                    className="px-6 text-red-600 border-red-600 hover:bg-red-50"
                                >

                                    Start New Design

                                </Button> */}
                            </div>
                        </div>
                    </section>
                )}
                {/* Fixed Canvas at Bottom for Stages 2, 3, 4 */}
                {currentStage >= 2 && currentStage <= 4 && (
                    <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t-2 shadow-lg">
                        <div className="w-full flex justify-center p-2 sm:p-3 overflow-x-auto">
                            <BeltCanvas gridData={gridData} leatherColor={leatherColor} />
                        </div>
                    </div>
                )}
                <ColorPickerModal
                    isOpen={colorPickerOpen}
                    onClose={() => setColorPickerOpen(false)}
                    onSelectColor={handleSelectColor}
                />
            </div>
        </main>
    )
}
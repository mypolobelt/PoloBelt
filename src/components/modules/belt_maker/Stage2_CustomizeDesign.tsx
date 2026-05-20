import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'
import { ColorPickerModal } from '@/components/belt_design/ColorPickerModal'

interface Stage2CustomizeDesignProps {
    designName: string
    setDesignName: (name: string) => void
    selectedPreset: string | null
    colorCount: string
    setColorCount: (count: string) => void
    classicColorCount: 2 | 3 | 4 | null
    classic2StripeColorCount: 2 | 3 | null
    handleClassic2StripeColorCount: (count: 2 | 3) => void
    showThreadColorSection: boolean
    threadColor1: string
    threadColor2: string
    threadColor3: string
    stripeColor: string
    outerStripeColor: string
    innerStripeColor: string
    showThreadColor3: boolean
    showStripeColor: boolean
    setThreadColor1: (color: string) => void
    setThreadColor2: (color: string) => void
    setThreadColor3: (color: string) => void
    setStripeColor: (color: string) => void
    setOuterStripeColor: (color: string) => void
    setInnerStripeColor: (color: string) => void
    leatherColor: string
    setLeatherColor: (color: string) => void
    buckleFinish: string
    setBuckleFinish: (finish: string) => void
    stampImage: string | null
    setStampImage: (image: string | null) => void
    teamColorImage: string | null
    setTeamColorImage: (image: string | null) => void
    canProceed: boolean
    onBack: () => void
    onContinue: () => void
}

export const Stage2CustomizeDesign = ({
    designName,
    setDesignName,
    selectedPreset,
    colorCount,
    setColorCount,
    classicColorCount,
    classic2StripeColorCount,
    handleClassic2StripeColorCount,
    showThreadColorSection,
    threadColor1,
    threadColor2,
    threadColor3,
    stripeColor,
    outerStripeColor,
    innerStripeColor,
    showThreadColor3,
    showStripeColor,
    setThreadColor1,
    setThreadColor2,
    setThreadColor3,
    setStripeColor,
    setOuterStripeColor,
    setInnerStripeColor,
    leatherColor,
    setLeatherColor,
    buckleFinish,
    setBuckleFinish,
    stampImage,
    setStampImage,
    teamColorImage,
    setTeamColorImage,
    canProceed,
    onBack,
    onContinue,
}: Stage2CustomizeDesignProps) => {
    const [colorPickerOpen, setColorPickerOpen] = useState(false)
    const [currentColorField, setCurrentColorField] = useState<1 | 2 | 3 | 4 | 5 | 6 | null>(null)

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

    const handleStampChange = (file: File | null) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setStampImage(e.target?.result as string)
            reader.readAsDataURL(file)
        }
    }

    const handleTeamColorImageChange = (file: File | null) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setTeamColorImage(e.target?.result as string)
            reader.readAsDataURL(file)
        }
    }

    return (
        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="max-w-4xl mx-auto">
                <Button onClick={onBack} variant="outline" className="px-2 mb-4">
                    ← Back to Designs
                </Button>
                {/* Design Name */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                    <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold">
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

                {/* Color Count Selection */}
                {selectedPreset === 'plk' && !classicColorCount ? (
                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                        <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold text-center">
                            The Classic Design
                        </h3>
                        <p className="text-sm text-charcoal mb-4 text-center">
                            Select how many colours you would like for your Classic design
                        </p>
                        <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                            <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold">
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
                            </select>
                        </div>
                    </div>
                ) : selectedPreset === 'Classic_2Stripe' && !classic2StripeColorCount ? (
                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                        <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold text-center">
                            Classic + 2 Stripe Design
                        </h3>
                        <p className="text-sm text-charcoal mb-4 text-center">
                            Select how many main colours you would like for your design
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button onClick={() => handleClassic2StripeColorCount(2)} variant="outline" className="px-8 py-3">
                                2 Colours
                            </Button>
                            <Button onClick={() => handleClassic2StripeColorCount(3)} variant="outline" className="px-8 py-3">
                                3 Colours
                            </Button>
                        </div>
                    </div>
                ) : null}

                {/* Thread Colors */}
                {showThreadColorSection && (
                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                        <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold">
                            Choose Thread Colours
                        </h3>
                        <div className="space-y-4">
                            <ColorField
                                label="Thread Colour 1"
                                value={threadColor1}
                                onChoose={() => openColorPicker(1)}
                            />
                            {(selectedPreset !== 'Classic_2Stripe' || classic2StripeColorCount === 2) && (
                                <ColorField
                                    label="Thread Colour 2"
                                    value={threadColor2}
                                    onChoose={() => openColorPicker(2)}
                                />
                            )}
                            {showThreadColor3 && (
                                <ColorField
                                    label="Thread Colour 3"
                                    value={threadColor3}
                                    onChoose={() => openColorPicker(3)}
                                />
                            )}
                            {showStripeColor && (
                                <ColorField
                                    label={colorCount === '4' ? 'Thread Colour 4' : 'Stripe Colour'}
                                    value={stripeColor}
                                    onChoose={() => openColorPicker(4)}
                                />
                            )}
                            {selectedPreset === 'Classic_2Stripe' && classic2StripeColorCount && (
                                <>
                                    <ColorField
                                        label="Outer Stripe Colour"
                                        value={outerStripeColor}
                                        onChoose={() => openColorPicker(5)}
                                    />
                                    <ColorField
                                        label="Inner Stripe Colour"
                                        value={innerStripeColor}
                                        onChoose={() => openColorPicker(6)}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Belt Specifications */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                    <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold">
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
                    <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold">
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
                            <Image src={stampImage} alt="Logo preview" height={1000} width={1000} className="max-w-12 max-h-12" />
                            <Button onClick={() => setStampImage(null)} className="mt-2 px-3 py-1 bg-red-600 text-white text-xs">
                                Remove
                            </Button>
                        </div>
                    )}
                </div>

                {/* Team Colors Upload */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-3">
                    <h3 className="text-lg   font-bold   mb-4 pb-2 border-b-2 border-gold">
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
                            <Image src={teamColorImage} alt="Team colors" className="max-w-12 max-h-12" height={1000} width={1000} />
                            <Button onClick={() => setTeamColorImage(null)} className="mt-2 px-3 py-1 bg-red-600 text-white text-xs">
                                Remove
                            </Button>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-2">
                    <Button onClick={onBack} variant="outline" className="px-6">
                        ← Back to Designs
                    </Button>
                    <Button onClick={onContinue} disabled={!canProceed} className="px-8">
                        Continue to Sizes →
                    </Button>
                </div>
            </div>

            <ColorPickerModal
                isOpen={colorPickerOpen}
                onClose={() => setColorPickerOpen(false)}
                onSelectColor={handleSelectColor}
            />
        </section>
    )
}

// Helper component
const ColorField = ({ label, value, onChoose }: { label: string; value: string; onChoose: () => void }) => (
    <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            {label}
        </label>
        <div className="flex gap-2">
            <input
                type="text"
                value={value}
                readOnly
                placeholder="Select a color"
                className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
            />
            <Button onClick={onChoose}>Choose</Button>
        </div>
    </div>
)
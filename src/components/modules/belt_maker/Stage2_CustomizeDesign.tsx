'use client'
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
    classicColorCount: 2 | 3 | null
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
    stampOrientation: 'Buckle Left' | 'Buckle Right' | ''
    setStampOrientation: (val: 'Buckle Left' | 'Buckle Right' | '') => void
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
    stampOrientation,
    setStampOrientation,
    teamColorImage,
    setTeamColorImage,
    canProceed,
    onBack,
    onContinue,
}: Stage2CustomizeDesignProps) => {
    const [colorPickerOpen, setColorPickerOpen] = useState(false)
    const [currentColorField, setCurrentColorField] = useState<1 | 2 | 3 | 4 | 5 | 6 | null>(null)
    const [showOrientationInfo, setShowOrientationInfo] = useState(false)

    const openColorPicker = (field: 1 | 2 | 3 | 4 | 5 | 6) => {
        setCurrentColorField(field)
        setColorPickerOpen(true)
    }

    const handleSelectColor = (colorId: string, colorName: string) => {
        const displayText = `${colorName} ${colorId}`
        switch (currentColorField) {
            case 1: setThreadColor1(displayText); break
            case 2: setThreadColor2(displayText); break
            case 3: setThreadColor3(displayText); break
            case 4: setStripeColor(displayText); break
            case 5: setOuterStripeColor(displayText); break
            case 6: setInnerStripeColor(displayText); break
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
            <div className="max-w-7xl mx-auto">
                <Button onClick={onBack} variant="outline" className="px-2 mb-4">
                    ← Back to Designs
                </Button>

                {/* Design Name */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold">
                        Design Name <span className="text-red-500">*</span>
                    </h3>
                    <input
                        type="text"
                        value={designName}
                        onChange={(e) => setDesignName(e.target.value)}
                        placeholder="Enter a name for your design (required)"
                        className={`w-full px-3 py-2 border-2 rounded-none font-sans text-sm focus:outline-none focus:border-gold ${!designName.trim() ? 'border-red-300' : 'border-gray-300'}`}
                    />
                    {!designName.trim() && (
                        <p className="text-xs text-red-500 mt-1">A design name is required to continue.</p>
                    )}
                </div>

                {/* Colour Count Selection — Classic */}
                {selectedPreset === 'plk' && !classicColorCount && (
                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold text-center">
                            The Classic Design
                        </h3>
                        <p className="text-sm text-charcoal mb-4 text-center">
                            Select how many colours you would like for your Classic design
                        </p>
                        <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold">
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
                            </select>
                        </div>
                    </div>
                )}

                {/* Colour Count Selection — Classic 2 Stripe */}
                {selectedPreset === 'Classic_2Stripe' && !classic2StripeColorCount && (
                    <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold text-center">
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
                )}

                {/* Thread Colours */}
                {showThreadColorSection && (
                    <div className="bg-white border p-2 md:p-6 rounded-none shadow-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b-2">
                            Choose Thread Colours
                        </h3>
                        <div className="space-y-4">
                            <ColorField label="Thread Colour 1" value={threadColor1} onChoose={() => openColorPicker(1)} />
                            {(selectedPreset !== 'Classic_2Stripe' || classic2StripeColorCount === 2) && (
                                <ColorField label="Thread Colour 2" value={threadColor2} onChoose={() => openColorPicker(2)} />
                            )}
                            {showThreadColor3 && (
                                <ColorField label="Thread Colour 3" value={threadColor3} onChoose={() => openColorPicker(3)} />
                            )}
                            {showStripeColor && (
                                <ColorField label="Stripe Colour" value={stripeColor} onChoose={() => openColorPicker(4)} />
                            )}
                            {selectedPreset === 'Classic_2Stripe' && classic2StripeColorCount && (
                                <>
                                    <ColorField label="Outer Stripe Colour" value={outerStripeColor} onChoose={() => openColorPicker(5)} />
                                    <ColorField label="Inner Stripe Colour" value={innerStripeColor} onChoose={() => openColorPicker(6)} />
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Belt Specifications */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold">
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

                {/* Custom Logo / Stamp */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-6">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold">
                        Custom Logo / Stamp
                    </h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleStampChange(e.target.files?.[0] || null)}
                        className="w-full px-2 py-2 border-2 border-gray-300 rounded-none text-sm"
                    />
                    {stampImage && (
                        <div className="mt-3 space-y-4">
                            <div className="flex items-center gap-3">
                                <Image src={stampImage} alt="Logo preview" height={1000} width={1000} className="max-w-12 max-h-12" />
                                <Button onClick={() => setStampImage(null)} className="px-3 py-1 bg-red-600 text-white text-xs">
                                    Remove
                                </Button>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                                        Stamp Orientation
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setShowOrientationInfo(true)}
                                        className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold hover:bg-gold hover:text-white transition-colors flex items-center justify-center"
                                    >
                                        i
                                    </button>
                                </div>
                                <select
                                    value={stampOrientation}
                                    onChange={(e) => setStampOrientation(e.target.value as 'Buckle Left' | 'Buckle Right' | '')}
                                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
                                >
                                    <option value="">-- Select Orientation --</option>
                                    <option value="Buckle Left">Buckle Left</option>
                                    <option value="Buckle Right">Buckle Right</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Team Colours Upload */}
                <div className="bg-white border p-6 rounded-none shadow-lg mb-3">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gold">
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
                            <Image src={teamColorImage} alt="Team colours" height={1000} width={1000} className="max-w-12 max-h-12" />
                            <Button onClick={() => setTeamColorImage(null)} className="mt-2 px-3 py-1 bg-red-600 text-white text-xs">
                                Remove
                            </Button>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center gap-2 mt-2">
                    <Button onClick={onBack} variant="outline" className="shrink-0">
                        <span className="sm:hidden">← Back</span>
                        <span className="hidden sm:inline">← Back to Designs</span>
                    </Button>
                    <Button onClick={onContinue} disabled={!canProceed} className="shrink-0">
                        <span className="sm:hidden">Continue →</span>
                        <span className="hidden sm:inline">Continue to Sizes →</span>
                    </Button>
                </div>
            </div>

            <ColorPickerModal
                isOpen={colorPickerOpen}
                onClose={() => setColorPickerOpen(false)}
                onSelectColor={handleSelectColor}
            />

            {showOrientationInfo && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-none shadow-2xl max-w-lg w-full">
                        <div className="sticky top-0 bg-white border-b-2 border-gold p-4 flex justify-between items-center">
                            <h2 className="text-lg font-bold">Stamp Orientation</h2>
                            <button onClick={() => setShowOrientationInfo(false)} className="text-2xl text-charcoal">×</button>
                        </div>
                        <div className="p-6 space-y-3 text-sm text-charcoal">
                            <p className="font-semibold">Buckle Left / Buckle Right — what this means:</p>
                            <p>This refers to which side the buckle sits on when you&apos;re wearing the belt.</p>
                            <ul className="space-y-2 pl-2">
                                <li><span className="font-semibold">Buckle Left</span> — the buckle is held in your left hand, with the belt tail in your right.</li>
                                <li><span className="font-semibold">Buckle Right</span> — the buckle is held in your right hand, with the belt tail in your left.</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic pt-1">This affects which direction your stamp will appear once the belt is worn, so it&apos;s worth getting right before you order.</p>
                        </div>
                        <div className="border-t-2 border-gold p-4 flex justify-center">
                            <Button onClick={() => setShowOrientationInfo(false)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

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
                placeholder="Select a colour"
                className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-sm focus:outline-none focus:border-gold"
            />
            <Button onClick={onChoose}>Choose</Button>
        </div>
    </div>
)
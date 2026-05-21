'use client'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useBeltDesign } from './useBeltDesign'
import { StageIndicator } from './StageIndicator'
import { Stage1ChooseDesign } from './Stage1_ChooseDesign'

import { Stage3SizesAndPricing } from './Stage3_SizesAndPricing'
import { Stage4CustomerDetails } from './Stage4_CustomerDetails'
import { FixedBottomCanvas } from './FixedBottomCanvas'
import { Stage2CustomizeDesign } from './Stage2_CustomizeDesign'

export default function BeltMaker() {
    const {
        currentStage,
        gridData,
        designName,
        beltWidth,
        leatherColor,
        buckleFinish,
        colorCount,
        threadColor1,
        threadColor2,
        threadColor3,
        stripeColor,
        showThreadColorSection,
        showThreadColor3,
        showStripeColor,
        stampImage,
        teamColorImage,
        sizeRows,
        selectedPreset,
        classicColorCount,
        classic2StripeColorCount,
        outerStripeColor,
        innerStripeColor,
        setDesignName,
        setLeatherColor,
        setBuckleFinish,
        setColorCount,
        setThreadColor1,
        setThreadColor2,
        setThreadColor3,
        setStripeColor,
        setStampImage,
        setTeamColorImage,
        setOuterStripeColor,
        setInnerStripeColor,
        goToStage,
        handleAddSizeRow,
        handleUpdateSizeRow,
        handleRemoveSizeRow,
        handleResetDesign,
        handleResetOrder,
        handlePresetLoad,
        handleClassic2StripeColorCount,
        canProceedToStage3,
        canProceedToStage4,
    } = useBeltDesign()

    const canvasRef = useRef<HTMLCanvasElement>(null!)

    const handleUpdateSizeRowAdapter = (
        id: string,
        productType: Parameters<typeof handleUpdateSizeRow>[1],
        size: string,
        width: 'Standard (3cm)' | 'Slim (2.5cm)' | '',
        stamped: 'Yes' | 'No',
        quantity: number
    ) => {
        handleUpdateSizeRow(id, productType, size, width || 'Standard (3cm)', stamped, quantity)
    }

    const threadColors = [threadColor1, threadColor2, threadColor3, stripeColor].filter(c => c)
    const hasStamp = !!stampImage

    const handleBackToDesignSelection = () => {
        handleResetDesign()
        handleResetOrder()
    }

    return (
        <main className="bg-linear-to-br from-white to-gray-100">
            <div className="w-full mx-auto py-6 sm:py-8 lg:py-6">
                <header className="px-4 md:px-6 py-4 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-sm">
                        Custom Design Tool
                    </h1>
                </header>

                <div className="px-4 sm:px-6 lg:px-8 mt-6">
                    {/* {currentStage > 1 && (
                        <div className="max-w-6xl mx-auto mb-4">
                            <Button onClick={handleBackToDesignSelection} variant="outline" className="px-6">
                                ← Back to Design Selection
                            </Button>
                        </div>
                    )} */}
                    <StageIndicator currentStage={currentStage} />
                </div>

                {currentStage === 1 && <Stage1ChooseDesign onLoadPreset={handlePresetLoad} />}

                {currentStage === 2 && (
                    <Stage2CustomizeDesign
                        designName={designName}
                        setDesignName={setDesignName}
                        selectedPreset={selectedPreset}
                        colorCount={colorCount}
                        setColorCount={setColorCount}
                        classicColorCount={classicColorCount}
                        classic2StripeColorCount={classic2StripeColorCount}
                        handleClassic2StripeColorCount={handleClassic2StripeColorCount}
                        showThreadColorSection={showThreadColorSection}
                        threadColor1={threadColor1}
                        threadColor2={threadColor2}
                        threadColor3={threadColor3}
                        stripeColor={stripeColor}
                        outerStripeColor={outerStripeColor}
                        innerStripeColor={innerStripeColor}
                        showThreadColor3={showThreadColor3}
                        showStripeColor={showStripeColor}
                        setThreadColor1={setThreadColor1}
                        setThreadColor2={setThreadColor2}
                        setThreadColor3={setThreadColor3}
                        setStripeColor={setStripeColor}
                        setOuterStripeColor={setOuterStripeColor}
                        setInnerStripeColor={setInnerStripeColor}
                        leatherColor={leatherColor}
                        setLeatherColor={setLeatherColor}
                        buckleFinish={buckleFinish}
                        setBuckleFinish={setBuckleFinish}
                        stampImage={stampImage}
                        setStampImage={setStampImage}
                        teamColorImage={teamColorImage}
                        setTeamColorImage={setTeamColorImage}
                        canProceed={canProceedToStage3()}
                        onBack={handleBackToDesignSelection}
                        onContinue={() => goToStage(3)}
                    />
                )}

                {currentStage === 3 && (
                    <Stage3SizesAndPricing
                        stampImage={stampImage}
                        designName={designName}
                        threadColors={threadColors}
                        beltWidth={beltWidth}
                        leatherColor={leatherColor}
                        buckleFinish={buckleFinish}
                        hasStamp={hasStamp}
                        sizeRows={sizeRows}
                        onAddSize={handleAddSizeRow}
                        onUpdateSize={handleUpdateSizeRowAdapter}
                        onRemoveSize={handleRemoveSizeRow}
                        canProceed={canProceedToStage4()}
                        onBack={() => goToStage(2)}
                        onContinue={() => goToStage(4)}
                    />
                )}

                {currentStage === 4 && (
                    <Stage4CustomerDetails
                        designName={designName}
                        threadColors={threadColors}
                        beltWidth={beltWidth}
                        leatherColor={leatherColor}
                        buckleFinish={buckleFinish}
                        hasStamp={hasStamp}
                        stampImage={stampImage}
                        sizeRows={sizeRows}
                        canvasRef={canvasRef}
                        onResetDesign={handleResetDesign}
                        onResetOrder={handleResetOrder}
                        onBack={() => goToStage(3)}
                    />
                )}

                {currentStage >= 2 && currentStage <= 4 && (
                    <FixedBottomCanvas gridData={gridData} leatherColor={leatherColor} />
                )}
            </div>
        </main>
    )
}
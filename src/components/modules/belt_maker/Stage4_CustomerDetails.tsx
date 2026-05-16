import { Button } from '@/components/ui/button'
import { RefObject } from 'react'
import { SizeRow } from './useBeltDesign'
import { SpecificationSheet } from '@/components/belt_design/SpecificationSheet'
import { CustomerForm } from '@/components/belt_design/CustomerForm'

interface Stage4CustomerDetailsProps {
    designName: string
    threadColors: string[]
    beltWidth: string
    leatherColor: string
    buckleFinish: string
    hasStamp: boolean
    stampImage: string | null
    sizeRows: SizeRow[]
    canvasRef: RefObject<HTMLCanvasElement>
    onResetDesign: () => void
    onResetOrder: () => void
    onBack: () => void
}

export const Stage4CustomerDetails = ({
    designName,
    threadColors,
    beltWidth,
    leatherColor,
    buckleFinish,
    hasStamp,
    stampImage,
    sizeRows,
    canvasRef,
    onResetDesign,
    onResetOrder,
    onBack,
}: Stage4CustomerDetailsProps) => {
    const sizeOrders = sizeRows
        .filter(row => row.size && row.quantity > 0)
        .map(row => ({
            size: row.size,
            width: row.width,
            stamped: row.stamped,
            quantity: row.quantity,
        }))

    return (
        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="max-w-4xl mx-auto">
                {/* Prominent Design Name Header */}
                <div className="bg-white border-t-4 border-gold p-4 mb-6 shadow-md rounded-none">
                    <h2 className="text-2xl   font-bold">
                        {designName ? `Design Name : ${designName}` : 'Untitled Design'}
                    </h2>
                    <p className="text-sm text-charcoal mt-1">
                        Your custom design details are shown below.
                    </p>
                </div>

                <SpecificationSheet
                    designName={designName}
                    threadColors={threadColors}
                    beltWidth={beltWidth}
                    leatherColor={leatherColor}
                    buckleFinish={buckleFinish}
                    hasStamp={hasStamp}
                    stampImage={stampImage}
                />

                <div className="mt-6">
                    <CustomerForm
                        canvasRef={canvasRef}
                        stampImage={stampImage}
                        designDetails={{
                            designName,
                            threadColors,
                            beltWidth,
                            leatherColor,
                            buckleFinish,
                            hasStamp,
                        }}
                        sizeOrders={sizeOrders}
                        onResetDesign={onResetDesign}
                        onResetOrder={onResetOrder}
                    />
                </div>

                <div className="flex justify-between items-center mt-2">
                    <Button onClick={onBack} variant="outline" className="px-6">
                        ← Back to Sizes
                    </Button>
                </div>
            </div>
        </section>
    )
}
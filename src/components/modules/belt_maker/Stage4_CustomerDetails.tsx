import { Button } from '@/components/ui/button'
import { RefObject, useState } from 'react'
import { SizeRow } from './useBeltDesign'
import { SpecificationSheet } from '@/components/belt_design/SpecificationSheet'
import { CustomerForm } from '@/components/belt_design/CustomerForm'
import { OrderReviewModal } from './Orderreviewmodal'

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
    const [showReviewModal, setShowReviewModal] = useState(false)
    const [confirmedAndSubmit, setConfirmedAndSubmit] = useState(false)

    const sizeOrders = sizeRows
        .filter(row => row.size && row.quantity > 0)
        .map(row => ({
            size: row.size,
            width: row.width,
            stamped: row.stamped,
            quantity: row.quantity,
        }))

    // Called when the user clicks "Submit Enquiry" inside CustomerForm.
    // We intercept and show the review modal first.
    const handleRequestSubmit = () => {
        setShowReviewModal(true)
    }

    // Called when user confirms inside the modal.
    // Dismiss modal and let CustomerForm know it's clear to proceed.
    const handleModalConfirm = () => {
        setShowReviewModal(false)
        setConfirmedAndSubmit(true)
    }

    return (
        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="max-w-7xl mx-auto">
                <Button onClick={onBack} variant="outline" className="px-2 mb-4">
                    ← Back to Sizes
                </Button>

                {/* Prominent Design Name Header */}
                <div className="bg-white border-t-4 border-gold p-4 mb-6 shadow-md rounded-none">
                    <h2 className="text-2xl font-bold">
                        {designName ? `Design Name : ${designName}` : 'Untitled Design'}
                    </h2>
                    <p className="text-sm text-charcoal mt-1">
                        Your custom design details are shown below. When ready, hit{' '}
                        <strong>Submit Enquiry</strong> and we&apos;ll ask you to review everything
                        before it&apos;s sent.
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
                        // Pass these so CustomerForm can trigger the review gate.
                        // CustomerForm should call onRequestSubmit instead of
                        // submitting directly; once confirmedAndSubmit is true it
                        // may proceed (or re-check via the prop).
                        onRequestSubmit={handleRequestSubmit}
                        confirmedAndSubmit={confirmedAndSubmit}
                        onSubmitComplete={() => setConfirmedAndSubmit(false)}
                    />
                </div>

                <div className="flex justify-between items-center mt-2">
                    <Button onClick={onBack} variant="outline" className="px-6">
                        ← Back to Sizes
                    </Button>
                </div>
            </div>

            {/* ── Order Review Modal ── */}
            {showReviewModal && (
                <OrderReviewModal
                    designName={designName}
                    threadColors={threadColors}
                    leatherColor={leatherColor}
                    buckleFinish={buckleFinish}
                    hasStamp={hasStamp}
                    stampImage={stampImage}
                    sizeRows={sizeRows}
                    onConfirm={handleModalConfirm}
                    onEdit={() => setShowReviewModal(false)}
                />
            )}
        </section>
    )
}
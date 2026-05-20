import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ProductType, SizeRow } from './useBeltDesign'
import { OrderForm } from '@/components/belt_design/OrderForm'
import { SpecificationSheet } from '@/components/belt_design/SpecificationSheet'


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

const STAMP_COST = 25
const STAMP_FREE_THRESHOLD = 30

interface Stage3SizesAndPricingProps {
    designName: string
    threadColors: string[]
    beltWidth: string
    leatherColor: string
    buckleFinish: string
    hasStamp: boolean
    stampImage: string | null
    sizeRows: SizeRow[]
    onAddSize: () => void
    onUpdateSize: (id: string, productType: ProductType, size: string, width: 'Standard (3cm)' | 'Slim (2.5cm)', stamped: 'Yes' | 'No', quantity: number) => void
    onRemoveSize: (id: string) => void
    canProceed: boolean
    onBack: () => void
    onContinue: () => void
}

const getUnitPrice = (productType: ProductType, quantity: number) => {
    const tiers = PRICING[productType]
    const tier = tiers.find(t => quantity >= t.min && quantity <= t.max)
    return tier ? tier.price : 0
}

interface LineItem {
    label: string
    amount: number
}

const formatTierLabel = (min: number, max: number) => {
    if (max === Infinity) return `${min}+`
    if (min === max) return `${min}`
    return `${min}–${max}`
}

export const Stage3SizesAndPricing = ({
    designName,
    threadColors,
    beltWidth,
    leatherColor,
    buckleFinish,
    hasStamp,
    stampImage,
    sizeRows,
    onAddSize,
    onUpdateSize,
    onRemoveSize,
    canProceed,
    onBack,
    onContinue,
}: Stage3SizesAndPricingProps) => {
    const [showPricingModal, setShowPricingModal] = useState(false)

    const calculatePricing = () => {
        const lineItems: LineItem[] = []

        type GroupKey = string
        const groups: Record<GroupKey, { productType: ProductType; width: string; quantity: number }> = {}

        sizeRows.forEach(row => {
            if (!row.size || row.quantity <= 0) return
            const key: GroupKey = `${row.productType}__${row.width}`
            if (!groups[key]) {
                groups[key] = { productType: row.productType, width: row.width, quantity: 0 }
            }
            groups[key].quantity += row.quantity
        })

        Object.values(groups).forEach(g => {
            const unitPrice = getUnitPrice(g.productType, g.quantity)
            lineItems.push({
                label: `${g.quantity} × ${g.productType} (${g.width})`,
                amount: unitPrice * g.quantity,
            })
        })

        const productSubtotal = lineItems.reduce((sum, li) => sum + li.amount, 0)

        const stampLineItems: LineItem[] = []

        if (hasStamp) {
            const totalQuantity = sizeRows.reduce((sum, row) => sum + (row.quantity > 0 ? row.quantity : 0), 0)
            const stampIsFree = totalQuantity >= STAMP_FREE_THRESHOLD

            const stampedWidths = Array.from(
                new Set(
                    sizeRows
                        .filter(row => row.stamped === 'Yes' && row.quantity > 0)
                        .map(row => row.width)
                )
            )

            stampedWidths.forEach(width => {
                if (stampIsFree) {
                    stampLineItems.push({
                        label: `Stamp setup (${width}) — free for orders of ${STAMP_FREE_THRESHOLD}+`,
                        amount: 0,
                    })
                } else {
                    stampLineItems.push({
                        label: `Stamp setup (${width})`,
                        amount: STAMP_COST,
                    })
                }
            })
        }

        const stampSubtotal = stampLineItems.reduce((sum, li) => sum + li.amount, 0)
        const total = productSubtotal + stampSubtotal

        return { lineItems, stampLineItems, productSubtotal, stampSubtotal, total }
    }

    const pricing = calculatePricing()

    return (
        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="max-w-4xl mx-auto">
                <Button onClick={onBack} variant="outline" className="px-6 mb-4">← Back to Customise</Button>
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
                    <OrderForm
                        sizeRows={sizeRows}
                        stampImage={stampImage}
                        onAddSize={onAddSize}
                        onUpdateSize={onUpdateSize}
                        onRemoveSize={onRemoveSize}
                    />
                </div>
                <div className="bg-white border p-4 mt-6 shadow-md">
                    <div className='flex justify-between items-center'>
                        <h3 className="font-bold mb-2">Pricing Summary</h3>
                        <button
                            onClick={() => setShowPricingModal(true)}
                            className="text-xs font-semibold text-blue-600 hover:underline mb-2"
                        >
                            Pricing Policy →
                        </button>
                    </div>
                    <div className="text-sm space-y-1">
                        {pricing.lineItems.map((item, i) => (
                            <div key={i} className="flex justify-between">
                                <span>{item.label}</span>
                                <span>£{item.amount.toFixed(2)}</span>
                            </div>
                        ))}
                        {pricing.stampLineItems.map((item, i) => (
                            <div key={`stamp-${i}`} className="flex justify-between">
                                <span>{item.label}</span>
                                <span className={item.amount === 0 ? 'text-green-600 font-medium' : ''}>
                                    {item.amount === 0 ? 'Free' : `£${item.amount.toFixed(2)}`}
                                </span>
                            </div>
                        ))}
                        <div className="border-t pt-1 mt-1 font-bold text-lg flex justify-between">
                            <span>Total</span>
                            <span>£{pricing.total.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500">* Estimated quote, not including P&P</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <Button onClick={onBack} variant="outline">← Back to Customise</Button>
                    <Button onClick={onContinue} disabled={!canProceed} className="px-8">Continue to Your Details →</Button>
                </div>
            </div>

            {/* Pricing Policy Modal */}
            {showPricingModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-none shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b-2 border-gold p-4 flex justify-between items-center">
                            <h2 className="text-xl   font-bold  ">Pricing Policy</h2>
                            <button
                                onClick={() => setShowPricingModal(false)}
                                className="text-2xl text-charcoal hover: "
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <p className="text-sm text-charcoal">
                                Prices are per item and depend on the total quantity ordered. The more you order, the lower the unit price.
                            </p>

                            {(Object.entries(PRICING) as [ProductType, typeof PRICING.Belt][]).map(([product, tiers]) => (
                                <div key={product}>
                                    <h3 className="text-base   font-bold   mb-3 pb-1 border-b border-gold">
                                        {product}
                                    </h3>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-left">
                                                <th className="text-xs font-bold text-charcoal uppercase tracking-wider pb-2 w-1/2">Quantity</th>
                                                <th className="text-xs font-bold text-charcoal uppercase tracking-wider pb-2">Price per item</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {tiers.map((tier, i) => (
                                                <tr key={i} className="hover:bg-cream transition-colors">
                                                    <td className="py-2 text-charcoal">{formatTierLabel(tier.min, tier.max)}</td>
                                                    <td className="py-2 font-semibold text-charcoal">£{tier.price.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}

                            <div className="bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800 space-y-1">
                                <p className="font-semibold">Custom Logo / Stamp</p>
                                <p>A stamp setup fee of <span className="font-semibold">£{STAMP_COST}.00</span> applies per width ordered.</p>
                                <p>This fee is <span className="font-semibold">waived</span> for orders of {STAMP_FREE_THRESHOLD} or more items in total.</p>
                            </div>

                            <p className="text-xs text-gray-500 italic">
                                All prices are estimates and exclude postage & packaging. Final invoice will be confirmed on order.
                            </p>
                        </div>

                        <div className="sticky bottom-0 bg-white border-t-2 border-gold p-4 flex justify-center">
                            <Button onClick={() => setShowPricingModal(false)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
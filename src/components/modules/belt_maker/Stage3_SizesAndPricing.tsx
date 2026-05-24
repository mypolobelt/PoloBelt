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
const PP_EXAMPLES = [
    { flag: '🇬🇧', label: 'United Kingdom', price: '£4' },
    { flag: '🇪🇺', label: 'Europe', price: '£10' },
    { flag: '🇺🇸', label: 'USA', price: '£18' },
]

const STAMP_COST = 25

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
    onUpdateSize: (id: string, productType: ProductType, size: string, width: 'Standard (3cm)' | 'Slim (2.5cm)' | '', stamped: 'Yes' | 'No', quantity: number) => void
    onRemoveSize: (id: string) => void
    canProceed: boolean
    onBack: () => void
    onContinue: () => void
}

const getUnitPrice = (productType: ProductType, quantity: number) => {
    if (!productType) return 0
    const tiers = PRICING[productType as 'Belt' | 'Collar' | 'Dog Lead']
    const tier = tiers.find((t: { min: number; max: number; price: number }) => quantity >= t.min && quantity <= t.max)
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
        const groups: Record<string, { productType: ProductType; quantity: number; widths: Set<string> }> = {}

        sizeRows.forEach(row => {
            if (!row.productType || !row.size || row.quantity <= 0) return
            const key = row.productType
            if (!groups[key]) {
                groups[key] = { productType: row.productType, quantity: 0, widths: new Set() }
            }
            groups[key].quantity += row.quantity
            groups[key].widths.add(row.width)
        })

        Object.values(groups).forEach(g => {
            const unitPrice = getUnitPrice(g.productType, g.quantity)
            const widthLabel = g.widths.size > 1
                ? 'Regular & Slim'
                : Array.from(g.widths)[0] ?? ''
            lineItems.push({
                label: `${g.quantity} × ${g.productType} (${widthLabel}) @ £${unitPrice.toFixed(2)} each`,
                amount: unitPrice * g.quantity,
            })
        })

        const productSubtotal = lineItems.reduce((sum, li) => sum + li.amount, 0)
        const stampLineItems: LineItem[] = []

        if (stampImage) {
            const stampedWidths = Array.from(
                new Set(
                    sizeRows
                        .filter(row => row.productType === 'Belt' && row.quantity > 0 && row.stamped === 'Yes' && row.width)
                        .map(row => row.width)
                )
            )

            const hasSlim = stampedWidths.includes('Slim (2.5cm)')
            const hasRegular = stampedWidths.includes('Standard (3cm)')

            if (hasSlim) {
                stampLineItems.push({
                    label: 'Stamp setup — Slim (2.5cm) belt',
                    amount: STAMP_COST,
                })
            }

            if (hasRegular) {
                stampLineItems.push({
                    label: 'Stamp setup — Regular (3cm) belt',
                    amount: STAMP_COST,
                })
            }

            if (!hasSlim && !hasRegular) {
                stampLineItems.push({
                    label: 'Stamp setup — no stamped belts selected',
                    amount: 0,
                })
            }
        }

        const stampSubtotal = stampLineItems.reduce((sum, li) => sum + li.amount, 0)
        const total = productSubtotal + stampSubtotal

        return { lineItems, stampLineItems, productSubtotal, stampSubtotal, total }
    }

    const pricing = calculatePricing()

    return (
        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="max-w-7xl mx-auto">
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
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">Pricing Summary</h3>
                        <button
                            onClick={() => setShowPricingModal(true)}
                            className="text-xs font-semibold text-blue-600 hover:underline"
                        >
                            Pricing Policy →
                        </button>
                    </div>
                    <div className="text-sm space-y-1">
                        {pricing.lineItems.map((item, i) => (
                            <div key={i} className="flex justify-between gap-4">
                                <span>{item.label}</span>
                                <span className="shrink-0">£{item.amount.toFixed(2)}</span>
                            </div>
                        ))}
                        {pricing.stampLineItems.map((item, i) => (
                            <div key={`stamp-${i}`} className="flex justify-between gap-4">
                                <span>{item.label}</span>
                                <span className={`shrink-0 ${item.amount === 0 ? 'text-green-600 font-medium' : ''}`}>
                                    {item.amount === 0 ? 'No Stamp' : `£${item.amount.toFixed(2)}`}
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
                {/* ── Postage & Packaging Pricing ── */}
                <div className="mt-6 rounded-none overflow-hidden shadow-md">

                    {/* Section header — matches the gold-top-border style used elsewhere */}
                    <div className="bg-white px-4 py-3">
                        <h3 className="text-base font-semibold">Postage &amp; Packaging</h3>
                        <p className="text-sm text-charcoal mt-0.5">
                            Estimated P&amp;P for a single belt — the exact amount will be confirmed
                            on your invoice.
                        </p>
                    </div>

                    {/* Three-column price grid */}
                    <div className="grid grid-cols-3 divide-x border-t border-charcoal/20">
                        {PP_EXAMPLES.map(({ label, price }) => (
                            <div key={label} className="bg-white py-2 text-center">
                                {/* <div className="text-2xl mb-1">{flag}</div> */}
                                <p className="text-xs text-charcoal/60 mb-1">{label}</p>
                                <p className="text-xl font-bold">{price}</p>
                                <p className="text-xs mt-0.5">e.g. 1 belt</p>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer notice */}
                    <div className="bg-stone-100 border-t border-charcoal/10 px-4 py-3 flex gap-2 items-start">
                        {/* Simple info indicator */}
                        <span className="text-sm leading-5 shrink-0 mt-0.5">
                            ℹ
                        </span>
                        <p className="md:text-sm text-xs leading-relaxed">
                            <strong className="font-semibold">
                                P&amp;P is not charged at this stage.
                            </strong>{' '}
                            The figures above are indicative examples only. P&amp;P fluctuates based
                            on destination, weight, and quantity. Your final postage cost will be
                            accurately quoted on the invoice using{' '}
                            <strong className="font-semibold">UK Royal Mail</strong>{' '}
                            or the best available overseas courier - always with full tracking
                            included.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-2 mt-2">
                    <Button onClick={onBack} variant="outline" className="shrink-0">
                        <span className="sm:hidden">← Back</span>
                        <span className="hidden sm:inline">← Back to Customise</span>
                    </Button>
                    <Button onClick={onContinue} disabled={!canProceed} className="shrink-0">
                        <span className="sm:hidden">Continue →</span>
                        <span className="hidden sm:inline">Continue to Your Details →</span>
                    </Button>
                </div>
            </div>

            {/* Pricing Policy Modal */}
            {showPricingModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-none shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b-2 border-gold p-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Pricing Policy</h2>
                            <button
                                onClick={() => setShowPricingModal(false)}
                                className="text-2xl text-charcoal"
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
                                    <h3 className="text-base font-bold mb-3 pb-1 border-b border-gold">
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
                                <p>
                                    A stamp is a <span className="font-semibold">one-off setup fee of £{STAMP_COST}.00</span> per belt width.
                                </p>
                                <p>
                                    If you order only <span className="font-semibold">Regular (3cm)</span> belts with a stamp — no matter how many — it is charged <span className="font-semibold">once: £{STAMP_COST}.00</span>.
                                </p>
                                <p>
                                    If you order only <span className="font-semibold">Slim (2.5cm)</span> belts with a stamp, it is also charged <span className="font-semibold">once: £{STAMP_COST}.00</span>.
                                </p>
                                <p>
                                    If you order <span className="font-semibold">both</span> Regular and Slim belts with a stamp, two stamps must be made — so the fee is charged <span className="font-semibold">twice: £{STAMP_COST * 2}.00</span> total.
                                </p>
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
import { Button } from '@/components/ui/button'
import { ProductType, SizeRow } from './useBeltDesign'

// ─── Pricing (mirrors Stage3) ────────────────────────────────────────────────
const PRICING: Record<Exclude<ProductType, ''>, { min: number; max: number; price: number }[]> = {
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

const getUnitPrice = (productType: ProductType, quantity: number) => {
    if (!productType) return 0
    const tier = PRICING[productType as Exclude<ProductType, ''>].find(
        (t: { min: number; max: number; price: number }) => quantity >= t.min && quantity <= t.max
    )
    return tier?.price ?? 0
}

const parseThreadColor = (raw: string): { name: string; id: string } => {
    const parts = raw.trim().split(' ')
    const id = parts[parts.length - 1]
    const name = parts.slice(0, -1).join(' ')
    return { name: name || raw, id }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 pb-1.5 border-b border-gray-100">
        {children}
    </h3>
)

const Row = ({ label, value, bold }: { label: string; value: React.ReactNode; bold?: boolean }) => (
    <div className="flex justify-between items-start gap-4 py-1.5 border-b border-gray-50 last:border-0">
        <span className="text-xs text-gray-500 shrink-0">{label}</span>
        <span className={`text-xs text-right ${bold ? 'font-semibold text-gray-900' : 'text-gray-800'}`}>
            {value}
        </span>
    </div>
)

// ─── Props 
interface OrderReviewModalProps {
    designName: string
    selectedPreset: string | null
    threadColors: string[]
    leatherColor: string
    buckleFinish: string
    hasStamp: boolean
    stampImage: string | null
    sizeRows: SizeRow[]
    onConfirm: () => void
    onEdit: () => void
}
const PRESET_DISPLAY_NAMES: Record<string, string> = {
    plk: 'The Classic',
    classicstripe: 'The Classic Stripe',
    classicdoublestripe: 'Classic Double Stripe',
    chain: 'The Chain',
    aztec: 'The Aztec',
    triplestripe: 'Triple Stripe',
    diamondstripe: 'Diamond Stripe',
    stripey: 'The Stripey One',
    diamonds: 'Diamonds',
    altblock: 'Alt Block & Stripes',
    Classic_2Stripe: 'Classic 2-Stripe',
}

// ─── Main 
export const OrderReviewModal = ({
    designName,
    selectedPreset,
    threadColors,
    leatherColor,
    buckleFinish,
    hasStamp,
    stampImage,
    sizeRows,
    onConfirm,
    onEdit,
}: OrderReviewModalProps) => {

    // Only rows with a product selected, a size chosen, and qty > 0
    const validRows = sizeRows.filter(r => r.productType && r.size && r.quantity > 0)
    const totalItems = validRows.reduce((s, r) => s + r.quantity, 0)

    // Group by productType for pricing
    const groups: Record<string, { productType: ProductType; quantity: number; widths: Set<string> }> = {}
    validRows.forEach(row => {
        if (!groups[row.productType]) {
            groups[row.productType] = { productType: row.productType, quantity: 0, widths: new Set() }
        }
        groups[row.productType].quantity += row.quantity
        groups[row.productType].widths.add(row.width)
    })

    const lineItems = Object.values(groups).map(g => {
        const unitPrice = getUnitPrice(g.productType, g.quantity)
        return {
            label: `${g.productType} (${g.quantity} × £${unitPrice.toFixed(2)})`,
            amount: unitPrice * g.quantity,
        }
    })

    // Stamp fees
    const stampLineItems: { label: string; amount: number }[] = []
    if (stampImage) {
        const stampFree = totalItems >= STAMP_FREE_THRESHOLD
        const stampedWidths = Array.from(new Set(
            validRows
                .filter(r => r.productType === 'Belt' && r.stamped === 'Yes')
                .map(r => r.width)
        ))
        if (stampedWidths.includes('Slim (2.5cm)'))
            stampLineItems.push({ label: 'Stamp — Slim (2.5cm)', amount: STAMP_COST })
        if (stampedWidths.includes('Standard (3cm)'))
            stampLineItems.push(
                stampFree
                    ? { label: `Stamp — Regular (3cm) — free (${STAMP_FREE_THRESHOLD}+ items)`, amount: 0 }
                    : { label: 'Stamp — Regular (3cm)', amount: STAMP_COST }
            )
    }

    const total = [...lineItems, ...stampLineItems].reduce((s, li) => s + li.amount, 0)

    const leatherDotColor: Record<string, string> = {
        Brown: '#7B4F2E',
        Black: '#1A1A1A',
        Tan: '#C8935A',
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className="bg-white w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
                style={{ borderTop: '3px solid #C9A84C' }}
            >
                {/* ── Header ── */}
                <div className="sticky top-0 bg-white z-10 px-6 pt-5 pb-4 border-b border-gray-100 flex justify-between items-start">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                            Order Review
                        </p>
                        <h2 className="text-lg font-bold text-gray-900 leading-tight">
                            {designName || 'Untitled Design'}
                        </h2>
                        <p className="text-xs text-gray-400 mt-0.5">
                            Please check everything is correct before submitting.
                        </p>
                    </div>
                    <button
                        onClick={onEdit}
                        className="text-gray-400 hover:text-gray-700 text-2xl leading-none ml-4 mt-0.5"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* ── Body ── */}
                <div className="px-6 py-5 space-y-6 flex-1">

                    {/* DESIGN */}
                    <div>
                        <SectionHeading>Design Specification</SectionHeading>
                        <div className="space-y-0">
                            <Row
                                label="Design Template"
                                value={selectedPreset ? (PRESET_DISPLAY_NAMES[selectedPreset] ?? selectedPreset) : '—'}
                                bold
                            />
                            <Row label="Design Name" value={designName || <em className="text-gray-400">Untitled</em>} bold />
                            <Row
                                label="Leather"
                                value={
                                    <span className="flex items-center gap-1.5 justify-end">
                                        <span
                                            className="w-3 h-3 rounded-full inline-block border border-gray-300"
                                            style={{ backgroundColor: leatherDotColor[leatherColor] ?? '#999' }}
                                        />
                                        {leatherColor}
                                    </span>
                                }
                            />
                            <Row label="Buckle Finish" value={buckleFinish} />
                            <Row
                                label="Custom Stamp"
                                value={
                                    hasStamp
                                        ? <span className="text-green-700 font-medium">Yes — included</span>
                                        : 'No'
                                }
                            />
                        </div>
                    </div>

                    {/* THREAD COLOURS */}
                    {threadColors.length > 0 && (
                        <div>
                            <SectionHeading>Thread Colours</SectionHeading>
                            <div className="flex flex-wrap gap-2">
                                {threadColors.map((raw, i) => {
                                    const { name, id } = parseThreadColor(raw)
                                    return (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 border border-gray-200 rounded-sm px-2.5 py-1.5 text-xs bg-gray-50"
                                        >
                                            <span
                                                className="w-3.5 h-3.5 rounded-sm border border-gray-300 shrink-0"
                                                title={`ID: ${id}`}
                                            />
                                            <span className="font-medium text-gray-800">{name}</span>
                                            <span className="text-gray-400">{id}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* STAMP PREVIEW */}
                    {stampImage && (
                        <div>
                            <SectionHeading>Stamp / Logo</SectionHeading>
                            <div className="flex items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={stampImage}
                                    alt="Custom stamp"
                                    className="w-16 h-16 object-contain border border-gray-200 bg-gray-50 p-1"
                                />
                                <p className="text-xs text-gray-500">
                                    Your uploaded logo will be embossed on stamped belts.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* SIZES & QUANTITIES */}
                    <div>
                        <SectionHeading>Sizes &amp; Quantities</SectionHeading>
                        {validRows.length === 0 ? (
                            <p className="text-xs text-gray-400 italic">No sizes added.</p>
                        ) : (
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-left text-[10px] uppercase tracking-wider text-gray-400 border-b border-gray-200">
                                        <th className="pb-2 font-semibold">Product</th>
                                        <th className="pb-2 font-semibold">Size</th>
                                        <th className="pb-2 font-semibold">Width</th>
                                        {hasStamp && <th className="pb-2 font-semibold">Stamp</th>}
                                        <th className="pb-2 font-semibold text-right">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {validRows.map(row => (
                                        <tr
                                            key={row.id}
                                            className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors"
                                        >
                                            <td className="py-2 text-gray-700">{row.productType}</td>
                                            <td className="py-2 text-gray-700 font-medium">{row.size}</td>
                                            <td className="py-2 text-gray-500">
                                                {row.productType === 'Belt'
                                                    ? (row.width === 'Standard (3cm)' ? 'Standard' : 'Slim')
                                                    : '—'
                                                }
                                            </td>
                                            {hasStamp && (
                                                <td className="py-2">
                                                    {row.stamped === 'Yes'
                                                        ? <span className="text-green-700 font-medium">Yes</span>
                                                        : <span className="text-gray-400">No</span>
                                                    }
                                                </td>
                                            )}
                                            <td className="py-2 text-right font-bold text-gray-900">{row.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="border-t-2 border-gray-200">
                                        <td
                                            colSpan={hasStamp ? 4 : 3}
                                            className="pt-2.5 text-[10px] uppercase tracking-wider text-gray-400 font-semibold"
                                        >
                                            Total items
                                        </td>
                                        <td className="pt-2.5 text-right font-bold text-gray-900 text-sm">
                                            {totalItems}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        )}
                    </div>

                    {/* ESTIMATED PRICE */}
                    <div className="bg-gray-50 border border-gray-100 p-4">
                        <SectionHeading>Estimated Price</SectionHeading>
                        <div className="space-y-1.5 text-xs">
                            {lineItems.map((item, i) => (
                                <div key={i} className="flex justify-between gap-4">
                                    <span className="text-gray-600">{item.label}</span>
                                    <span className="shrink-0 font-medium text-gray-800">£{item.amount.toFixed(2)}</span>
                                </div>
                            ))}
                            {stampLineItems.map((item, i) => (
                                <div key={`s-${i}`} className="flex justify-between gap-4">
                                    <span className="text-gray-600">{item.label}</span>
                                    <span className={`shrink-0 font-medium ${item.amount === 0 ? 'text-green-600' : 'text-gray-800'}`}>
                                        {item.amount === 0 ? 'Free' : `£${item.amount.toFixed(2)}`}
                                    </span>
                                </div>
                            ))}
                            <div className="border-t border-gray-200 pt-2 mt-1 flex justify-between items-baseline">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Total</span>
                                <span className="text-base font-bold text-gray-900">£{total.toFixed(2)}</span>
                            </div>
                            <p className="text-[10px] text-gray-400 pt-0.5">Estimate only — excludes postage &amp; packaging</p>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center gap-3">
                    <Button variant="outline" onClick={onEdit} className="text-sm">
                        ← Edit Order
                    </Button>
                    <Button onClick={onConfirm} className="text-sm font-semibold">
                        Confirm →
                    </Button>
                </div>
            </div>
        </div>
    )
}
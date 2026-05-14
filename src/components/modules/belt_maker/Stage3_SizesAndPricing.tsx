import { Button } from '@/components/ui/button'
import { ProductType, SizeRow } from './useBeltDesign'
import { OrderForm } from '@/components/belt_design/OrderForm'
import { SpecificationSheet } from '@/components/belt_design/SpecificationSheet'
import Link from 'next/link'


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

interface Stage3SizesAndPricingProps {
    designName: string
    threadColors: string[]
    beltWidth: string
    leatherColor: string
    buckleFinish: string
    hasStamp: boolean
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

export const Stage3SizesAndPricing = ({
    designName,
    threadColors,
    beltWidth,
    leatherColor,
    buckleFinish,
    hasStamp,
    sizeRows,
    onAddSize,
    onUpdateSize,
    onRemoveSize,
    canProceed,
    onBack,
    onContinue,
}: Stage3SizesAndPricingProps) => {
    const calculatePricing = () => {
        let subtotal = 0
        sizeRows.forEach(row => {
            if (!row.size || row.quantity <= 0) return
            const unitPrice = getUnitPrice(row.productType, row.quantity)
            subtotal += unitPrice * row.quantity
        })

        const totalQuantity = sizeRows.reduce((sum, row) => sum + row.quantity, 0)
        let logoFee = 0
        if (hasStamp && totalQuantity >= 30) {
            logoFee = 25
        }

        return { subtotal, logoFee, total: subtotal + logoFee }
    }

    const pricing = calculatePricing()

    return (
        <section className="px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="max-w-4xl mx-auto">
                <SpecificationSheet
                    designName={designName}
                    threadColors={threadColors}
                    beltWidth={beltWidth}
                    leatherColor={leatherColor}
                    buckleFinish={buckleFinish}
                    hasStamp={hasStamp}
                />
                <div className="mt-6">
                    <OrderForm
                        sizeRows={sizeRows}
                        onAddSize={onAddSize}
                        onUpdateSize={onUpdateSize}
                        onRemoveSize={onRemoveSize}
                    />
                </div>
                <div className="bg-white border p-4 mt-6 shadow-md">
                    <div className='flex justify-between items-center'>
                        <h3 className="font-bold mb-2">Pricing Summary</h3>
                        <Link href="/pricing" target='_blank' className='text-blue-500 font-semibold hover:underline'>Pricing Policy</Link>
                    </div>
                    <div className="text-sm space-y-1">
                        <div>Subtotal: £{pricing.subtotal.toFixed(2)}</div>
                        {pricing.logoFee > 0 && <div>Logo Setup: £{pricing.logoFee.toFixed(2)}</div>}
                        <div className="font-bold text-lg">Total: £{pricing.total.toFixed(2)}</div> 
                        <p className="text-xs text-gray-500">* Estimated Quote, not including P&P</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <Button onClick={onBack} variant="outline">← Back</Button>
                    <Button onClick={onContinue} disabled={!canProceed} className="px-8">Continue →</Button>
                </div>
            </div>
        </section>
    )
}
'use client'

interface SpecificationSheetProps {
  designName: string
  threadColors: string[]
  beltWidth: string
  leatherColor: string
  buckleFinish: string
  hasStamp: boolean
}

export function SpecificationSheet({
  designName,
  threadColors,
  beltWidth,
  leatherColor,
  buckleFinish,
  hasStamp,
}: SpecificationSheetProps) {
  return (
    <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <h4 className="text-sm font-serif font-bold text-burgundy uppercase tracking-wider mb-2">
            Thread Colours
          </h4>
          <p className="text-sm text-charcoal">
            {threadColors.length > 0 ? threadColors.join(', ') : 'Not specified'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-serif font-bold text-burgundy uppercase tracking-wider mb-2">
            Belt Width
          </h4>
          <p className="text-sm text-charcoal">{beltWidth}</p>
        </div>
        <div>
          <h4 className="text-sm font-serif font-bold text-burgundy uppercase tracking-wider mb-2">
            Leather
          </h4>
          <p className="text-sm text-charcoal">{leatherColor}</p>
        </div>
        <div>
          <h4 className="text-sm font-serif font-bold text-burgundy uppercase tracking-wider mb-2">
            Buckle
          </h4>
          <p className="text-sm text-charcoal">{buckleFinish}</p>
        </div>
        <div>
          <h4 className="text-sm font-serif font-bold text-burgundy uppercase tracking-wider mb-2">
            Stamp
          </h4>
          <p className="text-sm text-charcoal">
            {hasStamp ? 'Custom Logo' : 'None'}
          </p>
        </div>
      </div>
    </div>
  )
}

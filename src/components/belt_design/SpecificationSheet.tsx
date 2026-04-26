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
  threadColors,
  beltWidth,
  leatherColor,
  buckleFinish,
  hasStamp,
}: SpecificationSheetProps) {
  return (
    <div className="bg-cream p-4 sm:p-5 md:p-6 lg:p-8 rounded-none border-l-4 border-[#0f1526] shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        <div>
          <h4 className="text-xs sm:text-xs md:text-sm font-bold text-burgundy uppercase tracking-wider mb-2 sm:mb-3">
            Thread Colours
          </h4>
          <p className="text-xs sm:text-sm text-charcoal">
            {threadColors.length > 0 ? threadColors.join(', ') : 'Not specified'}
          </p>
        </div>
        <div>
          <h4 className="text-xs sm:text-xs md:text-sm font-bold text-burgundy uppercase tracking-wider mb-2 sm:mb-3">
            Belt Width
          </h4>
          <p className="text-xs sm:text-sm text-charcoal">{beltWidth}</p>
        </div>
        <div>
          <h4 className="text-xs sm:text-xs md:text-sm font-bold text-burgundy uppercase tracking-wider mb-2 sm:mb-3">
            Leather
          </h4>
          <p className="text-xs sm:text-sm text-charcoal">{leatherColor}</p>
        </div>
        <div>
          <h4 className="text-xs sm:text-xs md:text-sm font-bold text-burgundy uppercase tracking-wider mb-2 sm:mb-3">
            Buckle
          </h4>
          <p className="text-xs sm:text-sm text-charcoal">{buckleFinish}</p>
        </div>
        <div>
          <h4 className="text-xs sm:text-xs md:text-sm font-bold text-burgundy uppercase tracking-wider mb-2 sm:mb-3">
            Stamp
          </h4>
          <p className="text-xs sm:text-sm text-charcoal">
            {hasStamp ? 'Custom Logo' : 'None'}
          </p>
        </div>
      </div>
    </div>
  )
}

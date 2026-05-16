'use client'

import Image from 'next/image'

interface SpecificationSheetProps {
  designName: string
  threadColors: string[]
  beltWidth: string
  leatherColor: string
  buckleFinish: string
  hasStamp: boolean
  stampImage?: string | null
}

export function SpecificationSheet({
  threadColors,
  beltWidth,
  leatherColor,
  buckleFinish,
  hasStamp,
  stampImage,
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
          {hasStamp ? (
            <div className="flex flex-col gap-2">
              {stampImage ? (
                <Image
                  src={stampImage}
                  alt="Custom stamp logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain border border-gray-200 bg-white"
                />
              ) : (
                <p className="text-xs sm:text-sm text-charcoal">Custom Logo</p>
              )}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-charcoal">None</p>
          )}
        </div>
      </div>
    </div>
  )
}
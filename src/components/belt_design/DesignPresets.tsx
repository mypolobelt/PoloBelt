'use client'

import { Button } from "../ui/button"

interface DesignPresetsProps {
  onLoadPreset: (presetName: string) => void
}

export function DesignPresets({ onLoadPreset }: DesignPresetsProps) {
  const presets = [
    { id: 'plk', name: 'The Classic' },
    { id: 'mxyeo', name: 'Classic + Stripe' },
    { id: 'Sunset_Elegance', name: 'Sunset Elegance' },
    { id: 'Ocean_Breeze', name: 'Ocean Breeze' },
    { id: 'Forest_Walk', name: 'Forest Walk' },
    { id: 'Royal_Purple', name: 'Royal Purple' },
    { id: 'design7', name: 'Ruby & Gold' },
    { id: 'design8', name: 'Emerald & Ivory' },
    { id: 'design9', name: 'Grape & Ivory' },
    { id: 'design10', name: 'Tangerine & Azure' },
    { id: 'design11', name: 'Crimson & Aurum' },
    { id: 'design12', name: 'Turquoise & Ivory' },
    { id: 'design13', name: 'Rose & Azure' },
    { id: 'design14', name: 'Chestnut & Vanilla' },
    { id: 'design15', name: 'Forest & Sunshine' },
    { id: 'design16', name: 'Wine & Pearl' },
  ]

  return (
    <div className="bg-white border p-6 rounded-none shadow-lg">
      <h3 className="text-xl font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
        Load Design
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
        {presets.map((preset) => (
          <Button
            key={preset.id}
            onClick={() => onLoadPreset(preset.id)}
            className=" border-gray-300 rounded-none hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all text-center"
          >
            <div className="text-xs font-semibold text-charcoal">{preset.name}</div>
          </Button>
        ))}
      </div>
    </div>
  )
}
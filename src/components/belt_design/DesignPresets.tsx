'use client'

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
  ]

  return (
    <div className="bg-white border p-6 rounded-none shadow-lg">
      <h3 className="text-xl font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
        Load Design
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {presets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onLoadPreset(preset.id)}
            className="border-3 border-gray-300 rounded-none p-3 hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all text-center bg-linear-to-br from-cream to-gray-100"
          >
            <div className="w-full h-24 bg-linear-to-br from-burgundy/20 to-gold/20 rounded mb-2 flex items-center justify-center">
              <span className="text-2xl font-light text-charcoal/30">+</span>
            </div>
            <div className="text-xs font-semibold text-charcoal">{preset.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

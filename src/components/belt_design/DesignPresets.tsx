'use client'
import Image from "next/image"
interface DesignPresetsProps {
  onLoadPreset: (presetName: string) => void
}

export function DesignPresets({ onLoadPreset }: DesignPresetsProps) {
  const presets = [
    { id: 'plk', name: 'The Classic', image: '/assets/belt_design/Classic.jpg' },
    { id: 'classicstripe', name: 'The Classic Stripe', image: '/assets/belt_design/ClassicStripe.jpg' },
    { id: 'classicdoublestripe', name: 'Classic Double Stripe', image: '/assets/belt_design/ClassicDoubleStripe.jpg' },
    { id: 'chain', name: 'The Chain', image: '/assets/belt_design/Chain.jpg' },
    { id: 'aztec', name: 'The Aztec', image: '/assets/belt_design/Aztec.jpg' },
    { id: 'triplestripe', name: 'Triple Stripe', image: '/assets/belt_design/ClassicTripleStripe.jpg' },
    { id: 'diamondstripe', name: 'Diamond Stripe', image: '/assets/belt_design/DiamondStripe.jpg' },
    { id: 'stripey', name: 'The Stripey One', image: '/assets/belt_design/Stripey.jpg' },
    { id: 'diamonds', name: 'Diamonds', image: '/assets/belt_design/leather.jpg' },
    { id: 'altblock', name: 'Alt Block & Stripes', image: '/assets/belt_design/BlockStripes.jpg' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {presets.map((preset) => (
        preset.image ? (
          <button
            key={preset.id}
            onClick={() => onLoadPreset(preset.id)}
            className="relative aspect-square border-2 border-gray-300 rounded-none hover:border-gold hover:shadow-xl transition-all overflow-hidden group"
          >
            <Image
              src={preset.image}
              alt={preset.name}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 300px"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ) : (
          <button
            key={preset.id}
            onClick={() => onLoadPreset(preset.id)}
            className="relative aspect-square border-2 border-gray-300 rounded-none hover:border-gold hover:shadow-xl transition-all overflow-hidden group bg-cream flex flex-col items-center justify-center p-2 gap-2 cursor-pointer"
          >
            <div className="w-full h-2/3 rounded-none flex items-center justify-center bg-[#552B06] overflow-hidden">
              <div className="w-full h-3 bg-[#3060A0] opacity-80" />
            </div>
            <div className="text-xs font-semibold text-charcoal text-center leading-tight">{preset.name}</div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
          </button>
        )
      ))}
    </div>
  )
}
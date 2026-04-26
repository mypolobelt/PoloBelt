'use client'

import Image from "next/image"
import { Button } from "../ui/button"

interface DesignPresetsProps {
  onLoadPreset: (presetName: string) => void
}

export function DesignPresets({ onLoadPreset }: DesignPresetsProps) {
  const presets = [
    { id: 'plk', name: 'The Classic', image: '/assets/belt_design/Classic.jpg' },
    { id: 'mxyeo', name: 'Classic + Stripe', image: '/assets/belt_design/ClassicStripe.jpg' },
    { id: 'Classic_2Stripe', name: 'Classic 2Stripe', image: '/assets/belt_design/Classic+2Stripe.jpg' },
    { id: 'classic_3stripe', name: 'Classic + 3 Stripe', image: '/assets/belt_design/Classic+3Stripe.jpg' },
    { id: 'Dot_Stripe', name: 'Dot Stripe', image: '/assets/belt_design/Dot+Stripe.jpg' },
    { id: 'Edge_Dot_Stripe', name: 'Edge Dot Stripe', image: '/assets/belt_design/Edge+Dot+Stripe.jpg' },
    { id: 'Middle_Stripe', name: 'Middle Stripe', image: '/assets/belt_design/MiddleStripe.jpg' },
    { id: 'Stripe_2', name: '2Stripe', image: '/assets/belt_design/2Stripe.jpg' },
    { id: 'Main2_Stripe2', name: '2Main 2Stripe', image: '/assets/belt_design/Main2+Stripe2.jpg' },
    { id: 'Double_Leather', name: 'Double Leather', image: '/assets/belt_design/leather.jpg' },
    { id: 'Tangerine_Azure', name: 'Tangerine & Azure' },
    { id: 'Crimson_Aurum', name: 'Crimson & Aurum' },
    { id: 'Turquoise_Ivory', name: 'Turquoise & Ivory' },
    { id: 'Rose_Azure', name: 'Rose & Azure' },
    { id: 'Chestnut_Vanilla', name: 'Chestnut & Vanilla' },
    { id: 'Forest_Sunshine', name: 'Forest & Sunshine' },
    { id: 'Wine_Pearl', name: 'Wine & Pearl' },
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
          <Button
            key={preset.id}
            onClick={() => onLoadPreset(preset.id)}
            className="h-full min-h-10 border-gray-300 rounded-none hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all text-center"
          >
            <div className="text-xs font-semibold text-charcoal">{preset.name}</div>
          </Button>
        )
      ))}
    </div>
  )
}
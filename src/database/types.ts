export interface ThreadColor {
  name: string
  hex: string
}

export interface ThreadColorDatabase {
  [key: string]: ThreadColor
}

export interface DesignPreset {
  name: string
  threads: string[]
  leather: string
  buckle: string
  stamp: string
  colors: string[]
  pattern: string[][] | null
}

export interface DesignPresets {
  [key: string]: DesignPreset
}

export interface SizeOrder {
  size: string
  width?: string
  stamped?: 'Yes' | 'No'
  quantity: number
}

export interface CustomerDetails {
  name: string
  email: string
  addressLine1: string
  addressLine2: string
  city: string
  stateRegion: string
  postcode: string
  country: string
}

export interface DesignData {
  designName: string
  threadColour1: string
  threadColour2: string
  threadColour3: string
  stripeColour: string
  beltWidth: string
  leatherColour: string
  buckleFinish: string
  hasStamp: boolean
}

export interface InvoiceRequest {
  design: DesignData
  sizes: SizeOrder[]
  customer: CustomerDetails
  canvasImage: string
  stampImage: string | null
  timestamp: string
}

export type DesignType = 'classic-2' | 'classic-3' | 'classic-4' | 'stripe-2' | 'stripe-3'
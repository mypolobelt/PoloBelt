'use client'

import { validateEmail } from '@/database/utils'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface SizeOrder {
  size: string
  quantity: number
}

interface DesignDetails {
  designName: string
  threadColors: string[]
  beltWidth: string
  leatherColor: string
  buckleFinish: string
  hasStamp: boolean
}

interface CustomerFormProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  stampImage: string | null
  designDetails?: DesignDetails
  sizeOrders?: SizeOrder[]
  onResetDesign?: () => void
  onResetOrder?: () => void
}

export function CustomerForm({
  stampImage,
  designDetails,
  sizeOrders,
  onResetDesign,
  onResetOrder,
}: CustomerFormProps) {
  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [stateRegion, setStateRegion] = useState('')
  const [postcode, setPostcode] = useState('')
  const [country, setCountry] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')

    // Validation
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    if (!customerName) {
      setErrorMessage('Please enter your name.')
      return
    }

    if (!addressLine1 || !city || !country) {
      setErrorMessage(
        'Please fill in your complete postal address (at minimum: Address Line 1, City, and Country).'
      )
      return
    }

    setIsLoading(true)

    try {
      // Prepare order data
      const orderData = {
        customerName,
        email,
        address: {
          line1: addressLine1,
          line2: addressLine2,
          city,
          stateRegion,
          postcode,
          country,
        },
        designDetails: {
          ...(designDetails || {
            designName: 'Custom Design',
            threadColors: [],
            beltWidth: 'Standard (3cm)',
            leatherColor: 'Brown',
            buckleFinish: 'Brass',
            hasStamp: false,
          }),
          stampImage,
        },
        orderQuantities: sizeOrders || [],
        timestamp: new Date().toISOString(),
      }

      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to send order')
      }

      setSuccessMessage(
        'Your order has been sent successfully! Check your email for confirmation.'
      )
      // Reset form
      setCustomerName('')
      setEmail('')
      setAddressLine1('')
      setAddressLine2('')
      setCity('')
      setStateRegion('')
      setPostcode('')
      setCountry('')
      // Reset design and order state
      onResetDesign?.()
      onResetOrder?.()
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage(
        'Failed to send order. Please try again or contact support.'
      )
    } finally {
      setIsLoading(false)
      router.push("/belt-maker")
    }
  }

  return (
    <div className="bg-white p-4 md:p-6 lg:p-7 rounded-none shadow-lg">
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-burgundy mb-3 sm:mb-4 pb-2 border-b-2 border-gold">
        Customer Details
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            Name
          </label>
          <input
            type="text"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Full name"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            placeholder="email@example.com"
            className={`w-full px-3 py-2 border-2 rounded-none font-sans text-xs sm:text-sm focus:outline-none ${emailError ? 'border-red-500' : 'border-gray-300 focus:border-gold'
              }`}
          />
          {emailError && (
            <p className="text-xs text-red-600 mt-1">{emailError}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            Postal Address
          </label>
          <p className="text-xs text-charcoal italic mb-2">
            Full address required to accurately quote total cost including shipping
          </p>
          <div className="space-y-2">
            <input
              type="text"
              required
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="Address Line 1 (Street, House Number)"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              placeholder="Address Line 2 (Apartment, Suite, etc.) - Optional"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City / Town"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              required
              value={stateRegion}
              onChange={(e) => setStateRegion(e.target.value)}
              placeholder="County / State / Region"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              required
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Postcode / ZIP Code"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 sm:mt-5 py-2 sm:py-3 uppercase tracking-wide disabled:opacity-50 transition-all text-xs sm:text-sm"
        >
          {isLoading ? 'Sending...' : 'Request Invoice'}
        </Button>

        {successMessage && (
          <div className="mt-4 p-3 sm:p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded-none text-xs sm:text-sm">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mt-4 p-3 sm:p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded-none text-xs sm:text-sm">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  )
}

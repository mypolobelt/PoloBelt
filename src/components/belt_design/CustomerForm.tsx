'use client'

import { validateEmail } from '@/database/utils'
import { THREAD_COLORS } from '@/database/constants'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { countries } from '@/database/countries'

interface SizeOrder {
  size: string
  width: string
  stamped: 'Yes' | 'No'
  quantity: number
}

interface DesignDetails {
  designName: string
  selectedPreset?: string | null
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
  onRequestSubmit?: () => void
  confirmedAndSubmit?: boolean
  onSubmitComplete?: () => void
}

function parseThreadColorDetails(threadColors: string[]) {
  return threadColors.map(raw => {
    const parts = raw.trim().split(' ')
    const id = parts[parts.length - 1]
    const name = parts.slice(0, -1).join(' ')
    const dbEntry = THREAD_COLORS[id as keyof typeof THREAD_COLORS] as { name: string; hex: string } | undefined
    return { name: dbEntry?.name || name, id, hex: dbEntry?.hex || '#888888' }
  })
}

export function CustomerForm({
  canvasRef,
  stampImage,
  designDetails,
  sizeOrders,
  onResetDesign,
  onResetOrder,
  onRequestSubmit,
  confirmedAndSubmit,
  onSubmitComplete,
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
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [pendingReset, setPendingReset] = useState(false)

  const router = useRouter()

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  // Gate: validate then hand off to parent to open the review modal
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

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

    // All validation passed — ask parent to open the review modal
    onRequestSubmit?.()
  }

  // Real API submit — only runs after modal confirmation
  const submitOrder = async () => {
    setErrorMessage('')
    setIsLoading(true)

    try {
      // Use JPEG at 0.6 quality to keep request size small
      const beltImage = canvasRef?.current
        ? canvasRef.current.toDataURL('image/jpeg', 0.6)
        : undefined

      const threadColors = designDetails?.threadColors || []
      const threadColorDetails = parseThreadColorDetails(threadColors)

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
          beltImage,
          threadColorDetails,
        },
        orderQuantities: sizeOrders || [],
        timestamp: new Date().toISOString(),
      }

      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        const errText = await response.text()
        throw new Error(errText || 'Failed to send order')
      }

      // Reset form fields
      setCustomerName('')
      setEmail('')
      setAddressLine1('')
      setAddressLine2('')
      setCity('')
      setStateRegion('')
      setPostcode('')
      setCountry('')

      // Mark that we need to reset design after modal closes
      setPendingReset(true)

      // Show confirmation popup — do NOT reset design yet (would unmount this component)
      setSubmittedEmail(email)
      setShowSuccessModal(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage(
        'Failed to send order. Please try again or contact support.'
      )
    } finally {
      setIsLoading(false)
      onSubmitComplete?.()
    }
  }

  // When the parent confirms via the modal, fire the real submit
  useEffect(() => {
    if (!confirmedAndSubmit) return

    const run = async () => {
      await submitOrder()
    }
    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmedAndSubmit])

  return (
    <div className="bg-white p-4 md:p-6 lg:p-7 rounded-none shadow-lg">
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 pb-2 border-b-2 border-gold">
        Customer Details
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
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
          <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
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
          <label className="block text-md text-center font-semibold uppercase tracking-wider mb-2">
            Postal Address
          </label>
          <p className="text-xs italic mb-2 text-blue-500">
            Full address required to accurately quote total cost including shipping
          </p>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
              Address Line 1
            </label>
            <input
              type="text"
              required
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="Address Line 1 (Street, House Number)"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />

            <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              placeholder="Address Line 2 (Apartment, Suite, etc.) - Optional"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />

            <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
              City
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City / Town"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />

            <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
              State
            </label>
            <input
              type="text"
              required
              value={stateRegion}
              onChange={(e) => setStateRegion(e.target.value)}
              placeholder="State / Region"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />

            <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
              Post Code
            </label>
            <input
              type="text"
              required
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Postcode / ZIP Code"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold"
            />

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                Country
              </label>
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold bg-white"
              >
                <option value="">Select a country</option>
                {countries.map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="text-xs">
          Once submitted your order will be verified and an invoice emailed to you by one of our team
        </p>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-2 sm:py-3 uppercase tracking-wide disabled:opacity-50 transition-all text-xs sm:text-sm"
        >
          {isLoading ? 'Sending...' : 'See Project Summary'}
        </Button>

        {errorMessage && (
          <div className="mt-4 p-3 sm:p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded-none text-xs sm:text-sm">
            {errorMessage}
          </div>
        )}
      </form>

      {/* Success Confirmation Popup */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="bg-white w-full max-w-md shadow-2xl p-8 flex flex-col items-center text-center"
            style={{ borderTop: '4px solid #C9A84C' }}
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Order Submitted!</h2>
            <p className="text-sm text-gray-600 mb-1">
              A confirmation has been sent to:
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-4 break-all">
              {submittedEmail}
            </p>
            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2 mb-6">
              Please check your <strong>junk / spam folder</strong> if you don&apos;t see it in your inbox.
            </p>
            <Button
              onClick={() => {
                setShowSuccessModal(false)
                if (pendingReset) {
                  onResetDesign?.()
                  onResetOrder?.()
                  setPendingReset(false)
                }
                router.push('/custom-design-tool')
              }}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
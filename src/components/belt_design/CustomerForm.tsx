'use client'

import { validateEmail } from '@/database/utils'
import { useState } from 'react'

interface CustomerFormProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  stampImage: string | null
}

export function CustomerForm({}: CustomerFormProps) {
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

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    if (!customerName) {
      alert('Please enter your name.')
      return
    }

    if (!addressLine1 || !city || !country) {
      alert(
        'Please fill in your complete postal address (at minimum: Address Line 1, City, and Country).'
      )
      return
    }

    setIsLoading(true)

    try {
      // Create invoice data
      const formData = {
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
        timestamp: new Date().toISOString(),
      }

      // In a real app, you'd send this to your backend
      console.log('Invoice request:', formData)

      // Fallback: Create mailto link
      const mailBody = encodeURIComponent(
        `New Polo Belt Order Request\n\nCustomer: ${customerName}\nEmail: ${email}\n\nAddress:\n${addressLine1}\n${addressLine2}\n${city}\n${stateRegion}\n${postcode}\n${country}`
      )

      const subject = encodeURIComponent(
        `Polo Belt Order - ${customerName}`
      )

      window.location.href = `mailto:sales@example.com?subject=${subject}&body=${mailBody}`

      alert('Your email client will open with the request details.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-serif font-bold text-burgundy mb-4 pb-2 border-b-2 border-gold">
        Customer Details
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            Name
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Full name"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
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
            className={`w-full px-3 py-2 border-2 rounded-lg font-sans text-sm focus:outline-none ${
              emailError ? 'border-red-500' : 'border-gray-300 focus:border-gold'
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
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder="Address Line 1 (Street, House Number)"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm mb-2 focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Address Line 2 (Apartment, Suite, etc.) - Optional"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm mb-2 focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City / Town"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm mb-2 focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            value={stateRegion}
            onChange={(e) => setStateRegion(e.target.value)}
            placeholder="County / State / Region"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm mb-2 focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Postcode / ZIP Code"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm mb-2 focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg font-sans text-sm focus:outline-none focus:border-gold"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 px-4 py-3 bg-yellow-600 text-white rounded-lg font-semibold uppercase tracking-wide disabled:opacity-50 transition-all"
        >
          {isLoading ? 'Generating...' : 'Request Invoice'}
        </button>
      </form>
    </div>
  )
}

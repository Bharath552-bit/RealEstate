import { useState } from 'react'
import axios from 'axios'

export default function PaymentForm() {
  const [amount, setAmount] = useState('')
  const [propertyId, setPropertyId] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/payments/', { amount, property: propertyId })
      setMessage('Payment initiated successfully')
    } catch (err) {
      console.error(err)
      setMessage('Payment failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block">Property ID</label>
        <input 
          type="text"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block">Amount</label>
        <input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2">Make Payment</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  )
}

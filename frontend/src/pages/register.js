import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('buyer')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/register/', { username, email, password, role })
      router.push('/login')
    } catch (err) {
      setError('Registration failed')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block">Role</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="buyer">Buyer</option>
            <option value="owner">Owner</option>
            <option value="tenant">Tenant</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white p-2">Register</button>
      </form>
    </div>
  )
}

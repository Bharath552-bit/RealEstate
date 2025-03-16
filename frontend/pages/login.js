import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/token/', { username, password })
      localStorage.setItem('accessToken', res.data.access)
      localStorage.setItem('refreshToken', res.data.refresh)
      router.push('/properties')
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
          <label className="block">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full" 
            required 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  )
}

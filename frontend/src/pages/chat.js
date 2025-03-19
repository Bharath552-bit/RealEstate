import { useState, useEffect } from 'react'
import axios from 'axios'
import ChatBox from '../components/ChatBox'

export default function Chat() {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/chat/?format=json')
      .then(res => setMessages(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <ChatBox messages={messages} />
    </div>
  )
}

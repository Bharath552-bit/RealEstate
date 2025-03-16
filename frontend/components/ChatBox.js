import { useState } from 'react'

export default function ChatBox({ messages }) {
  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    // For a real app, you would POST this message to your API
    console.log("Send message:", newMessage)
    setNewMessage('')
  }

  return (
    <div className="border p-4 rounded">
      <div className="mb-4">
        {messages.map(msg => (
          <div key={msg.id} className="mb-2">
            <strong>{msg.sender.username}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 flex-grow" 
          placeholder="Type your message"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 ml-2">Send</button>
      </div>
    </div>
  )
}

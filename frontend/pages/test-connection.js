import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TestConnection() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Append ?format=json to force a JSON response, bypassing the browsable API
    axios.get('http://localhost:8000/api/test/?format=json')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        console.error('Error connecting to backend:', err);
        setError('Error connecting to backend');
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Connection</h1>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

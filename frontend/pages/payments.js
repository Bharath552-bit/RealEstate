import { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentForm from '../components/PaymentForm';
import Link from 'next/link';

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/payments/?format=json')
      .then((res) => setPayments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      {payments.map((payment) => (
        <div key={payment.id} className="border p-4 mb-4 rounded">
          <p>Amount: ${payment.amount}</p>
          <p>Status: {payment.status}</p>
        </div>
      ))}
      <PaymentForm />
      <Link href="/" className="text-blue-500">
        Back to Home
      </Link>
    </div>
  );
}

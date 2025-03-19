import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function RentalAgreements() {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/rental-agreements/?format=json')
      .then((res) => setAgreements(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rental Agreements</h1>
      {agreements.map((agreement) => (
        <div key={agreement.id} className="border p-4 mb-4 rounded">
          <p>Property: {agreement.property}</p>
          <p>Tenant: {agreement.tenant}</p>
          <p>Signed At: {agreement.signed_at}</p>
        </div>
      ))}
      <Link href="/" className="text-blue-500">
        Back to Home
      </Link>
    </div>
  );
}

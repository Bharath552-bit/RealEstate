import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import PropertyCard from '../../components/PropertyCard';

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/properties/?format=json')
      .then((res) => setProperties(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Link href="/" className="text-blue-500 mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
}

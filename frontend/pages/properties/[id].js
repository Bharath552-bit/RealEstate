import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/api/properties/${id}/?format=json`)
        .then((res) => setProperty(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p>{property.description}</p>
      <p className="font-bold">${property.price}</p>
      <p>{property.location}</p>
      <p>{property.property_type}</p>
      <p>Owner: {property.owner.username}</p>
    </div>
  );
}

import Link from 'next/link';

export default function PropertyCard({ property }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{property.title}</h2>
      <p>{property.description}</p>
      <p className="font-bold">${property.price}</p>
      <p>{property.location}</p>
      <p>{property.property_type}</p>
      <p>Owner: {property.owner.username}</p>
      <Link href={`/properties/${property.id}`} className="text-blue-500 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}

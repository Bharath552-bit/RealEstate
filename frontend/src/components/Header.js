import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 text-white bg-gray-800">
      <nav className="container mx-auto justify-content-between d-flex">
        <Link href="/" className="font-bold">
          RealEstate
        </Link>
        <div>
          <Link href="/properties" className="mr-4">
            Properties
          </Link>
          <Link href="/chat" className="mr-4">
            Chat
          </Link>
          <Link href="/rental-agreements" className="mr-4">
            Agreements
          </Link>
          <Link href="/payments" className="mr-4">
            Payments
          </Link>
          <Link href="/login" className="mr-4">
            Login
          </Link>
          <Link href="/register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

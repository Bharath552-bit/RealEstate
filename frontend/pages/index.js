import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Real Estate Web App</h1>
      <nav className="mb-4">
        <Link href="/login" className="mr-4">
          Login
        </Link>
        <Link href="/register" className="mr-4">
          Register
        </Link>
        <Link href="/properties">
          Properties
        </Link>
      </nav>
      <p>Welcome to the Real Estate Web Application built with Next.js and Django.</p>
    </div>
  );
}

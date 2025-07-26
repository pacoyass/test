import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap",
  },
];

export function meta(): Route.MetaFunction {
  return [
    { title: "Cantina Mariachi - Authentic Mexican Food in Casablanca" },
    { name: "description", content: "Experience the best Mexican cuisine in Casablanca at Cantina Mariachi. Order online or book a table for authentic tacos, fajitas, and more!" },
    { name: "keywords", content: "best Mexican food Casablanca, Cantina Mariachi Casablanca, Mexican restaurant near me, tacos, fajitas, authentic Mexican cuisine" },
  ];
}

function Header() {
  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌮</span>
            <h1 className="text-2xl font-bold text-yellow-300">Cantina Mariachi</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-yellow-300 transition-colors">Menu</Link>
            <Link to="/order" className="hover:text-yellow-300 transition-colors">Order Online</Link>
            <Link to="/reservations" className="hover:text-yellow-300 transition-colors">Reservations</Link>
            <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
          </nav>

          <div className="flex space-x-3">
            <Link to="/order" className="bg-yellow-500 text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Order Now
            </Link>
            <Link to="/reservations" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors">
              Book Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Cantina Mariachi</h3>
            <p className="text-gray-300">Authentic Mexican flavors in the heart of Casablanca</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-300 hover:text-yellow-300 transition-colors">Menu</Link></li>
              <li><Link to="/order" className="text-gray-300 hover:text-yellow-300 transition-colors">Order Online</Link></li>
              <li><Link to="/reservations" className="text-gray-300 hover:text-yellow-300 transition-colors">Reservations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-300 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 4 Rue Ahmed Charci, Vélodrome</p>
              <p>📞 +212 5223-99178</p>
              <p>🕒 Open Daily: 12:00 PM - 11:00 PM</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-yellow-300"
                />
                <button 
                  type="submit" 
                  className="bg-yellow-500 text-red-800 px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cantina Mariachi. All rights reserved. Made with ❤️ in Casablanca</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">{message}</h1>
        <p className="text-gray-600 mb-6">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded text-left text-sm">
            <code>{stack}</code>
          </pre>
        )}
        <Link to="/" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Professional portfolio showcasing frontend development skills and projects",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-800">
                  Portfolio
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/experience" className="text-gray-600 hover:text-gray-900">
                  Experience
                </Link>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                  Projects
                </Link>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className="hidden md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/experience"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 min-h-screen bg-gray-50">
          {children}
        </main>

        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 text-center md:text-left">
                © 2025 Andrei Lebedev.
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/GyGaByyyTe?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/a-lebedev-gygabyyyte/?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:gygabyyyte@gmail.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

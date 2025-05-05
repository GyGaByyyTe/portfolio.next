import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Professional portfolio showcasing frontend development skills and projects",
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
              <div className="flex items-center space-x-8">
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
            </div>
          </div>
        </nav>
        <main className="pt-16 min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}

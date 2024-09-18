import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Glam Factor",
  description:
    "Experience luxury and relaxation with our premium beauty services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-pink-50 flex flex-col">
          <header className="bg-pink-200 shadow-md sticky top-0 z-10">
            <nav className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-pink-800">
                  The Glam Factor
                </Link>
                <div className="hidden md:flex space-x-4">
                  <Link href="/" className="text-pink-800 hover:text-pink-600">
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="text-pink-800 hover:text-pink-600"
                  >
                    Services
                  </Link>
                  <Link
                    href="/account"
                    className="text-pink-800 hover:text-pink-600"
                  >
                    Account
                  </Link>
                  <Link
                    href="/contact"
                    className="text-pink-800 hover:text-pink-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-pink-200 py-6">
            <div className="container mx-auto px-6 text-center">
              <p className="text-pink-800">
                &copy; 2024 The Glam Factor. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
      <body className={playfair.className}>
        <div className="min-h-screen flex flex-col">
          <header className="shadow-md sticky top-0 z-10 bg-white">
            <nav className="container mx-auto px-6 py-3">
              <Navbar />
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="py-6">
            <div className="container mx-auto px-6 text-center">
              <p className="text-black-800">
                &copy; 2024 The Glam Factor. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

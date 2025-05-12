import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pepe Le Barbershop | Premium Barber Services in Denton, TX",
  description: "Pepe Le Barbershop offers premium men's grooming services in Denton, TX. Specializing in classic cuts, beard trims, and hot towel shaves with over 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}

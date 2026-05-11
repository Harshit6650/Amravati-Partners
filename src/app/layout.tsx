import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amravati & Partners | Investment Facilitation",
  description: "We help corporates, institutions, investors, and developers evaluate, enter, and expand in Amravati through strategic advisory, local execution support, and ecosystem-driven development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased bg-navy text-white`}>
      <body className="min-h-screen flex flex-col bg-navy text-white selection:bg-gold/30">
        <Header />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

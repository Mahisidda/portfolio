import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar.js";
import "./globals.css";
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahi Sidda",
  description: "All about The Mahi Sidda",
  icons:{
    icon: "/arc.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white flex flex-col min-h-screen">
        <Sidebar />
        <main className="flex-1 w-full pt-20">
          {children}
        </main>
        <footer className="text-center py-4 font-mono">
          <p className="text-sm text-gray-500">
            &copy; 2025 Mahi Sidda
          </p>
        </footer>
      </body>
    </html>
  );
}

import { Geist } from "next/font/google";
import Sidebar from "@/components/Sidebar.js";
import "./globals.css";
import ConditionalFooter from "@/components/ConditionalFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahi Sidda",
  description: "Portfolio",
  icons: {
    icon: [
      { url: "/stark.png?v=2", type: "image/png" },
    ],
    apple: [
      { url: "/stark.png?v=2", type: "image/png", sizes: "180x180" }, // Apple touch icon
    ],
    // You can add other icon types if needed, e.g., shortcut for older browsers
    // shortcut: "/stark.png?v=2", 
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white flex flex-col min-h-screen">
        <Sidebar />
        <main className="flex-1 w-full pt-20">
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}

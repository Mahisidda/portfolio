"use client";
import { usePathname } from 'next/navigation';

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null; // Don't render footer on the homepage
  }

  return (
    <footer className="text-center py-4">
      <p className="text-sm text-gray-500">
        &copy; 2025 Mahi Sidda
      </p>
    </footer>
  );
} 
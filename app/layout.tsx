import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Utilities/Navbar/index'

export const metadata: Metadata = {
  title: "Home",
  description: "its home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        
        {children}</body>
    </html>
  );
}

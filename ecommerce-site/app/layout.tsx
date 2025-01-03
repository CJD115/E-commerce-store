// Importing the Metadata type from the next package
import type { Metadata } from "next";

// Importing global CSS styles
import "./globals.css";

// Defining metadata for the application
export const metadata: Metadata = {
  title: "Connors e-commerce", 
  description: "My e-commerce shop ", 
};

// RootLayout component that wraps the entire application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
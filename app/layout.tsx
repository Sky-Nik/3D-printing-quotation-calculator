import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Printing Quotation Calculator",
  description: "Calculate accurate quotes for your 3D printing projects with our modern web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/(full)/context/Cartcontext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAKE And GO",
  description: "Ihr Café für frisch zubereiteten Kaffee und köstliche Snacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

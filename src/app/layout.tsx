import { GoogleAnalytics } from '@next/third-parties/google'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEDEMAT Zamora",
  description: "Servicio Desconcentrado Municipal de Administración Tributaria del Municipio Zamora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <GoogleAnalytics gaId="G-VHP5RJ1F63" />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

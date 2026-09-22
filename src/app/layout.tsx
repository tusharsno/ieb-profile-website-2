import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engr. Mohammad Harun — IEB Vice Chairman Candidate",
  description: "Official campaign website for Engr. Mohammad Harun, candidate for Vice Chairman of the Institution of Engineers, Bangladesh (IEB) Chittagong Centre.",
  openGraph: {
    title: "Engr. Mohammad Harun — IEB Vice Chairman Candidate",
    description: "Official campaign website for Engr. Mohammad Harun, candidate for Vice Chairman of the Institution of Engineers, Bangladesh (IEB) Chittagong Centre.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Mohammad Harun — IEB Vice Chairman Candidate",
    description: "Official campaign website for Engr. Mohammad Harun, candidate for Vice Chairman of the Institution of Engineers, Bangladesh (IEB) Chittagong Centre.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[71px]">
        <Header />
        {children}
      </body>
    </html>
  );
}

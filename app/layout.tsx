import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Platform for Every Law—Instant Clarity, Zero Confusion",
  description: "Lexlytic's AI ingests any regulation, anywhere. See clear obligations,deadlines and risks at a glance, and connect with a vetted professional in a single click",
  generator: "v0.dev",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${josefin.variable}`}>
      <body className="font-sans"
      cz-shortcut-listen="true"
      >{children}</body>
    </html>
  );
}

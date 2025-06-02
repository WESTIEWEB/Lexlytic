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
  title: "Lexlytic's AI, Your One Platform for Every Law—Instant Clarity, Zero Confusion",
  description: "Lexlytic's AI ingests any regulation, anywhere. See clear obligations,deadlines and risks at a glance, and connect with a vetted professional in a single click",
  generator: "v0.dev",
  icons: {
    icon: "/icons/app-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${josefin.variable}`}>
      <head>
        <link rel="icon" href="/icons/app-logo.png" type="image/jpeg" className="rounded-[100%]"/>
      </head>
      <body className="font-sans"
      cz-shortcut-listen="true"
      >{children}</body>
    </html>
  );
}

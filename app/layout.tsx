import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../public/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SmoothScroll } from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Nkumba University Blockchain Association",
  description: "Empowering the next generation of blockchain developers and innovators at Nkumba University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import type React from "react";
import "@/app/globals.css";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import FramerProvider from "@/components/framer-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zul Fahri Baihaqi • Portfolio",
  description: "Zul Fahri Baihaqi's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} font-outfit`}>
        <FramerProvider>{children}</FramerProvider>
      </body>
    </html>
  );
}

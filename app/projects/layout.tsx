import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  const navItems = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} font-outfit`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

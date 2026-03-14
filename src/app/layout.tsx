import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Harsha Vardhan — Full-Stack Developer",
  description: "Portfolio of Harsha Vardhan Yanakandla — Full-stack developer and builder of SaaS products and premium digital experiences.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} bg-zinc-950 text-zinc-50 font-outfit antialiased selection:bg-white selection:text-black`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HandleClaw | High-Performance Company Infrastructure",
  description:
    "A premium, high-performance platform for entity formation, banking setup, and compliance infrastructure. Your 24/7 Virtual Infrastructure Assistant.",
  keywords: [
    "entity formation",
    "LLC",
    "business banking",
    "compliance",
    "infrastructure",
    "startup",
  ],
  openGraph: {
    title: "HandleClaw | High-Performance Company Infrastructure",
    description:
      "A premium, high-performance platform for entity formation, banking setup, and compliance infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}

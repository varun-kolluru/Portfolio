import { Analytics } from '@vercel/analytics/next';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Varun Portfolio",
  description: "made with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Varun portfolio</title>
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

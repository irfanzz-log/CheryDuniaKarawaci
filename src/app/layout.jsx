import { Geist, Geist_Mono, Teko } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
})

export const metadata = {
  title: "Chery Dunia Karawaci",
  description: "Selalu Memberi Yang Terbaik Untuk Pelanggan",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/chery-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/chery-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/chery-logo.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${teko.variable} h-full antialiased`}
    > 
      <Analytics/>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

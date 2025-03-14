import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Image from "next/image";

import MainNav from "@/components/mainnav/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenneth Zimny",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header id="banner">
          <Link href="/" aria-label="Kenneth Zimny Home Page">
            <Image
              src="/placeholder-image"
              alt="Placeholder Image"
              width={200}
              height={50}
            ></Image>
          </Link>
        </header>

        <MainNav>{children}</MainNav>

        <footer>FOOTER</footer>
      </body>
    </html>
  );
}

"use client";

import { createContext, useContext, useState } from "react";

import { Karla } from "next/font/google";
import "./globals.css";

import Body from "@/components/body/Body";
import Footer from "@/components/body/footer/Footer";

export const ScrollLockContext = createContext(false);

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Kenneth Zimny",
//   description: "Frontend Developer",
// };

export default function RootLayout({ children }) {
  const [scrollLock, setScrollLock] = useState(false);

  const lockClassName = scrollLock ? "overflow-hidden" : "";
  return (
    <html lang="en">
      <ScrollLockContext.Provider value={{ scrollLock, setScrollLock }}>
        <body className={`${karla.variable} antialiased ${lockClassName}`}>
          <Body>{children}</Body>
          <Footer />
        </body>
      </ScrollLockContext.Provider>
    </html>
  );
}

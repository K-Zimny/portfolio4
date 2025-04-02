"use client";

import { createContext, useEffect, useState } from "react";

import Body from "@/components/body/Body";
import Footer from "@/components/body/footer/Footer";

export const ScrollLockContext = createContext(false);

export default function ClientLayout({ font, children }) {
  const [scrollLock, setScrollLock] = useState(false);
  const lockClassName = scrollLock ? "overflow-hidden" : "";

  useEffect(() => {
    setScrollLock(false);
  }, [children]);
  return (
    <ScrollLockContext.Provider value={{ scrollLock, setScrollLock }}>
      <body className={`${font.variable} antialiased ${lockClassName}`}>
        <Body>{children}</Body>
        <Footer />
      </body>
    </ScrollLockContext.Provider>
  );
}

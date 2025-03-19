import { Karla } from "next/font/google";
import "./globals.css";

import Body from "@/components/body/Body";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenneth Zimny",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
        <Body>{children}</Body>

        <footer>FOOTER</footer>
      </body>
    </html>
  );
}

import { Karla } from "next/font/google";
import "./globals.css";

import Body from "@/components/body/Body";
import Footer from "@/components/body/footer/Footer";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenneth Zimny",
  description: "Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
        <Body>{children}</Body>
        <Footer />
      </body>
    </html>
  );
}

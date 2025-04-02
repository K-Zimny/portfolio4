import { Karla } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/clientlayout/ClientLayout";

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
      <ClientLayout font={karla}>{children}</ClientLayout>
    </html>
  );
}

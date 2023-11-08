import { Navbar } from "@/components/Navbar/Navbar";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bing Image",
  description: "Bing Image Search Clone @DiegoAH291",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

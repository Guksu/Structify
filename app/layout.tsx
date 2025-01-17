import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common";

const notoSans = Noto_Sans({
  variable: "--font--noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Structify",
  description: "Create a simple development structure for your project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}  antialiased bg-gray-50`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

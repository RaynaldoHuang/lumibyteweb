import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";

const myFont = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Satoshi-Medium.woff",
      weight: "500",
      style: "medium"
    }
  ],
  variable: "--font-satoshi"
});

export const metadata: Metadata = {
  title: "Lumibyte",
  description: "Web Design | Landing Page Creation | Web Application Creation in Indonesia, Medan, North Sumatra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

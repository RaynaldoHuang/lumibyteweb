import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
        {children}
      </body>
    </html>
  );
}

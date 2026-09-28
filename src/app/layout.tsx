import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Bold.woff2",
  variable: "--font-clash-display",
  weight: "700",
  style: "normal",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "ByteSpace landing page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${clashDisplay.variable} ${poppins.variable}`}
    >
      <body>
        <Navbar className="sticky top-0 z-50 bg-persian-blue-800" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

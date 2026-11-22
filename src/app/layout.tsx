import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora, Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const deltha = localFont({
  src: [
    {
      path: "./fonts/Deltha.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Deltha.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-deltha",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Azfar | AI Engineer & Flutter Developer",
  description:
    "Portfolio of Muhammad Azfar — AI Engineer & Flutter Developer specializing in Generative AI, LangGraph, RAG, and production cross-platform mobile systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${deltha.variable} ${sora.variable} ${geist.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8fafc] text-[#090d16] overflow-x-hidden selection:bg-blue-600/20 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}

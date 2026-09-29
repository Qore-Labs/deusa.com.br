import type { Metadata } from "next";

import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { SITE_CONFIG } from "@/src/utils/config/site";

const dotSans = localFont({
  src: "./fonts/42dotSans-latin.woff2",
  variable: "--font-42dot-local",
  weight: "300 800",
  style: "normal",
  display: "swap",
});

const sansitaOne = localFont({
  src: "./fonts/SansitaOne-Regular.ttf",
  variable: "--font-sansita-one-local",
  weight: "400",
  style: "normal",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  authors: SITE_CONFIG.authors,
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_CONFIG.name,
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description as string,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${dotSans.variable} ${sansitaOne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

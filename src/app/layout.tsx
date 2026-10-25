import type { Metadata } from "next";
import { Fraunces, Pridi, Sarabun } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const pridi = Pridi({
  variable: "--font-pridi",
  subsets: ["thai", "latin"],
  weight: ["600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: { index: false, follow: false },
  metadataBase: new URL("https://b3-demo-baan-kafae-nextjs.vercel.app"),
  openGraph: {
    title: site.title,
    description: site.description,
    locale: site.locale,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og.png" }],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${pridi.variable} ${fraunces.variable} ${sarabun.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <p
          className="sticky top-0 z-30 bg-ink px-4 py-1.5 text-center text-sm font-semibold text-cream"
          role="note"
        >
          {site.banner}
        </p>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-20 focus:rounded focus:bg-white focus:p-2"
        >
          ข้ามไปเนื้อหาหลัก
        </a>
        {children}
      </body>
    </html>
  );
}

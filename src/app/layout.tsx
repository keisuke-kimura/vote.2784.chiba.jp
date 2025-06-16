import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "船橋市長選挙 2025 - 候補者政策比較サイト",
  description: "2025年船橋市長選挙の候補者政策をAIで簡単に比較・検索できるサイトです",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: '船橋市長選挙 2025 - 候補者政策比較プラットフォーム',
    description: '候補者の政策をAIチャットで簡単に比較。投開票日6月22日。',
    url: 'https://vote.2784.chiba.jp',
    siteName: '船橋市長選挙 2025',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '船橋市長選挙 2025 候補者政策比較プラットフォーム',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '船橋市長選挙 2025 - 候補者政策比較プラットフォーム',
    description: '候補者の政策をAIチャットで簡単に比較。投開票日6月22日。',
    images: ['/og-image.png'],
  },
};

export const viewport = {
  themeColor: '#3B82F6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KL9R6CSHDJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KL9R6CSHDJ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

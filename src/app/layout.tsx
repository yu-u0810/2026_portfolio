// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 // エイリアスを使ってインポート

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu Ishimine | Portfolio", // タイトルを自分らしく変更
  description: "伊志嶺 勇/ポートフォリオサイト。Next.js, Go, Pythonを用いた開発実績を紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja" // 日本語に設定
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`} // 滑らかなスクロールを追加
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
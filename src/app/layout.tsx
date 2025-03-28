import type { Metadata } from "next";
import "./globals.css";
import { Nanum_Gothic } from 'next/font/google'

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={nanumGothic.className}>
    <body>{children}</body>
    </html>
  );
}

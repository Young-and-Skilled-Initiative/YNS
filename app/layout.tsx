// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Nunito } from 'next/font/google';
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLayout from '@/app/client-layout'

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Young and Skilled Advancement Initiative",
  description: "Empowering young professionals with skills for success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
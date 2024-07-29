import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";


export const metadata: Metadata = {
  title: "WeBloom",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={clsx([pretendard.className, pretendard.variable])}>{children}</body>
    </html>
  );
}

const pretendard = localFont({
  src: [
    {
      path: '../../public/font/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font--pretendard',
});

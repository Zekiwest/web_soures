import type { Metadata } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "万岳科技 - 在线教育系统源码 | 电商系统开发 | 直播商城系统",
  description: "万岳科技专注于在线教育系统源码、电商直播系统源码、商城系统源码开发，以及在线教育平台、电商平台开发搭建，帮您快速部署专属教育APP和电商平台。万岳科技是一家专业的教育软件开发商和直播商城系统服务商",
  keywords: "在线教育系统,教育app开发,教育源码,在线教育平台,教育软件开发,电商系统源码,电商平台搭建,直播商城源码,商城系统开发",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSC.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
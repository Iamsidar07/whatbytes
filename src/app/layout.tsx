import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import Topbar from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "Whatbytes a frontend developer intern assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50`}
          >
            <Header />
            <Topbar/>
            <div className="flex min-h-screen sm:pt-16">
              <Sidebar />
              <main className="flex-1 md:ml-64 p-4 md:p-8">{children}</main>
            </div>
            <Toaster position="top-right" richColors expand={false} />
            <NextTopLoader
              showSpinner={false}
              height={3}
              easing="ease"
              speed={500}
              color="#1e2a78"
            />
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import Topbar from "@/components/Topbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
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
            className={`${dmSans.variable} font-sans antialiased bg-neutral-50`}
          >
            <Header />
            <Topbar/>
            <div className="flex min-h-screen sm:pt-16">
              <Sidebar />
              <main className="flex-1 md:ml-64 p-4 md:p-8 container mx-auto">{children}</main>
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

"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border  border-neutral-200 z-50">
      <div className="h-full flex items-center justify-between px-4">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image
              src={"/logo.png"}
              width={140}
              height={140}
              alt="logo"
              className="w-10 h-10 bg-blend-lighten"
            />
            <span className="text-xl font-semibold text-primary-dark">
              WhatBytes
            </span>
          </div>
        </Link>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </div>
    </header>
  );
}

"use client";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border  border-neutral-200 z-50">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary-dark">
            WhatBytes
          </span>
        </div>
        <SignedOut>
          <Link href={"/sign-in"}>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-primary-dark">
                Sign In
              </span>
            </div>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton showName  />
        </SignedIn>
      </div>
    </header>
  );
}

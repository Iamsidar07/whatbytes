import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border  border-neutral-200 z-50">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary-dark">WhatBytes</span>
        </div>
        <div className="flex border-2 border-neutral-200 rounded px-4 py-2 gap-2">
          <Image
            src={'/window.svg'}
            alt="window"
            width={16}
            height={16}
          />
          <span className="text-sm font-medium text-primary-dark">Rahil Siddique</span>
        </div>
      </div>
    </header>
  );
}
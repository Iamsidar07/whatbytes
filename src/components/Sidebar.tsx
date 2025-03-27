"use client";

import NavItem from "./NavItem";
import { File, Award, ChartNoAxesColumn } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-neutral-200 hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          <NavItem
            href="/dashboard"
            icon={<ChartNoAxesColumn size={20} />}
            text="Dashboard"
            isActive={pathname === "/dashboard"}
          />
          <NavItem
            href="/skill-test"
            icon={<Award size={20} />}
            text="Skill Test"
            isActive={pathname === "/skill-test"}
          />
          <NavItem
            href="/internship"
            icon={<File size={20} />}
            text="Internship"
            isActive={pathname === "/internship"}
          />
        </ul>
      </nav>
    </aside>
  );
}

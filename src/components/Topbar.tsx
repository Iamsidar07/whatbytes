"use client";

import { Award, ChartNoAxesColumn, File } from "lucide-react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  return (
    <div className="mt-[3.5rem] sm:hidden">
      <nav className="p-4 overflow-x-auto hide-scrollbar">
        <ul className="flex items-center gap-2 min-w-max">
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
    </div>
  );
}

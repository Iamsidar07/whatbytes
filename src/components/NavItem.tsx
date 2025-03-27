import { ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: ReactNode;
  text: string;
  isActive?: boolean;
}

export default function NavItem({
  href,
  icon,
  text,
  isActive = false,
}: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`
          flex items-center gap-3 p-2 rounded-lg
          transition-colors duration-200
          ${
            isActive
              ? "bg-neutral-100 text-primary-dark "
              : "text-neutral-700 hover:bg-neutral-100"
          }
        `}
      >
        <span className="w-5 h-5">{icon}</span>
        <span className="font-medium">{text}</span>
      </Link>
    </li>
  );
}

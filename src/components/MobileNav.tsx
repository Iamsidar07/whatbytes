'use client';

import { useState } from 'react';
import NavItem from './NavItem';
import { LayoutDashboard, Medal, File, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-neutral-700 dark:text-neutral-200"
      >
        <span className="sr-only">Open menu</span>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-900/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-neutral-900 p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-neutral-700 dark:text-neutral-200"
              >
                <span className="sr-only">Close menu</span>
                <X size={24} />
              </button>
            </div>
            <nav className="mt-4">
              <ul className="space-y-2">
                <NavItem 
                  href="/dashboard" 
                  icon={<LayoutDashboard size={20} />} 
                  text="Dashboard"
                  isActive={pathname === '/dashboard'}
                />
                <NavItem 
                  href="/skill-test" 
                  icon={<Medal size={20} />} 
                  text="Skill Test"
                  isActive={pathname === '/skill-test'}
                />
                <NavItem 
                  href="/internship" 
                  icon={<File size={20} />} 
                  text="Internship"
                  isActive={pathname === '/internship'}
                />
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

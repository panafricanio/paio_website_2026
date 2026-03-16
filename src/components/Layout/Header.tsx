'use client';

import { FC } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/config';
import { NavItem } from '@/types';

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-5 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-black tracking-tight hover:text-gray-600 transition-colors duration-200"
        >
          <span className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Navigation Items */}
        <ul className="hidden md:flex items-center gap-12">
          {NAVIGATION_ITEMS.map((item: NavItem) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 font-medium text-sm uppercase tracking-wide hover:text-black transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black hover:text-gray-600 transition-colors active:scale-90">
          <span className="text-2xl">☰</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;

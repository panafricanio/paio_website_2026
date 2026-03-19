'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/config';
import { NavItem } from '@/types';

const Header: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200' : 'bg-white'}`}>
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg inline-flex gap-0 font-bold text-black tracking-tight hover:opacity-70 transition-opacity duration-200"
        >
            <Image
              src="/paio-logo.png"
              alt="PAIO Logo"
              width={50}
              height={40}
              className="w-fit p-0 h-16 bg-inherit"
            /> 
            <span className='my-auto'>2026</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item: NavItem) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-500 text-sm font-medium hover:text-black transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden w-8 h-8 flex items-center justify-center text-black cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="relative w-5 h-4 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-black transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-full h-0.5 bg-black transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-black transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-50">
          <nav className="px-6 py-8">
            <ul className="space-y-1">
              {NAVIGATION_ITEMS.map((item: NavItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium text-black border-b border-gray-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

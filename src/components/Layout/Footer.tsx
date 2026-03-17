'use client';

import { FC } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/config';
import { NavItem } from '@/types';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                <span className="text-black text-xs font-bold">P</span>
              </span>
              <span className="text-base font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Celebrating computational excellence and discovering the brightest minds in computing across Africa.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {NAVIGATION_ITEMS.map((item: NavItem) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">Information</p>
            <ul className="space-y-2.5">
              <li><Link href="#format" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Rules & Regulations</Link></li>
              <li><Link href="#call-for-tasks" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Call for Tasks</Link></li>
              <li><Link href="#venue" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Host & Venue</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Pan-African Informatics Olympiad. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-200">Privacy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-200">Terms</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-200">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

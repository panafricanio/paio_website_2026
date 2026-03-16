'use client';

import { FC } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/config';
import { NavItem } from '@/types';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 lg:gap-20 mb-16 md:mb-20">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black text-sm font-bold">P</span>
              </div>
              <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-md">
              The Pan-African Informatics Olympiad celebrates computational excellence and discovers the brightest minds in computing across Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4">
              {NAVIGATION_ITEMS.map((item: NavItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest">
              Information
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-12 md:pt-16">
          {/* Bottom Section */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-8 md:gap-12">
            <p className="text-gray-400 text-sm font-light text-center sm:text-left">
              &copy; {currentYear} Pan-African Informatics Olympiad. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="text-sm font-light">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="text-sm font-light">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="text-sm font-light">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

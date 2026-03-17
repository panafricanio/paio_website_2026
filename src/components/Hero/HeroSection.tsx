'use client';

import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            Pan-African Informatics Olympiad
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
            Informatics
            <br />
            Olympiad 2026
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-10">
            Discover the brightest minds in computing across Africa. Showcase your algorithmic expertise, solve real-world challenges, and compete on the continental stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#registration"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Register Now
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-black text-sm font-semibold rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              View Timeline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="w-full bg-white py-32 md:py-48 lg:py-56 border-b border-gray-200 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-10 md:space-y-12 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-none md:leading-none lg:leading-none tracking-tighter">
              Informatics
              <br />
              <span className="relative inline-block mt-2 md:mt-4">
                Olympiad 2026
                <svg
                  className="absolute -bottom-4 md:-bottom-6 left-0 w-full h-3 md:h-4 text-black opacity-20"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,0 100,10 T200,10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed md:leading-loose font-light px-4 sm:px-0">
            Discover the brightest minds in computing across Africa. Showcase your algorithmic expertise,
            solve real-world challenges, and compete for glory on the continental stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

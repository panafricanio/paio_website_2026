'use client';

import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/paio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Pan African
            <br />
            Informatics
            <br />
            Olympiad 2026
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed max-w-xl mb-10">
            Discover the brightest minds in computing across Africa. Showcase your algorithmic expertise, solve real-world challenges, and compete on the continental stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#registration"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Register Now
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
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

'use client';

import { FC } from 'react';
import { sponsors, sponsorTiers } from '../../../data/sponsors';

const tierTextStyles = {
  platinum: 'text-lg font-bold',
  gold: 'text-base font-semibold',
  silver: 'text-sm font-medium',
  bronze: 'text-sm font-medium',
} as const;

const SponsorsSection: FC = () => {
  return (
    <section id="sponsors" className="w-full bg-white section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Our Partners</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Sponsors</h2>
        </div>

        <div className="space-y-14">
          {sponsorTiers.map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier.key);
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier.key}>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">{tier.label}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center p-6 rounded-xl border border-gray-200 hover:border-black hover:shadow-sm transition-all duration-200 min-h-[80px]"
                    >
                      <span className={`text-gray-600 group-hover:text-black transition-colors duration-200 text-center ${tierTextStyles[sponsor.tier]}`}>
                        {sponsor.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

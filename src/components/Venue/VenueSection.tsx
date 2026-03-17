'use client';

import { FC } from 'react';
import { venue, hostOrganization } from '../../../data/venue';

const VenueSection: FC = () => {
  return (
    <section id="venue" className="w-full bg-white section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Location</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Host & Venue</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6 aspect-[16/10]">
              <img
                src={venue.imageUrl}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Host Organization</p>
              <h4 className="text-sm font-bold text-black mb-2">{hostOrganization.name}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{hostOrganization.description}</p>
              {hostOrganization.website && (
                <a
                  href={hostOrganization.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-black underline underline-offset-4 hover:no-underline"
                >
                  Visit website
                </a>
              )}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6">
              <h3 className="text-lg font-bold text-black mb-1">{venue.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{venue.city}, {venue.country}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{venue.description}</p>
              <p className="text-sm text-gray-400">{venue.address}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              <h4 className="text-sm font-bold text-black mb-4">Facilities</h4>
              <ul className="space-y-3">
                {venue.facilities.map((facility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                    <span className="text-sm text-gray-600 leading-relaxed">{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;

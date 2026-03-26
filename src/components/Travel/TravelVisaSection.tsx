'use client';

import { FC } from 'react';
import { travelVisa } from '../../../data/travelVisa';

const TravelVisaSection: FC = () => {
  return (
    <section id="travel" className="w-full bg-white py-6">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Travel Information
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Travel & Visa
          </h2>
        </div>

        {/* Visa Information Section */}
        <div className="mb-16 bg-white rounded-2xl border border-gray-200 p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black mb-4">
              {travelVisa.visaInformation.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {travelVisa.visaInformation.description}
            </p>
          </div>

          <ul className="space-y-3">
            {travelVisa.visaInformation.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2"></span>
                <p className="text-sm text-gray-600">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Travel Tips Section */}
        <div>
          <h3 className="text-lg font-bold text-black mb-8">Travel Tips</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {travelVisa.travelTips.map((tip, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-6 bg-white"
              >
                <h4 className="text-sm font-bold text-black mb-3">
                  {tip.category}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelVisaSection;

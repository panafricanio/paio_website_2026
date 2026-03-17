'use client';

import { FC } from 'react';
import { timelineEvents } from '../../../data/timeline';

const TimelineSection: FC = () => {
  return (
    <section id="timeline" className="w-full bg-white section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Key Dates</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Timeline</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 hidden sm:block" />

          <div className="space-y-10 sm:space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative sm:pl-12 sm:pb-10 last:pb-0 group">
                <div className="hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors duration-200" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
                  <span className="text-sm font-medium text-gray-400 sm:min-w-[160px] sm:text-right sm:pt-0.5 shrink-0 tabular-nums">
                    {event.date}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-lg">{event.description}</p>
                  </div>
                </div>

                {index < timelineEvents.length - 1 && (
                  <div className="sm:hidden border-b border-gray-100 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

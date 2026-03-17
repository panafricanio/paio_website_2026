'use client';

import { FC, useState } from 'react';
import { agendaDays } from '../../../data/agenda';
import { AgendaEvent } from '@/types';

const eventTypeStyles: Record<AgendaEvent['type'], string> = {
  ceremony: 'bg-black text-white',
  competition: 'bg-gray-800 text-white',
  break: 'bg-gray-100 text-gray-500',
  social: 'bg-gray-50 text-gray-600',
  workshop: 'bg-gray-200 text-gray-700',
};

const eventTypeLabels: Record<AgendaEvent['type'], string> = {
  ceremony: 'Ceremony',
  competition: 'Competition',
  break: 'Break',
  social: 'Social',
  workshop: 'Workshop',
};

const AgendaSection: FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="agenda" className="w-full bg-gray-50 section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Schedule</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Agenda</h2>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {agendaDays.map((day, index) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(index)}
              className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-200 cursor-pointer ${
                activeDay === index
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-500 hover:text-black border border-gray-200'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-400">{agendaDays[activeDay].date}</p>
          </div>

          <div className="divide-y divide-gray-100">
            {agendaDays[activeDay].events.map((event, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 px-6 py-5 hover:bg-gray-50 transition-colors duration-150">
                <span className="text-sm font-medium text-gray-400 sm:min-w-[130px] pt-0.5 tabular-nums shrink-0">
                  {event.time}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h4 className="text-sm font-semibold text-black">{event.title}</h4>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${eventTypeStyles[event.type]}`}>
                      {eventTypeLabels[event.type]}
                    </span>
                  </div>
                  {event.description && (
                    <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;

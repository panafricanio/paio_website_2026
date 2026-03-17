'use client';

import { FC, useState } from 'react';
import { competitionFormat } from '../../../data/format';

type Tab = 'rounds' | 'rules' | 'eligibility';

const FormatSection: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('rounds');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'rounds', label: 'Competition Rounds' },
    { key: 'rules', label: 'Rules' },
    { key: 'eligibility', label: 'Eligibility' },
  ];

  return (
    <section id="format" className="w-full bg-gray-50 section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Competition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Format & Regulations</h2>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-500 hover:text-black border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'rounds' && (
          <div className="grid gap-4 sm:grid-cols-2">
            {competitionFormat.rounds.map((round) => (
              <div key={round.id} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">{round.name}</h3>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{round.duration}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{round.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-black">{round.taskCount}</span>
                  <span className="text-sm text-gray-400">tasks</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-3">
            {competitionFormat.rules.map((rule) => (
              <div key={rule.id} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                <h3 className="text-sm font-bold text-black mb-2">{rule.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'eligibility' && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h3 className="text-sm font-bold text-black mb-4">Eligibility Requirements</h3>
            <ul className="space-y-3">
              {competitionFormat.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormatSection;

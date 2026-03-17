'use client';

import { FC } from 'react';
import { registrationInfo } from '../../../data/registration';

const RegistrationSection: FC = () => {
  return (
    <section id="registration" className="w-full bg-gray-50 section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Join PAIO 2026</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Registration</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-gray-500 leading-relaxed mb-8">{registrationInfo.description}</p>

            <h3 className="text-sm font-bold text-black mb-4">Requirements</h3>
            <ul className="space-y-3">
              {registrationInfo.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Registration Deadline</p>
                <p className="text-lg font-bold text-black">{registrationInfo.deadline}</p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Team Size</p>
                <p className="text-sm text-gray-600">
                  {registrationInfo.teamSize.min} to {registrationInfo.teamSize.max} contestants per delegation
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Contact</p>
                <a
                  href={`mailto:${registrationInfo.contactEmail}`}
                  className="text-sm text-black underline underline-offset-4 hover:no-underline"
                >
                  {registrationInfo.contactEmail}
                </a>
              </div>

              <a
                href={`mailto:${registrationInfo.contactEmail}?subject=PAIO 2026 Registration Inquiry`}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Register Your Delegation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

'use client';

import { FC } from 'react';
import { callForTasks } from '../../../data/callForTasks';

const CallForTasksSection: FC = () => {
  return (
    <section id="call-for-tasks" className="w-full bg-black text-white section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Contribute</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Call for Tasks</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-gray-400 leading-relaxed mb-8">{callForTasks.description}</p>

            <div className="space-y-3">
              {callForTasks.guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-800 text-gray-400 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-400 leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Submission Deadline</p>
                <p className="text-lg font-bold text-white">{callForTasks.deadline}</p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Contact</p>
                <a
                  href={`mailto:${callForTasks.contactEmail}`}
                  className="text-sm text-white underline underline-offset-4 hover:no-underline"
                >
                  {callForTasks.contactEmail}
                </a>
              </div>

              <a
                href={`mailto:${callForTasks.contactEmail}?subject=PAIO 2026 Task Submission`}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                Submit a Task Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForTasksSection;

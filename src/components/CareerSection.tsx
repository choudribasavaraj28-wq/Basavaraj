import React from 'react';
import { Target, Cpu, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CareerSection: React.FC = () => {
  const supportingSkills = [
    'Python',
    'Linux',
    'Networking',
    'Security Testing',
    'Security Automation'
  ];

  const secondaryStrengths = [
    'Robotics & Autonomous Systems',
    'IoT & Sensor Network Microcontrollers',
    'Embedded Systems Hardware Integration',
    'Computer Vision & Object Detection Pipelines'
  ];

  return (
    <section id="career" className="w-full bg-[#0d1c2d]/50 py-16 lg:py-24 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            07 // Target Horizon
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            Where I'm Heading
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Primary Direction */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1c2b3c] border border-[#3d494c]/60 text-[#4cd7f6] font-mono text-xs font-semibold uppercase tracking-wider w-fit">
              <Target className="w-4 h-4 text-[#4cd7f6]" />
              <span>Primary Direction: CYBERSECURITY / ETHICAL HACKING</span>
            </div>

            <p className="text-lg sm:text-xl text-[#d4e4fa] leading-relaxed font-normal">
              "{PERSONAL_INFO.careerQuote}"
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <span className="font-mono text-xs text-[#869397] uppercase tracking-wider font-semibold">
                Supporting Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {supportingSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-[#122131] text-[#d4e4fa] font-mono text-xs border border-[#1c2b3c]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Secondary Technical Strengths */}
          <div className="lg:col-span-5 bg-[#122131] border border-[#1c2b3c] p-6 sm:p-7 rounded-xl flex flex-col gap-4 shadow-xl">
            <div className="flex items-center gap-2.5 pb-1 border-b border-[#1c2b3c]">
              <Cpu className="w-5 h-5 text-[#4edea3]" />
              <h4 className="font-heading text-lg font-bold text-[#d4e4fa]">
                Secondary Technical Strengths
              </h4>
            </div>

            <p className="text-xs sm:text-[13px] text-[#bcc9cd] leading-relaxed">
              Cross-disciplinary capabilities developed through robotics and sensor experimentation:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#d4e4fa]">
              {secondaryStrengths.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

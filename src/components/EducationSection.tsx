import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="w-full py-16 lg:py-20 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            06 // Academic Background
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Highlight Card */}
        <div className="bg-[#122131]/80 border border-[#1c2b3c] p-6 sm:p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#1c2b3c] border border-[#3d494c]/60 flex items-center justify-center shrink-0 shadow-inner">
              <GraduationCap className="w-7 h-7 text-[#4cd7f6]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-2xl font-bold text-[#d4e4fa]">
                {PERSONAL_INFO.university}
              </h3>
              <p className="text-sm sm:text-base text-[#bcc9cd]">
                {PERSONAL_INFO.degree}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#4cd7f6] mt-0.5">
                {PERSONAL_INFO.school}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1 bg-[#1c2b3c]/60 border border-[#3d494c]/40 px-5 py-3.5 rounded-lg w-full md:w-auto">
            <span className="font-mono text-[11px] font-semibold text-[#4edea3] uppercase tracking-wider">
              Current Standing
            </span>
            <span className="font-heading text-xl font-bold text-[#d4e4fa]">
              {PERSONAL_INFO.currentSemester}
            </span>
            <span className="font-mono text-xs text-[#bcc9cd] mt-0.5">
              Focus: Cybersecurity + Python + AI/Data Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

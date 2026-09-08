import React from 'react';
import { CheckCircle2, ShieldCheck, BadgeCheck, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#0d1c2d]/50 py-16 lg:py-20 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            01 // Dossier
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Text Bio */}
          <div className="lg:col-span-7 flex flex-col gap-4 bg-[#122131]/60 border border-[#1c2b3c] p-6 sm:p-7 rounded-xl backdrop-blur-md shadow-lg">
            {PERSONAL_INFO.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-[15px] leading-relaxed text-[#bcc9cd]">
                {para}
              </p>
            ))}

            <div className="flex items-center gap-2.5 pt-3 border-t border-[#1c2b3c]">
              <CheckCircle2 className="w-5 h-5 text-[#4edea3] shrink-0" />
              <span className="font-mono text-xs font-medium text-[#4edea3] tracking-wide">
                Verified Student Identity • REVA University
              </span>
            </div>
          </div>

          {/* Spec Profile Card (Identity Parameters) */}
          <div className="lg:col-span-5 bg-[#1c2b3c]/70 border border-[#3d494c]/40 p-6 sm:p-7 rounded-xl backdrop-blur-md shadow-xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/40">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#4cd7f6]" />
                <span className="font-mono text-xs font-semibold text-[#d4e4fa] tracking-wider uppercase">
                  Identity Parameters
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold text-[#4edea3] uppercase tracking-wider">
                ACTIVE STATUS
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-[13px]">
              <div className="flex justify-between items-center py-2 bg-[#122131]/60 px-3.5 rounded border border-[#1c2b3c]">
                <span className="text-[#bcc9cd]">Name</span>
                <span className="text-[#d4e4fa] font-medium">{PERSONAL_INFO.name}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-[#122131]/60 px-3.5 rounded border border-[#1c2b3c]">
                <span className="text-[#bcc9cd]">Education</span>
                <span className="text-[#d4e4fa] font-medium text-right">{PERSONAL_INFO.degree}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-[#122131]/60 px-3.5 rounded border border-[#1c2b3c]">
                <span className="text-[#bcc9cd]">University</span>
                <span className="text-[#d4e4fa] font-medium">{PERSONAL_INFO.university}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-[#122131]/60 px-3.5 rounded border border-[#1c2b3c]">
                <span className="text-[#bcc9cd]">Current Semester</span>
                <span className="text-[#4cd7f6] font-semibold">{PERSONAL_INFO.currentSemester}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-[#122131]/60 px-3.5 rounded border border-[#1c2b3c]">
                <span className="text-[#bcc9cd]">Primary Focus</span>
                <span className="text-[#4edea3] font-semibold">{PERSONAL_INFO.primaryFocus}</span>
              </div>

              <div className="flex flex-col py-2.5 bg-[#122131]/60 px-3.5 rounded border border-[#1c2b3c] gap-1">
                <span className="text-[#bcc9cd]">Secondary Interests</span>
                <span className="text-[#d4e4fa] text-[12px] font-normal leading-snug">
                  {PERSONAL_INFO.secondaryInterests}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

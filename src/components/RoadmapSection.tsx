import React from 'react';
import { Brain, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { ROADMAP_STEPS, PERSONAL_INFO } from '../data/portfolioData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="learning" className="w-full bg-[#0d1c2d]/40 py-16 lg:py-24 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            05 // Sequential Roadmap
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            My Current Learning Path
          </h2>
          <p className="text-sm sm:text-base text-[#bcc9cd] max-w-2xl leading-relaxed mt-1">
            A structured, disciplined curriculum designed to bridge theoretical CS knowledge with applied defensive engineering.
          </p>
        </div>

        {/* 9 Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#122131]/60 hover:bg-[#1c2b3c]/70 border border-[#1c2b3c] hover:border-[#4cd7f6]/40 p-5 rounded-xl flex items-start gap-4 transition-all duration-200 group"
            >
              <span className="font-mono text-xs font-bold text-[#4cd7f6] bg-[#1c2b3c] border border-[#3d494c]/50 px-2.5 py-1 rounded shrink-0 group-hover:border-[#4cd7f6]/60 transition-colors">
                {step.number}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-heading text-base font-bold text-[#d4e4fa] group-hover:text-[#4cd7f6] transition-colors">
                    {step.title}
                  </h4>
                  {step.status === 'completed' && (
                    <span className="text-[10px] font-mono text-[#4edea3] bg-[#00a572]/20 px-2 py-0.5 rounded border border-[#4edea3]/30 shrink-0">
                      Done
                    </span>
                  )}
                  {step.status === 'in-progress' && (
                    <span className="text-[10px] font-mono text-[#4cd7f6] bg-[#06b6d4]/20 px-2 py-0.5 rounded border border-[#4cd7f6]/30 shrink-0">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Callout */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-xl bg-[#1c2b3c]/60 border border-[#3d494c]/40 backdrop-blur-md flex flex-col md:flex-row items-center gap-5 shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-[#122131] border border-[#3d494c]/60 flex items-center justify-center shrink-0">
            <Brain className="w-8 h-8 text-[#4cd7f6]" />
          </div>
          <blockquote className="text-base sm:text-lg text-[#d4e4fa] italic font-normal leading-relaxed text-center md:text-left">
            "{PERSONAL_INFO.learningPhilosophy}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

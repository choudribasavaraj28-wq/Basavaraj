import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#051424] border-t border-[#1c2b3c] py-8 text-xs font-mono text-[#869397]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-[#4cd7f6] tracking-wider">
            BC // SEC_OPS
          </span>
          <span className="hidden sm:inline text-[#3d494c]">•</span>
          <span className="text-[#bcc9cd]">
            {PERSONAL_INFO.name} — {PERSONAL_INFO.degree}, {PERSONAL_INFO.university}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#4edea3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span>SYSTEM: ONLINE</span>
          </div>

          <button
            onClick={scrollToTop}
            title="Return to top"
            className="p-2 rounded bg-[#122131] hover:bg-[#1c2b3c] text-[#d4e4fa] hover:text-[#4cd7f6] border border-[#3d494c]/50 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

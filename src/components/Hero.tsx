import React from 'react';
import { Terminal as TerminalIcon, FileText, ShieldAlert, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from './Terminal';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-6 pb-16 lg:pb-24">
      {/* Ambient background light gradients */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-96 -left-20 w-80 h-80 bg-[#4edea3]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#c0c1ff]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1c2b3c]/80 border border-[#3d494c]/40 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
                {PERSONAL_INFO.title}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[48px] font-bold text-[#d4e4fa] tracking-tight leading-[1.15]">
              Building My Path in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#acedff] to-[#4edea3]">
                Cybersecurity
              </span>
            </h1>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-[#bcc9cd] max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.bioIntro}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                id="hero-cta-explore"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#4cd7f6] to-[#06b6d4] text-[#003640] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(76,215,246,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                <TerminalIcon className="w-4 h-4" />
                Explore My Projects
              </a>

              <button
                onClick={onOpenResume}
                id="hero-cta-resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1c2b3c]/80 text-[#d4e4fa] border border-[#3d494c]/60 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#2c3a4c] hover:border-[#4cd7f6]/50 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#4cd7f6]" />
                View Resume
              </button>
            </div>

            {/* Live Status Strip */}
            <div className="mt-2 p-3 sm:p-3.5 rounded-lg bg-[#0d1c2d]/90 border border-[#1c2b3c] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                <span className="font-mono text-[11px] font-semibold text-[#bcc9cd] uppercase tracking-wider">
                  Current Protocol
                </span>
              </div>
              <p className="font-mono text-xs text-[#d4e4fa] sm:text-right truncate font-medium">
                {PERSONAL_INFO.currentProtocol}
              </p>
            </div>
          </div>

          {/* Right Terminal Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

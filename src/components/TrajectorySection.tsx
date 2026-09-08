import React, { useState } from 'react';
import { Shield, ShieldAlert, Terminal, Network, Code, Bug, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TRAJECTORY_DOMAINS } from '../data/portfolioData';
import { TrajectoryDomain } from '../types';

export const TrajectorySection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<TrajectoryDomain | null>(null);

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className={className} />;
      case 'security':
        return <ShieldAlert className={className} />;
      case 'terminal':
        return <Terminal className={className} />;
      case 'lan':
        return <Network className={className} />;
      case 'code':
        return <Code className={className} />;
      case 'bug_report':
        return <Bug className={className} />;
      default:
        return <Shield className={className} />;
    }
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'building':
        return 'bg-[#00a572]/20 text-[#4edea3] border-[#4edea3]/30';
      case 'learning':
        return 'bg-[#06b6d4]/20 text-[#4cd7f6] border-[#4cd7f6]/30';
      case 'exploring':
        return 'bg-[#9a9dff]/20 text-[#c0c1ff] border-[#c0c1ff]/30';
      default:
        return 'bg-[#1c2b3c] text-[#d4e4fa] border-[#3d494c]';
    }
  };

  const getDotStyle = (type: string) => {
    switch (type) {
      case 'building':
        return 'bg-[#4edea3]';
      case 'learning':
        return 'bg-[#4cd7f6]';
      case 'exploring':
        return 'bg-[#c0c1ff]';
      default:
        return 'bg-[#869397]';
    }
  };

  return (
    <section id="cybersecurity" className="w-full py-16 lg:py-24 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            02 // Core Trajectory
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            Cybersecurity Journey
          </h2>
          <p className="text-sm sm:text-base text-[#bcc9cd] max-w-2xl leading-relaxed mt-1">
            An honest, disciplined undergraduate progression through core defensive domains, operating systems, and network protocols.
          </p>
        </div>

        {/* 6 Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAJECTORY_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              onClick={() => setSelectedDomain(domain)}
              className="bg-[#122131]/70 hover:bg-[#1c2b3c]/90 border border-[#1c2b3c] hover:border-[#4cd7f6]/40 transition-all duration-200 p-6 rounded-xl flex flex-col justify-between group cursor-pointer shadow-md hover:shadow-[0_8px_30px_rgba(76,215,246,0.1)] transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-[#051424]/80 border border-[#1c2b3c] text-[#4cd7f6] group-hover:scale-110 transition-transform">
                    {getIcon(
                      domain.icon,
                      domain.badgeType === 'building'
                        ? 'w-6 h-6 text-[#4edea3]'
                        : domain.badgeType === 'learning'
                        ? 'w-6 h-6 text-[#4cd7f6]'
                        : 'w-6 h-6 text-[#c0c1ff]'
                    )}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider border ${getBadgeStyle(
                      domain.badgeType
                    )}`}
                  >
                    {domain.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#d4e4fa] pt-1 group-hover:text-[#4cd7f6] transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#bcc9cd] leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#1c2b3c]/80 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className={`w-2 h-2 rounded-full ${getDotStyle(domain.badgeType)}`}></span>
                  <span className="text-[#bcc9cd]">Domain: <strong className="text-[#d4e4fa] font-medium">{domain.domain}</strong></span>
                </div>
                <span className="text-xs text-[#4cd7f6] opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  Inspect <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trajectory Detail Modal */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#122131] border border-[#3d494c]/60 max-w-xl w-full rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="bg-[#1c2b3c] p-5 flex items-center justify-between border-b border-[#3d494c]/40">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#051424] border border-[#3d494c]/50">
                  {getIcon(selectedDomain.icon, 'w-6 h-6 text-[#4cd7f6]')}
                </div>
                <div>
                  <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider border ${getBadgeStyle(selectedDomain.badgeType)}`}>
                    {selectedDomain.badge}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#d4e4fa] mt-1">
                    {selectedDomain.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedDomain(null)}
                className="p-1 rounded text-[#bcc9cd] hover:text-[#d4e4fa] hover:bg-[#2c3a4c] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm">
              <div>
                <span className="font-mono text-xs text-[#869397] uppercase tracking-wider block mb-1">
                  DOMAIN SCOPE
                </span>
                <p className="text-[#d4e4fa] leading-relaxed">
                  {selectedDomain.details?.overview}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider block mb-2 font-semibold">
                  KEY SYLLABUS &amp; CORE TOPICS
                </span>
                <ul className="space-y-1.5">
                  {selectedDomain.details?.keyTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#bcc9cd]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-xs text-[#869397] uppercase tracking-wider block mb-1.5">
                  TOOLS &amp; UTILITIES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDomain.details?.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#051424] text-[#d4e4fa] font-mono text-xs border border-[#1c2b3c]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#051424]/90 rounded-lg border border-[#1c2b3c]">
                <span className="font-mono text-[11px] text-[#4edea3] uppercase font-semibold block mb-0.5">
                  CURRENT HANDS-ON LAB / PRACTICE:
                </span>
                <p className="font-mono text-xs text-[#bcc9cd]">
                  &gt; {selectedDomain.details?.currentLab}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#1c2b3c]/50 p-4 border-t border-[#3d494c]/30 flex justify-end">
              <button
                onClick={() => setSelectedDomain(null)}
                className="px-4 py-2 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-semibold uppercase hover:bg-[#06b6d4] transition-colors cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

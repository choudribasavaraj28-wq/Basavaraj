import React, { useState } from 'react';
import { Terminal, ExternalLink, Folder, FolderOpen, GitBranch, Star } from 'lucide-react';
import { PERSONAL_INFO, GITHUB_FOLDERS } from '../data/portfolioData';

export const GithubLabSection: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  return (
    <section id="github" className="w-full py-16 lg:py-20 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-[#122131]/70 border border-[#1c2b3c] p-6 sm:p-8 rounded-xl flex flex-col gap-6 shadow-xl">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-2">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#4cd7f6]">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  GitHub Laboratory Hub
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#d4e4fa]">
                {PERSONAL_INFO.githubUsername}
              </h2>
              <p className="text-xs sm:text-sm text-[#bcc9cd] max-w-xl leading-relaxed">
                Cybersecurity-Focused AI &amp; Data Science Student | Python &amp; DSA | Exploring Ethical Hacking, Robotics &amp; IoT
              </p>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#273647] text-[#d4e4fa] font-mono text-xs font-semibold uppercase hover:bg-[#4cd7f6] hover:text-[#003640] transition-all w-fit shadow-md shrink-0 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Visit GitHub
            </a>
          </div>

          {/* Repository Categories Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {GITHUB_FOLDERS.map((folder, idx) => {
              const isSelected = activeFolder === folder.name;
              return (
                <a
                  key={idx}
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveFolder(folder.name)}
                  onMouseLeave={() => setActiveFolder(null)}
                  className={`p-4 rounded-lg flex items-center justify-between transition-all duration-150 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1c2b3c] border-[#4cd7f6]/50 shadow-[0_0_15px_rgba(76,215,246,0.15)]'
                      : 'bg-[#0d1c2d] border-[#1c2b3c] hover:border-[#3d494c]'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-xs sm:text-[13px] text-[#d4e4fa] font-medium">
                      {folder.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#869397]">
                      {folder.count}
                    </span>
                  </div>

                  {isSelected ? (
                    <FolderOpen className="w-5 h-5 text-[#4cd7f6] shrink-0 transition-transform scale-110" />
                  ) : (
                    <Folder className="w-5 h-5 text-[#869397] shrink-0" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

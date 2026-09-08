import React, { useState } from 'react';
import { Bot, Cpu, Lock, ExternalLink, Code2, Layers, CheckCircle, X, ChevronRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AUTONOMOUS':
        return <Bot className="w-5 h-5 text-[#869397]" />;
      case 'EMBEDDED':
        return <Cpu className="w-5 h-5 text-[#869397]" />;
      case 'BLUEPRINT':
        return <Lock className="w-5 h-5 text-[#869397]" />;
      default:
        return <Bot className="w-5 h-5 text-[#869397]" />;
    }
  };

  return (
    <section id="projects" className="w-full py-16 lg:py-24 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            04 // Hardware &amp; Security Prototypes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-[#bcc9cd] max-w-2xl leading-relaxed mt-1">
            Practical builds demonstrating hardware integration, computer vision pipelines, and ongoing security telemetry research.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {FEATURED_PROJECTS.map((project) => {
            if (project.isBlueprint) {
              return (
                <div
                  key={project.id}
                  className="bg-[#010f1f] border border-[#1c2b3c] rounded-xl overflow-hidden flex flex-col justify-between shadow-inner relative group"
                >
                  <div className="p-6 sm:p-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#4cd7f6] uppercase tracking-widest">
                        {project.number} // {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#06b6d4]/20 border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-[10px] font-bold uppercase tracking-wider">
                        {project.statusBadge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#d4e4fa]">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#4edea3] mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#bcc9cd] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Diagnostic graphic snippet */}
                    {project.mockupSnippet && (
                      <div className="bg-[#0d1c2d] border border-[#1c2b3c] p-3.5 rounded-lg font-mono text-xs text-[#869397] space-y-1 mt-1">
                        {project.mockupSnippet.map((line, idx) => (
                          <div
                            key={idx}
                            className={line.includes('[PROGRESS]') ? 'text-[#4edea3] font-semibold' : ''}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-5 bg-[#0d1c2d]/60 border-t border-[#1c2b3c] flex items-center justify-between mt-auto">
                    <span className="font-mono text-[11px] text-[#869397] uppercase tracking-wider">
                      Repository under setup
                    </span>
                    <Lock className="w-4 h-4 text-[#869397]" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="bg-[#122131]/70 hover:bg-[#1c2b3c]/80 border border-[#1c2b3c] hover:border-[#4cd7f6]/40 rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-200 group"
              >
                <div className="p-6 sm:p-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-semibold uppercase tracking-widest ${
                        project.category === 'AUTONOMOUS' ? 'text-[#4edea3]' : 'text-[#4cd7f6]'
                      }`}
                    >
                      {project.number} // {project.category}
                    </span>
                    {getCategoryIcon(project.category)}
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#d4e4fa] group-hover:text-[#4cd7f6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#4cd7f6] mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#bcc9cd] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Hardware & Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#010f1f] text-[#bcc9cd] font-mono text-[11px] border border-[#1c2b3c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 bg-[#0d1c2d]/80 border-t border-[#1c2b3c] flex items-center gap-2 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 text-center py-2 px-3 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#06b6d4] transition-colors cursor-pointer shadow-[0_0_10px_rgba(76,215,246,0.2)]"
                  >
                    View Project
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded bg-[#1c2b3c] text-[#d4e4fa] border border-[#3d494c]/60 font-mono text-xs font-semibold uppercase hover:text-[#4cd7f6] hover:border-[#4cd7f6]/50 transition-colors flex items-center justify-center gap-1"
                  >
                    GitHub
                    <ExternalLink className="w-3 h-3 text-[#869397]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Spec Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#122131] border border-[#3d494c]/70 max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="bg-[#1c2b3c] p-6 flex items-center justify-between border-b border-[#3d494c]/40">
              <div>
                <span className="font-mono text-xs font-semibold text-[#4edea3] uppercase tracking-widest">
                  {selectedProject.number} // {selectedProject.category} SPECIFICATION
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#d4e4fa] mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-[#bcc9cd] hover:text-[#d4e4fa] hover:bg-[#2c3a4c] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5 max-h-[72vh] overflow-y-auto text-sm">
              <div>
                <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold block mb-1">
                  OBJECTIVE &amp; OVERVIEW
                </span>
                <p className="text-[#d4e4fa] leading-relaxed">
                  {selectedProject.specs?.objective || selectedProject.description}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold block mb-2">
                  HARDWARE MODULES &amp; SENSORS
                </span>
                <ul className="space-y-2">
                  {selectedProject.specs?.components.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#bcc9cd]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] mt-1.5 shrink-0"></span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-xs text-[#4edea3] uppercase tracking-wider font-semibold block mb-2">
                  ENGINEERING HIGHLIGHTS &amp; ALGORITHMS
                </span>
                <ul className="space-y-2">
                  {selectedProject.specs?.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#bcc9cd]">
                      <CheckCircle className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.specs?.technicalArchitecture && (
                <div className="p-4 bg-[#051424] rounded-lg border border-[#1c2b3c]">
                  <span className="font-mono text-xs text-[#869397] uppercase tracking-wider block mb-1.5">
                    SIGNAL FLOW &amp; PIPELINE ARCHITECTURE:
                  </span>
                  <p className="font-mono text-xs text-[#acedff] leading-relaxed">
                    {selectedProject.specs.technicalArchitecture}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#1c2b3c]/60 p-4 border-t border-[#3d494c]/40 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4cd7f6] hover:underline"
              >
                Inspect repository code on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-semibold uppercase hover:bg-[#06b6d4] transition-colors cursor-pointer"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

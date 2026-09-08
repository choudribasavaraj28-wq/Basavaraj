import React, { useState } from 'react';
import { Code, Shield, MemoryStick as Memory, Cpu, Wrench, Search, Filter } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { MasteryLevel } from '../types';

export const SkillsSection: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<MasteryLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code className="w-5 h-5 text-[#4cd7f6]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#4cd7f6]" />;
      case 'memory':
        return <Memory className="w-5 h-5 text-[#4cd7f6]" />;
      case 'developer_board':
        return <Cpu className="w-5 h-5 text-[#4cd7f6]" />;
      case 'build':
        return <Wrench className="w-5 h-5 text-[#4cd7f6]" />;
      default:
        return <Code className="w-5 h-5 text-[#4cd7f6]" />;
    }
  };

  const getPillStyle = (level: MasteryLevel, text: string) => {
    // If explicitly marked in text or data
    if (text.includes('Building') || text.includes('Proficient') || text.includes('Kali Linux')) {
      return 'bg-[#1c2b3c] text-[#4edea3] border-[#00a572]/40 hover:border-[#4edea3]/60';
    }
    if (text.includes('Learning') || level === 'learning') {
      if (text.includes('Cybersecurity (Learning)') || text.includes('Networking (Learning)')) {
        return 'bg-[#1c2b3c] text-[#4cd7f6] border-[#06b6d4]/40 hover:border-[#4cd7f6]/60';
      }
    }
    if (text.includes('Exploring') || level === 'exploring') {
      return 'bg-[#1c2b3c] text-[#c0c1ff] border-[#9a9dff]/40 hover:border-[#c0c1ff]/60';
    }
    return 'bg-[#1c2b3c]/80 text-[#d4e4fa] border-[#3d494c]/50 hover:border-[#869397]';
  };

  return (
    <section id="skills" className="w-full bg-[#0d1c2d]/40 py-16 lg:py-24 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header & Mastery Legend */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
              03 // Capabilities
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
              Categorized Skills
            </h2>
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-[#4edea3]">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block"></span>
                Building / Proficient
              </span>
              <span className="flex items-center gap-1.5 text-[#4cd7f6]">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] inline-block"></span>
                Learning
              </span>
              <span className="flex items-center gap-1.5 text-[#c0c1ff]">
                <span className="w-2 h-2 rounded-full bg-[#c0c1ff] inline-block"></span>
                Exploring
              </span>
            </div>
          </div>

          {/* Search filter input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#869397] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full bg-[#122131] border border-[#3d494c]/60 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#d4e4fa] placeholder:text-[#869397] outline-none focus:border-[#4cd7f6]"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category) => {
            const filteredSkills = category.skills.filter((skill) => {
              if (searchQuery) {
                return skill.name.toLowerCase().includes(searchQuery.toLowerCase());
              }
              return true;
            });

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className={`bg-[#122131]/70 border border-[#1c2b3c] p-6 rounded-xl flex flex-col gap-4 shadow-md transition-all hover:border-[#3d494c] ${
                  category.colSpan || ''
                }`}
              >
                <div className="flex items-center gap-2.5 pb-1 border-b border-[#1c2b3c]">
                  <div className="p-1.5 rounded-md bg-[#051424] border border-[#1c2b3c]">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#d4e4fa]">
                    {category.title}
                  </h3>
                  <span className="ml-auto font-mono text-[11px] text-[#869397]">
                    {filteredSkills.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded text-xs font-medium border transition-all cursor-default ${getPillStyle(
                        skill.level,
                        skill.name
                      )}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

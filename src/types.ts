export type MasteryLevel = 'building' | 'learning' | 'exploring';

export interface TrajectoryDomain {
  id: string;
  title: string;
  badge: string;
  badgeType: MasteryLevel;
  description: string;
  domain: string;
  icon: string;
  details?: {
    overview: string;
    keyTopics: string[];
    toolsUsed: string[];
    currentLab: string;
  };
}

export interface SkillItem {
  name: string;
  level: MasteryLevel;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
  colSpan?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  statusBadge?: string;
  description: string;
  tags: string[];
  githubUrl: string;
  isBlueprint?: boolean;
  mockupSnippet?: string[];
  specs?: {
    objective: string;
    components: string[];
    keyHighlights: string[];
    technicalArchitecture: string;
  };
}

export interface RoadmapStep {
  number: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  isExternal?: boolean;
  copyable?: boolean;
}

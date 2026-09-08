import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Mail, FileText, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'learning',
        'education',
        'github',
        'contact'
      ];

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'learning', label: 'Learning Journey', href: '#learning' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'github', label: 'GitHub', href: '#github' },
    { id: 'resume', label: 'Resume', onClick: onOpenResume },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      id="top-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#051424]/90 backdrop-blur-xl border-b border-[#3d494c]/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[#051424]/80 backdrop-blur-lg border-b border-[#3d494c]/20'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Operational Status */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#home"
            id="nav-logo-link"
            className="flex items-center gap-2.5 group"
          >
            <span className="font-mono text-xs font-semibold text-[#4cd7f6] tracking-widest uppercase transition-colors group-hover:text-[#acedff]">
              BC // SEC_OPS
            </span>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#122131] border border-[#3d494c]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="font-mono text-[10px] font-semibold text-[#4edea3] uppercase tracking-wider">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-[13px] font-medium" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            if (link.onClick) {
              return (
                <button
                  key={link.id}
                  id={`nav-btn-${link.id}`}
                  onClick={link.onClick}
                  className="px-2.5 py-1 text-[#bcc9cd] hover:text-[#d4e4fa] hover:bg-[#122131]/60 rounded transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              );
            }
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-2.5 py-1 rounded transition-all ${
                  isActive
                    ? 'bg-[#1c2b3c] text-[#4cd7f6] font-semibold shadow-[0_0_10px_rgba(76,215,246,0.15)]'
                    : 'text-[#bcc9cd] hover:text-[#d4e4fa] hover:bg-[#122131]/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Action CTAs & Profile Icon */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#projects"
            id="nav-cta-projects"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#06b6d4] transition-all shadow-[0_0_12px_rgba(76,215,246,0.3)] hover:shadow-[0_0_16px_rgba(76,215,246,0.5)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            View Projects
          </a>

          <button
            onClick={onOpenContact}
            id="nav-cta-contact"
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded bg-[#1c2b3c]/60 text-[#d4e4fa] border border-[#3d494c]/60 font-mono text-xs font-semibold uppercase tracking-wider hover:border-[#4cd7f6]/60 hover:text-[#4cd7f6] transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Me
          </button>

          <button
            onClick={onOpenResume}
            title="View Resume / Dossier"
            id="nav-avatar-btn"
            className="w-8 h-8 rounded-full bg-[#4cd7f6] flex items-center justify-center shrink-0 text-[#003640] hover:scale-105 transition-transform cursor-pointer shadow-[0_0_10px_rgba(76,215,246,0.4)]"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-lg bg-[#122131] border border-[#3d494c]/40 text-[#d4e4fa] hover:text-[#4cd7f6]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#051424]/98 border-b border-[#3d494c]/50 px-4 py-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              if (link.onClick) {
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      link.onClick();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded text-left text-sm text-[#bcc9cd] hover:bg-[#122131] hover:text-[#4cd7f6]"
                  >
                    <span>{link.label}</span>
                    <FileText className="w-4 h-4 text-[#869397]" />
                  </button>
                );
              }
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#1c2b3c] text-[#4cd7f6] font-medium'
                      : 'text-[#bcc9cd] hover:bg-[#122131] hover:text-[#d4e4fa]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#3d494c]/30 flex flex-col gap-2">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-semibold uppercase"
              >
                View Projects
              </a>
              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 rounded bg-[#1c2b3c] text-[#d4e4fa] border border-[#3d494c] font-mono text-xs font-semibold uppercase"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

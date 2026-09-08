import React, { useState } from 'react';
import { Mail, Code, Users, Phone, ExternalLink, Copy, Check, Send, X } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_CHANNELS } from '../data/portfolioData';

interface ContactSectionProps {
  isContactModalOpen: boolean;
  setIsContactModalOpen: (open: boolean) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isContactModalOpen,
  setIsContactModalOpen
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formSubject || 'Inquiry from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`
      )}`;
    }, 600);
  };

  const getChannelIcon = (icon: string) => {
    switch (icon) {
      case 'mail':
        return <Mail className="w-5 h-5 text-[#4cd7f6]" />;
      case 'code':
        return <Code className="w-5 h-5 text-[#4cd7f6]" />;
      case 'group':
        return <Users className="w-5 h-5 text-[#4cd7f6]" />;
      case 'call':
        return <Phone className="w-5 h-5 text-[#4cd7f6]" />;
      default:
        return <Mail className="w-5 h-5 text-[#4cd7f6]" />;
    }
  };

  return (
    <section id="contact" className="w-full bg-[#0d1c2d]/50 py-16 lg:py-24 scroll-mt-16 border-t border-[#1c2b3c]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] tracking-widest uppercase">
            08 // Communications Gateway
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#d4e4fa] tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-[#bcc9cd] max-w-2xl leading-relaxed mt-1">
            Open to discussions, collaboration on cybersecurity labs, and future internship opportunities.
          </p>
        </div>

        {/* 4 Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="bg-[#122131]/70 border border-[#1c2b3c] hover:border-[#3d494c] p-5 rounded-xl flex flex-col justify-between transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded bg-[#051424] border border-[#1c2b3c]">
                  {getChannelIcon(channel.icon)}
                </div>
                {channel.copyable && (
                  <button
                    onClick={() => handleCopy(channel.id, channel.value)}
                    title="Copy to clipboard"
                    className="p-1 rounded text-[#869397] hover:text-[#4cd7f6] transition-colors cursor-pointer"
                  >
                    {copiedId === channel.id ? (
                      <Check className="w-4 h-4 text-[#4edea3]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
                {channel.isExternal && (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded text-[#869397] hover:text-[#4cd7f6] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#869397] uppercase tracking-wider block">
                  {channel.label}
                </span>
                <a
                  href={channel.href}
                  target={channel.isExternal ? '_blank' : undefined}
                  rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                  className="font-mono text-xs text-[#d4e4fa] hover:text-[#4cd7f6] font-medium break-all mt-1 block transition-colors"
                >
                  {channel.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsContactModalOpen(true)}
            id="contact-send-email-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#06b6d4] transition-all cursor-pointer shadow-[0_0_15px_rgba(76,215,246,0.3)]"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1c2b3c] text-[#d4e4fa] border border-[#3d494c]/60 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#2c3a4c] hover:border-[#4cd7f6]/50 transition-all cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-[#4cd7f6]" />
            View GitHub Lab
          </a>
        </div>
      </div>

      {/* Interactive Email Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#122131] border border-[#3d494c]/70 max-w-lg w-full rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="bg-[#1c2b3c] p-5 flex items-center justify-between border-b border-[#3d494c]/40">
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#4cd7f6]" />
                <h3 className="font-heading text-lg font-bold text-[#d4e4fa]">
                  Compose Security Inquiry
                </h3>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="p-1 rounded text-[#bcc9cd] hover:text-[#d4e4fa]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {isSent ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#00a572]/20 border border-[#4edea3] flex items-center justify-center mx-auto text-[#4edea3]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#d4e4fa]">
                    Opening Mail Client...
                  </h4>
                  <p className="text-xs text-[#bcc9cd] max-w-sm mx-auto">
                    Routing your message to {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[11px] text-[#869397] uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#051424] border border-[#1c2b3c] rounded px-3 py-2 text-xs text-[#d4e4fa] focus:border-[#4cd7f6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-[#869397] uppercase mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="name@organization.com"
                        className="w-full bg-[#051424] border border-[#1c2b3c] rounded px-3 py-2 text-xs text-[#d4e4fa] focus:border-[#4cd7f6] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#869397] uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="Cybersecurity Opportunity / Collaboration"
                      className="w-full bg-[#051424] border border-[#1c2b3c] rounded px-3 py-2 text-xs text-[#d4e4fa] focus:border-[#4cd7f6] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#869397] uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Hi Basavaraj, I saw your portfolio and wanted to reach out regarding..."
                      className="w-full bg-[#051424] border border-[#1c2b3c] rounded px-3 py-2 text-xs text-[#d4e4fa] focus:border-[#4cd7f6] outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsContactModalOpen(false)}
                      className="px-4 py-2 rounded bg-[#1c2b3c] text-[#bcc9cd] font-mono text-xs uppercase hover:text-[#d4e4fa]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold uppercase hover:bg-[#06b6d4] transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Dispatch Message
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

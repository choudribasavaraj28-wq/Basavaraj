import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, FEATURED_PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#010f1f]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0d1c2d] border border-[#3d494c]/70 max-w-4xl w-full max-h-[92vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Action Header */}
        <div className="bg-[#1c2b3c] px-6 py-4 flex items-center justify-between border-b border-[#3d494c]/40 shrink-0 print:hidden">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4cd7f6] font-semibold uppercase tracking-wider">
            <span>RESUME DOSSIER // BASAVARAJ CHOUDRI</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#122131] hover:bg-[#2c3a4c] text-[#d4e4fa] font-mono text-xs border border-[#3d494c] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#4cd7f6]" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#bcc9cd] hover:text-[#d4e4fa] hover:bg-[#2c3a4c] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-[#d4e4fa] space-y-6 print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-[#1c2b3c] pb-6 print:border-gray-300">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[#d4e4fa] print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#4cd7f6] mt-1 print:text-blue-700">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#bcc9cd] mt-3 print:text-gray-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#4cd7f6] print:text-gray-800" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#4cd7f6] print:text-gray-800" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#4cd7f6] print:text-gray-800" />
                Bengaluru, Karnataka, India
              </span>
              <span>GitHub: {PERSONAL_INFO.githubUsername}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider print:text-blue-800">
              01 // EDUCATION
            </h2>
            <div className="bg-[#122131]/60 p-4 rounded-lg border border-[#1c2b3c] print:bg-transparent print:border-none print:p-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-[#d4e4fa] print:text-black">
                    {PERSONAL_INFO.university}
                  </h3>
                  <p className="text-xs text-[#bcc9cd] print:text-gray-700">
                    {PERSONAL_INFO.degree} • {PERSONAL_INFO.school}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#4edea3] print:text-green-800">
                  {PERSONAL_INFO.currentSemester} (In Progress)
                </span>
              </div>
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider print:text-blue-800">
              02 // TECHNICAL SKILLS &amp; PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#122131]/50 p-3 rounded border border-[#1c2b3c] print:bg-transparent print:border-gray-200">
                <span className="font-semibold text-[#4edea3] block mb-1 print:text-black">
                  Cybersecurity &amp; Systems:
                </span>
                <p className="text-[#bcc9cd] print:text-gray-700 leading-relaxed">
                  Cybersecurity Fundamentals, Ethical Hacking Basics, Linux OS Administration, TCP/IP &amp; OSI Networking, Packet Analysis, Security Testing, Kali Linux
                </p>
              </div>

              <div className="bg-[#122131]/50 p-3 rounded border border-[#1c2b3c] print:bg-transparent print:border-gray-200">
                <span className="font-semibold text-[#4cd7f6] block mb-1 print:text-black">
                  Languages &amp; Core Stack:
                </span>
                <p className="text-[#bcc9cd] print:text-gray-700 leading-relaxed">
                  Python (Proficient), C, SQL (MySQL), Bash Scripting, HTML, Node.js basics
                </p>
              </div>

              <div className="bg-[#122131]/50 p-3 rounded border border-[#1c2b3c] print:bg-transparent print:border-gray-200">
                <span className="font-semibold text-[#c0c1ff] block mb-1 print:text-black">
                  AI &amp; Computer Vision:
                </span>
                <p className="text-[#bcc9cd] print:text-gray-700 leading-relaxed">
                  Computer Vision Pipelines, OpenCV, YOLO Object Detection, Machine Learning Foundations
                </p>
              </div>

              <div className="bg-[#122131]/50 p-3 rounded border border-[#1c2b3c] print:bg-transparent print:border-gray-200">
                <span className="font-semibold text-[#4edea3] block mb-1 print:text-black">
                  Hardware &amp; Embedded:
                </span>
                <p className="text-[#bcc9cd] print:text-gray-700 leading-relaxed">
                  Raspberry Pi, ESP32, ESP32-CAM, Arduino, NodeMCU, Ultrasonic/Infrared Sensors, IoT Modules, Microcontroller PWM
                </p>
              </div>
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider print:text-blue-800">
              03 // FEATURED PRACTICAL PROJECTS
            </h2>

            {FEATURED_PROJECTS.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-[#122131]/50 p-4 rounded-lg border border-[#1c2b3c] space-y-2 print:bg-transparent print:border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-[#d4e4fa] print:text-black">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#4cd7f6] print:text-gray-600">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs text-[#bcc9cd] print:text-gray-700">
                  {project.description}
                </p>
                {project.specs && (
                  <ul className="space-y-1 pt-1">
                    {project.specs.keyHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#bcc9cd] print:text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] shrink-0 mt-0.5 print:text-black" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Target Direction */}
          <div className="p-4 bg-[#122131]/30 rounded-lg border border-[#1c2b3c] print:bg-transparent print:border-gray-200">
            <h2 className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider mb-1 print:text-blue-800">
              04 // CAREER OBJECTIVE
            </h2>
            <p className="text-xs text-[#bcc9cd] print:text-gray-700 leading-relaxed">
              Seeking early-career cybersecurity opportunities, lab collaborations, and SOC/security analyst internships where I can apply my foundational knowledge in network protocols, Linux administration, Python automation, and hands-on hardware systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

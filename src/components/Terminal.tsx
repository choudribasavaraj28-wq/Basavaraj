import React, { useState, useRef, useEffect } from 'react';
import { Lock, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, TRAJECTORY_DOMAINS, SKILL_CATEGORIES } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output?: React.ReactNode;
  isInitial?: boolean;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: <p className="text-[#4edea3] pl-4">basavaraj</p>,
      isInitial: true
    },
    {
      command: 'focus',
      output: <p className="text-[#acedff] pl-4">cybersecurity</p>,
      isInitial: true
    },
    {
      command: 'learning',
      output: <p className="text-[#d4e4fa] pl-4">python + linux + networking</p>,
      isInitial: true
    },
    {
      command: 'goal',
      output: <p className="text-[#4edea3] pl-4">security professional</p>,
      isInitial: true
    }
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output: React.ReactNode;

    switch (cmd) {
      case 'whoami':
        output = <p className="text-[#4edea3] pl-4">basavaraj (Basavaraj Choudri — REVA University 3rd Sem AI & DS)</p>;
        break;

      case 'focus':
        output = <p className="text-[#acedff] pl-4">cybersecurity / ethical hacking + security automation</p>;
        break;

      case 'learning':
        output = <p className="text-[#d4e4fa] pl-4">python + linux + networking + defensive fundamentals</p>;
        break;

      case 'goal':
        output = <p className="text-[#4edea3] pl-4">security professional specializing in defensive engineering & automation</p>;
        break;

      case 'help':
        output = (
          <div className="pl-4 space-y-1 text-xs text-[#bcc9cd]">
            <p className="text-[#4cd7f6] font-semibold">Available SEC_OPS Commands:</p>
            <p><span className="text-[#acedff] font-mono">whoami</span> — Identity credentials</p>
            <p><span className="text-[#acedff] font-mono">focus</span> — Core security discipline</p>
            <p><span className="text-[#acedff] font-mono">learning</span> — Active technical study paths</p>
            <p><span className="text-[#acedff] font-mono">goal</span> — Target industry destination</p>
            <p><span className="text-[#acedff] font-mono">skills</span> — Enumerate categorized abilities</p>
            <p><span className="text-[#acedff] font-mono">projects</span> — List hardware & cyber prototypes</p>
            <p><span className="text-[#acedff] font-mono">roadmap</span> — View 9-stage engineering milestones</p>
            <p><span className="text-[#acedff] font-mono">status</span> — Check telemetry & defense posture</p>
            <p><span className="text-[#acedff] font-mono">neofetch</span> — System specs & academic profile</p>
            <p><span className="text-[#acedff] font-mono">clear</span> — Clear terminal display</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="pl-4 text-xs space-y-1 text-[#bcc9cd]">
            <p className="text-[#4cd7f6] font-semibold">CAPABILITIES CATALOG:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <p key={cat.id}>
                <span className="text-[#4edea3] font-mono">{cat.title}:</span>{' '}
                {cat.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="pl-4 text-xs space-y-1 text-[#bcc9cd]">
            <p className="text-[#4cd7f6] font-semibold">ENGINEERING PROTOTYPES:</p>
            <p className="text-[#d4e4fa]">• [01] Self-Driving Robotaxi Prototype (Raspberry Pi, ESP32, OpenCV)</p>
            <p className="text-[#d4e4fa]">• [02] Lane Follower Robot (Arduino, IR Array, PID Control)</p>
            <p className="text-[#4edea3]">• [03] Cybersecurity Project [Planned: Python3, Scapy, Network Labs]</p>
          </div>
        );
        break;

      case 'roadmap':
        output = (
          <div className="pl-4 text-xs space-y-1 text-[#bcc9cd]">
            <p className="text-[#4cd7f6] font-semibold">LEARNING SEQUENCE:</p>
            <p>01. Python Fundamentals <span className="text-[#4edea3]">[DONE]</span></p>
            <p>02. Data Structures & Algorithms <span className="text-[#4cd7f6]">[ACTIVE]</span></p>
            <p>03. Linux & Networking <span className="text-[#4cd7f6]">[ACTIVE]</span></p>
            <p>04. Cybersecurity Fundamentals <span className="text-[#4cd7f6]">[ACTIVE]</span></p>
            <p>05. Ethical Hacking Concepts <span className="text-[#c0c1ff]">[EXPLORING]</span></p>
            <p>06. Python for Security Automation <span className="text-[#4cd7f6]">[ACTIVE]</span></p>
            <p>07. Cybersecurity Projects & Telemetry Monitors <span className="text-[#869397]">[NEXT]</span></p>
            <p>08. GitHub & Portfolio Development <span className="text-[#4cd7f6]">[ACTIVE]</span></p>
            <p>09. Security Internship Preparation <span className="text-[#869397]">[UPCOMING]</span></p>
          </div>
        );
        break;

      case 'status':
        output = (
          <div className="pl-4 text-xs space-y-1 text-[#bcc9cd]">
            <p className="text-[#4edea3]">● SEC_OPS STATUS: OPERATIONAL & SECURE</p>
            <p>Protocol: {PERSONAL_INFO.currentProtocol}</p>
            <p>Firewall: PASSIVE RECON LOGGING ENABLED</p>
            <p>Kernel: Linux 6.x (Kali / Debian / Ubuntu environments)</p>
          </div>
        );
        break;

      case 'neofetch':
        output = (
          <div className="pl-4 text-xs font-mono text-[#bcc9cd] space-y-0.5">
            <p className="text-[#4cd7f6]">basavaraj@sec-ops</p>
            <p className="text-[#869397]">-----------------</p>
            <p><span className="text-[#4edea3]">OS:</span> Kali Linux / Ubuntu 24.04 LTS x86_64</p>
            <p><span className="text-[#4edea3]">Host:</span> REVA University - AI &amp; Data Science Dept</p>
            <p><span className="text-[#4edea3]">Uptime:</span> Semester 03 (Continuous Learning)</p>
            <p><span className="text-[#4edea3]">Shell:</span> bash 5.2.21 + Python 3.12</p>
            <p><span className="text-[#4edea3]">Primary Stack:</span> Python, C, Linux, Bash, Scapy, OpenCV</p>
            <p><span className="text-[#4edea3]">Security Targets:</span> SOC Analyst, Defense Automation, Pen-testing</p>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-[#ffb4ab] pl-4 text-xs">
            command not found: "{rawCmd}". Type <span className="text-[#4cd7f6] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for available routines.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        }
      }
    }
  };

  return (
    <div
      id="terminal-card"
      onClick={() => inputRef.current?.focus()}
      className="rounded-xl bg-[#010f1f] border border-[#1c2b3c] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col font-mono text-sm transition-all hover:border-[#4cd7f6]/40 cursor-text group"
    >
      {/* Terminal Header */}
      <div className="bg-[#1c2b3c] px-4 py-2 flex items-center justify-between border-b border-[#3d494c]/30">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#9a9dff]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#4edea3]/80 inline-block"></span>
        </div>
        <span className="font-mono text-xs text-[#869397] tracking-wider lowercase select-none">
          basavaraj@sec-ops:~
        </span>
        <div className="flex items-center gap-1.5 text-[#869397]">
          <Lock className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Terminal Scroll Content */}
      <div
        ref={scrollRef}
        className="p-5 space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto text-[13px] leading-relaxed select-text"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-[#bcc9cd] flex items-center gap-2">
              <span className="text-[#4cd7f6] font-bold">$</span>
              <span>{item.command}</span>
            </div>
            {item.output}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1 text-[#bcc9cd]">
          <span className="text-[#4cd7f6] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-[#d4e4fa] font-mono outline-none border-none p-0 text-[13px] placeholder:text-[#869397]/40 focus:ring-0"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="w-2 h-4 bg-[#4cd7f6] animate-pulse inline-block shrink-0"></span>
        </div>
      </div>

      {/* Interactive Quick Command Pills */}
      <div className="px-4 py-2 bg-[#0d1c2d]/70 border-t border-[#1c2b3c]/80 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] text-[#869397] font-mono mr-1">Quick:</span>
        {['whoami', 'focus', 'learning', 'goal', 'skills', 'projects', 'help', 'clear'].map((c) => (
          <button
            key={c}
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(c);
            }}
            className="px-2 py-0.5 rounded bg-[#122131] hover:bg-[#1c2b3c] text-[#bcc9cd] hover:text-[#4cd7f6] text-[11px] font-mono border border-[#3d494c]/40 transition-colors cursor-pointer"
          >
            ${c}
          </button>
        ))}
      </div>

      {/* Telemetry Footer Bar */}
      <div className="bg-[#0d1c2d] px-4 py-1.5 flex items-center justify-between text-[#bcc9cd] font-mono text-[11px] border-t border-[#1c2b3c]/60 select-none">
        <span className="tracking-wider">STATUS: AUTHENTICATED</span>
        <span className="text-[#4edea3] font-semibold tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping"></span>
          ENV: ACTIVE_LAB
        </span>
      </div>
    </div>
  );
};

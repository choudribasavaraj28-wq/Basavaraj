import { TrajectoryDomain, SkillCategory, ProjectItem, RoadmapStep, ContactChannel } from '../types';

export const PERSONAL_INFO = {
  name: 'Basavaraj Choudri',
  title: 'Cybersecurity Learner • AI & Data Science Student',
  degree: 'B.Tech — Artificial Intelligence and Data Science',
  university: 'REVA University',
  school: 'School of Computing and Information Technology',
  currentSemester: '3rd Semester',
  primaryFocus: 'Cybersecurity / Ethical Hacking',
  secondaryInterests: 'Robotics, IoT, Embedded Systems, Computer Vision',
  githubUsername: 'choudribasavaraj28-wq',
  githubUrl: 'https://github.com/choudribasavaraj28-wq',
  linkedinUrl: 'https://www.linkedin.com',
  email: 'choudribasavarj28@gmail.com',
  phone: '+91 9980613807',
  status: 'SYSTEM: ACTIVE',
  currentProtocol: 'Python • Linux • Networking • Cybersecurity Fundamentals',
  bioIntro: "I'm Basavaraj Choudri, a B.Tech Artificial Intelligence and Data Science student at REVA University, currently building strong foundations in cybersecurity, Python, Linux, networking, and ethical hacking through hands-on learning and practical projects.",
  bioParagraphs: [
    "I'm a 3rd-semester B.Tech student in Artificial Intelligence and Data Science at REVA University. My primary career direction is cybersecurity, with a strong interest in ethical hacking, Linux, networking, security testing, and Python-based security automation.",
    "I learn by building and experimenting. My existing hands-on experience includes robotics, IoT, embedded systems, computer vision, and autonomous systems. Projects such as my Self-Driving Robotaxi Prototype and Lane Follower Robot have helped me develop practical problem-solving skills across hardware and software.",
    "My current goal is to strengthen my cybersecurity foundations, build meaningful security-focused projects, improve my GitHub profile, and prepare for future cybersecurity internship opportunities."
  ],
  careerQuote: "My goal is to become a skilled technology professional with a strong foundation in Cybersecurity and Python while retaining my hands-on strengths in robotics, IoT, embedded systems, and computer vision.",
  learningPhilosophy: "I believe genuine technical depth comes from consistent learning, practical experimentation, documentation, and continuous improvement."
};

export const TRAJECTORY_DOMAINS: TrajectoryDomain[] = [
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    badge: 'Learning',
    badgeType: 'learning',
    description: 'Learning security concepts, threats, vulnerabilities, and defensive principles.',
    domain: 'Defensive Arch',
    icon: 'shield',
    details: {
      overview: 'Grasping foundational cyber defense doctrines, attack surface mapping, access controls, and threat modeling frameworks.',
      keyTopics: [
        'CIA Triad (Confidentiality, Integrity, Availability)',
        'Threat Vectors & Vulnerability Classifications (CVEs, OWASP Top 10)',
        'Defense-in-Depth & Layered Protection Strategies',
        'Authentication Mechanisms (MFA, RBAC, Least Privilege)',
        'Incident Response & Logging Basics'
      ],
      toolsUsed: ['Wireshark', 'Nmap', 'Suricata (Intro)', 'Security Onion'],
      currentLab: 'Analyzing packet payloads & setting up defensive host firewalls'
    }
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    badge: 'Exploring',
    badgeType: 'exploring',
    description: 'Building foundational knowledge of ethical hacking and security testing.',
    domain: 'Pen-testing Basics',
    icon: 'security',
    details: {
      overview: 'Systematic reconnaissance, vulnerability assessments, and guided exploit demonstrations in isolated target environments.',
      keyTopics: [
        'Passive & Active Information Gathering (OSINT, DNS, Shodan)',
        'Port Scanning & Banner Grabbing methodologies',
        'Vulnerability Scanning & CVE Enumeration',
        'Web Application Security principles (XSS, SQLi intro)',
        'Defensive Remediations & Ethical Rules of Engagement'
      ],
      toolsUsed: ['Kali Linux', 'Burp Suite (Community)', 'Nikto', 'Metasploit (Lab)', 'Hydra'],
      currentLab: 'TryHackMe & HackTheBox introductory walkthroughs in isolated sandbox'
    }
  },
  {
    id: 'linux',
    title: 'Linux',
    badge: 'Building',
    badgeType: 'building',
    description: 'Strengthening Linux fundamentals and command-line skills.',
    domain: 'OS Kernels & Bash',
    icon: 'terminal',
    details: {
      overview: 'Deepening command-line fluency, filesystem architecture, process scheduling, system daemons, and bash scripting.',
      keyTopics: [
        'Filesystem Hierarchy Standard (FHS) & File Permissions (chmod, chown)',
        'Process Management, Signals & Resource Inspection (ps, top, kill, htop)',
        'Bash Shell Scripting & Automation (grep, awk, sed, pipes, redirects)',
        'Network Configuration (ip, ss, iptables, netstat, ufw)',
        'Systemd Service Management & Log Inspection (journalctl, /var/log)'
      ],
      toolsUsed: ['Ubuntu Server', 'Kali Linux', 'Bash', 'Zsh', 'Vim/Nano', 'tmux'],
      currentLab: 'Building automated log surveillance and audit bash scripts'
    }
  },
  {
    id: 'networking',
    title: 'Networking',
    badge: 'Learning',
    badgeType: 'learning',
    description: 'Learning networking concepts that form the foundation of cybersecurity.',
    domain: 'TCP/IP & Packets',
    icon: 'lan',
    details: {
      overview: 'Mastering packet flow, OSI & TCP/IP layers, routing protocols, and protocol analysis tools essential for threat detection.',
      keyTopics: [
        'OSI 7-Layer Model vs. TCP/IP Architecture',
        'IP Addressing, IPv4/IPv6, Subnetting (CIDR), NAT',
        'Core Protocols: TCP, UDP, ICMP, DNS, DHCP, ARP, HTTP/HTTPS, SSH',
        'Packet Inspection & Handshakes (SYN, SYN-ACK, ACK)',
        'Firewall rules, DMZ, and Network Address Translation'
      ],
      toolsUsed: ['Wireshark', 'tcpdump', 'Cisco Packet Tracer', 'traceroute', 'ping', 'dig'],
      currentLab: 'Dissecting TLS handshakes & analyzing captured PCAP traffic traces'
    }
  },
  {
    id: 'python-security',
    title: 'Python for Security',
    badge: 'Building',
    badgeType: 'building',
    description: 'Developing Python skills with the long-term goal of creating practical security automation tools.',
    domain: 'Scripting & Tooling',
    icon: 'code',
    details: {
      overview: 'Harnessing Python 3 for network socket programming, packet crafting, log parsing, and security testing scripts.',
      keyTopics: [
        'Socket Programming (TCP/UDP Client & Server implementations)',
        'Packet Sniffing and Crafting with Scapy',
        'Log Analysis & RegEx Pattern Matching for anomalies',
        'Automated Port Scanners & Banner Grabbers',
        'Interacting with Security APIs & Parsing JSON/CSV Reports'
      ],
      toolsUsed: ['Python 3.11+', 'Scapy', 'Requests', 'Socket module', 'Subprocess', 'PyShark'],
      currentLab: 'Developing an automated multi-threaded network scanner & banner extractor'
    }
  },
  {
    id: 'security-testing',
    title: 'Security Testing',
    badge: 'Exploring',
    badgeType: 'exploring',
    description: 'Exploring the fundamentals of security testing in controlled learning environments.',
    domain: 'Controlled Labs',
    icon: 'bug_report',
    details: {
      overview: 'Practicing ethical vulnerability discovery and verification in structured, legal lab configurations.',
      keyTopics: [
        'Controlled Lab Setup with Virtual Machines (VirtualBox, VMware)',
        'Target Isolation & Host-Only Network configurations',
        'Vulnerability verification vs. false-positive filtering',
        'Reproducible documentation and proof-of-concept creation',
        'Responsible Disclosure ethics & compliance guidelines'
      ],
      toolsUsed: ['VirtualBox', 'Kali Linux', 'Metasploitable 2', 'OWASP Juice Shop', 'DVWA'],
      currentLab: 'Local DVWA testing for Input Validation & SQL injection prevention'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Python (Proficient / Building)', level: 'building' },
      { name: 'C', level: 'learning' },
      { name: 'SQL', level: 'learning' },
      { name: 'HTML', level: 'learning' }
    ]
  },
  {
    id: 'cybersecurity-systems',
    title: 'Cybersecurity & Systems',
    icon: 'shield',
    skills: [
      { name: 'Cybersecurity (Learning)', level: 'learning' },
      { name: 'Ethical Hacking (Exploring)', level: 'exploring' },
      { name: 'Linux (Building)', level: 'building' },
      { name: 'Networking (Learning)', level: 'learning' },
      { name: 'Security Testing (Exploring)', level: 'exploring' }
    ]
  },
  {
    id: 'ai-computer-vision',
    title: 'AI & Computer Vision',
    icon: 'memory',
    skills: [
      { name: 'Artificial Intelligence', level: 'learning' },
      { name: 'Machine Learning', level: 'learning' },
      { name: 'Computer Vision', level: 'building' },
      { name: 'YOLO', level: 'building' },
      { name: 'OpenCV', level: 'building' }
    ]
  },
  {
    id: 'embedded-iot',
    title: 'Embedded & IoT',
    icon: 'developer_board',
    skills: [
      { name: 'Raspberry Pi', level: 'building' },
      { name: 'ESP32', level: 'building' },
      { name: 'ESP32-CAM', level: 'building' },
      { name: 'Arduino', level: 'building' },
      { name: 'NodeMCU', level: 'building' },
      { name: 'Sensors & IoT Modules', level: 'building' }
    ]
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    icon: 'build',
    colSpan: 'md:col-span-2 lg:col-span-2',
    skills: [
      { name: 'Git', level: 'building' },
      { name: 'GitHub', level: 'building' },
      { name: 'Kali Linux', level: 'building' },
      { name: 'MySQL', level: 'learning' },
      { name: 'Node.js', level: 'learning' },
      { name: 'VS Code', level: 'building' },
      { name: 'LeetCode', level: 'learning' },
      { name: 'HackerRank', level: 'learning' }
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'self-driving-robotaxi',
    number: '01',
    category: 'AUTONOMOUS',
    title: 'Self-Driving Robotaxi Prototype',
    subtitle: 'Robotics • AI • Computer Vision • Embedded Systems',
    description: 'Developed a miniature autonomous vehicle prototype combining Raspberry Pi, ESP32, cameras, sensors, computer vision, and AI. The project focused on autonomous navigation, obstacle detection, and smart transportation concepts.',
    tags: ['Raspberry Pi', 'ESP32', 'Computer Vision', 'AI', 'Sensors', 'OpenCV'],
    githubUrl: 'https://github.com/choudribasavaraj28-wq',
    specs: {
      objective: 'Engineer a low-cost, scalable autonomous vehicle testbed with real-time computer vision inference and embedded motor arbitration.',
      components: [
        'Raspberry Pi 4 for primary high-level image processing and trajectory planning',
        'ESP32 microcontroller for real-time PWM motor driving & ultrasonic sensor telemetry',
        'Wide-angle camera module capturing road contours and lane geometries',
        'Ultrasonic & Infrared sensor array for emergency collision avoidance',
        'L298N Dual H-Bridge Motor Driver & 18650 Li-ion high-discharge battery pack'
      ],
      keyHighlights: [
        'Implemented OpenCV edge detection and Hough transform for lane boundary tracking',
        'UART serial communication protocol bridging Python AI stack with embedded C++ on ESP32',
        'Safe failover loop interrupting propulsion when obstacles cross 20cm threshold',
        'Tested across complex curved path courses and simulated urban intersections'
      ],
      technicalArchitecture: 'Sensors -> Camera -> OpenCV Processing (Raspberry Pi) -> Trajectory Steering Commands -> Serial Interface -> ESP32 PWM Control -> DC Motors'
    }
  },
  {
    id: 'lane-follower-robot',
    number: '02',
    category: 'EMBEDDED',
    title: 'Lane Follower Robot',
    subtitle: 'Robotics • Embedded Systems • Automation',
    description: 'Built a hands-on robotics project focused on autonomous lane following using sensors, embedded systems, and control logic. The project provided practical experience with autonomous movement and hardware-software interaction.',
    tags: ['Arduino', 'Sensors', 'Embedded Systems', 'Control Logic', 'PID Algorithm'],
    githubUrl: 'https://github.com/choudribasavaraj28-wq',
    specs: {
      objective: 'Create a responsive, high-precision trajectory-following ground vehicle utilizing calibrated infrared reflectance arrays.',
      components: [
        'Arduino Uno microcontroller executing real-time control routines',
        'Multi-channel Infrared Line Sensor Array for high-contrast track sensing',
        'Dual micro metal gearmotors with high-grip rubber wheels',
        'Custom lightweight chassis balanced for low center-of-gravity cornering',
        'Regulated 9V/5V dual rail power management board'
      ],
      keyHighlights: [
        'Developed tuned proportional-integral (PI) control logic to prevent overshoot oscillations',
        'Real-time ambient light sensor calibration routine on boot',
        'Intersection detection and automated 90-degree branch handling routines',
        'Demonstrated reliability on high-speed track navigation benchmarks'
      ],
      technicalArchitecture: 'Infrared Array -> ADC Inputs (Arduino) -> Error Calculation & PID Loop -> Dual H-Bridge Motor Output'
    }
  },
  {
    id: 'cybersecurity-project',
    number: '03',
    category: 'BLUEPRINT',
    title: 'Cybersecurity Project',
    subtitle: 'Status: Planned / Learning',
    statusBadge: 'Coming Next',
    isBlueprint: true,
    description: 'Currently working toward building a beginner cybersecurity project focused on Python, Linux, networking, and security fundamentals.',
    tags: ['Python 3', 'Scapy', 'Socket Programming', 'Network Telemetry', 'Linux Security'],
    githubUrl: 'https://github.com/choudribasavaraj28-wq',
    mockupSnippet: [
      '> target: sec_automation_v1',
      '> stack: python3 + scapy + socket',
      '> mode: defense_recon_lab',
      '> [PROGRESS]: Architecture Phase'
    ],
    specs: {
      objective: 'Build an open-source defensive reconnaissance and port telemetry monitor in Python for local subnet auditing.',
      components: [
        'Multi-threaded TCP/UDP syn scanner module',
        'Service banner identification and fingerprinting routine',
        'Automated PCAP logger generating structured JSON event audits',
        'Configurable alert thresholds for anomalous port activity'
      ],
      keyHighlights: [
        'Zero external heavy dependencies, built on Python native sockets and Scapy',
        'Comprehensive security report generation in Markdown and JSON formats',
        'Integrated with Linux systemd service for continuous lab monitoring'
      ],
      technicalArchitecture: 'Network Interface -> Raw Socket Listener -> Packet Dissector -> Rule Engine -> Telemetry Alert Stream'
    }
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    number: '01',
    title: 'Python Fundamentals',
    description: 'Core syntax, OOP, modules & scripting basics.',
    status: 'completed'
  },
  {
    number: '02',
    title: 'Data Structures & Algorithms',
    description: 'Problem solving, complexity, LeetCode practice.',
    status: 'in-progress'
  },
  {
    number: '03',
    title: 'Linux & Networking',
    description: 'POSIX internals, bash scripting, subnetting & TCP/IP.',
    status: 'in-progress'
  },
  {
    number: '04',
    title: 'Cybersecurity Fundamentals',
    description: 'Threat vectors, CIA triad, security policies.',
    status: 'in-progress'
  },
  {
    number: '05',
    title: 'Ethical Hacking Concepts',
    description: 'Controlled reconnaissance & vulnerability identification.',
    status: 'in-progress'
  },
  {
    number: '06',
    title: 'Python for Security Automation',
    description: 'Automating audits, parsing logs, custom defensive tools.',
    status: 'in-progress'
  },
  {
    number: '07',
    title: 'Cybersecurity Projects',
    description: 'Building hands-on defensive tools and telemetry monitors.',
    status: 'upcoming'
  },
  {
    number: '08',
    title: 'GitHub & Portfolio Development',
    description: 'Structured documentation, clean repos & public builds.',
    status: 'in-progress'
  },
  {
    number: '09',
    title: 'Internship Preparation',
    description: 'Targeting SOC analyst and security engineering internships.',
    status: 'upcoming'
  }
];

export const GITHUB_FOLDERS = [
  { name: 'Cybersecurity Projects', count: 'Planned / 1 Lab', tag: 'sec_automation' },
  { name: 'Python & DSA Practice', count: '45+ Solutions', tag: 'leetcode_dsa' },
  { name: 'Self-Driving Robotaxi', count: 'Autonomous Prototype', tag: 'robotaxi_ai' },
  { name: 'Lane Follower Robot', count: 'Embedded C / Arduino', tag: 'robotics_pid' },
  { name: 'IoT / Embedded Projects', count: 'ESP32 & Sensors', tag: 'microcontrollers' },
  { name: 'Computer Vision Projects', count: 'OpenCV & YOLO', tag: 'cv_models' }
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email Direct',
    value: 'choudribasavarj28@gmail.com',
    href: 'mailto:choudribasavarj28@gmail.com',
    icon: 'mail',
    copyable: true
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'choudribasavaraj28-wq',
    href: 'https://github.com/choudribasavaraj28-wq',
    icon: 'code',
    isExternal: true
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Basavaraj Choudri',
    href: 'https://www.linkedin.com',
    icon: 'group',
    isExternal: true
  },
  {
    id: 'phone',
    label: 'Telephone',
    value: '+91 9980613807',
    href: 'tel:+919980613807',
    icon: 'call',
    copyable: true
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Display list of available terminal commands' },
  { cmd: 'whoami', desc: 'Output user credentials & handle' },
  { cmd: 'focus', desc: 'Display primary technological discipline' },
  { cmd: 'learning', desc: 'List active study & research topics' },
  { cmd: 'goal', desc: 'Output target career objective' },
  { cmd: 'skills', desc: 'Print categorized technical capabilities' },
  { cmd: 'projects', desc: 'Inspect featured engineering prototypes' },
  { cmd: 'roadmap', desc: 'Show sequential 9-step learning milestones' },
  { cmd: 'education', desc: 'Display university and degree specs' },
  { cmd: 'contact', desc: 'Display contact gateway information' },
  { cmd: 'status', desc: 'Inspect live telemetry and system metrics' },
  { cmd: 'clear', desc: 'Clear the terminal output screen' }
];

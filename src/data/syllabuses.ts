export interface Topic {
  id: string;
  name: string;
  completed: boolean;
}

export interface Subject {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Syllabus {
  id: string;
  name: string;
  subjects: Subject[];
}

const createTopics = (topicNames: string[]): Topic[] => {
  return topicNames.map((name, index) => ({
    id: `topic-${index}`,
    name,
    completed: false,
  }));
};

export const syllabuses: Syllabus[] = [

  
  {
    id: 'rrb-technician',
    name: 'RRB Technician',
    subjects: [
      {
        id: 'gk-rrb-tech',
        name: 'General Awareness',
        topics: createTopics([
          "Knowledge of Current Affairs",
          "Indian Geography",
          "Culture and History including Freedom Struggle",
          "Indian Polity and Constitution",
          "Indian Economy",
          "Environmental Issues Concerning India and the World",
          "Sports",
          "General Scientific and Technological Developments",
          "Basic Science and Engineering"
        ]),
      },
      {
        id: 'physics-fundamentals',
        name: 'Physics Fundamentals',
        topics: createTopics([
          "Units and Measurements",
          "Mass, Weight, and Density",
          "Work, Power, and Energy",
          "Speed and Velocity",
          "Heat and Temperature",
          "Electricity and Magnetism"
        ]),
      },
      {
        id: 'electricity-magnetism',
        name: 'Electricity & Magnetism',
        topics: createTopics([
          "Electric Charge, Field, and Intensity",
          "Electric Potential and Potential Difference",
          "Simple Electric Circuits",
          "Conductors and Insulators",
          "Ohm’s Law and its Limitations",
          "Resistance in Series and Parallel",
          "Specific Resistance",
          "Relation between Electric Potential, Energy, and Power",
          "Ampere’s Law",
          "Magnetic Force on Moving Charges",
          "Electromagnetic Induction and Faraday’s Law",
          "Magnetic Field and Magnetic Induction"
        ]),
      },
      {
        id: 'electronics-measurements',
        name: 'Electronics and Measurements',
        topics: createTopics([
          "Basic Electronics",
          "Digital Electronics",
          "Electronic Devices and Circuits",
          "Microcontroller and Microprocessor",
          "Electronic Measurements and Measuring Systems",
          "Range Extension Methods",
          "CRO (Cathode Ray Oscilloscope)",
          "LCD and LED Panels",
          "Transducers"
        ]),
      },
      {
        id: 'computers',
        name: 'Basic of Computers and Applications',
        topics: createTopics([
          "Architecture of Computers",
          "Input and Output Devices",
          "Storage Devices",
          "Networking",
          "Operating Systems (Windows, Unix, Linux)",
          "MS Office",
          "Data Representation",
          "Internet and Email",
          "Websites and Web Browsers",
          "Computer Virus"
        ]),
      },
      {
        id: 'math-rrb-tech',
        name: 'Mathematics',
        topics: createTopics([
          "Number System",
          "Rational and Irrational Numbers",
          "BODMAS Rule",
          "Quadratic Equations",
          "Arithmetic Progression",
          "Similar Triangles",
          "Pythagoras Theorem",
          "Coordinate Geometry",
          "Trigonometrical Ratios",
          "Heights and Distances",
          "Surface Area and Volume"
        ]),
      },
      {
        id: 'reasoning-rrb-tech',
        name: 'General Intelligence & Reasoning',
        topics: createTopics([
          "Analogies",
          "Alphabetical and Number Series",
          "Coding and Decoding",
          "Mathematical Operations",
          "Relationships",
          "Syllogism",
          "Jumbling",
          "Venn Diagrams",
          "Data Interpretation and Sufficiency",
          "Conclusions and Decision Making",
          "Similarities and Differences",
          "Analytical Reasoning",
          "Classification",
          "Directions",
          "Statement–Arguments and Assumptions"
        ]),
      },
    ],
  },
  {
    id: 'ssc',
    name: 'SSC CGL',
    subjects: [
      {
        id: 'reasoning',
        name: 'General Intelligence & Reasoning',
        topics: createTopics([
          "Analogies",
          "Series Completion",
          "Coding-Decoding",
          "Puzzle",
          "Blood Relations",
          "Direction Sense Test",
          "Syllogism",
          "Venn Diagrams",
          "Ranking/Order Arrangement",
          "Non-Verbal Reasoning (Figure Matrix, Embedded Figures, etc.)",
          "Decision Making",
          "Matrix",
          "Paper Folding and Cutting",
          "Mirror Images and Water Images",
          "Cubes and Dice",
          "Counting Figures",
          "Clock and Calendar",
          "Classification (Odd One Out)",
        ]),
      },
      {
        id: 'quant',
        name: 'Quantitative Aptitude',
        topics: createTopics([
          "Number System",
          "LCM and HCF",
          "Simplification",
          "Ratio and Proportion",
          "Percentage",
          "Average",
          "Mixture and Alligation",
          "Profit and Loss",
          "Discount",
          "Simple and Compound Interest",
          "Time, Speed, Distance",
          "Time and Work",
          "Partnership",
          "Boats and Streams",
          "Pipes and Cisterns",
          "Algebra",
          "Geometry",
          "Mensuration",
          "Trigonometry",
          "Statistics",
          "Permutation and Combination",
          "Probability",
          "Data Interpretation (Tables, Graphs, Pie Charts)"
        ]),
      },
      {
        id: 'gk',
        name: 'General Awareness',
        topics: createTopics([
          "Current Affairs (National & International)",
          "Indian History",
          "Indian Geography",
          "Indian Polity & Constitution",
          "Economics",
          "Science (Physics, Chemistry, Biology)",
          "Technology Developments",
          "Environment",
          "Important Government Schemes and Policies",
          "Static GK (Awards, Books, Important Days, etc.)"
        ]),
      },
      {
        id: 'english',
        name: 'English Language',
        topics: createTopics([
          "Reading Comprehension",
          "Vocabulary (Synonyms, Antonyms)",
          "Grammar (Error Spotting, Fill in the Blanks)",
          "Sentence Rearrangement",
          "Idioms & Phrases",
          "Cloze Test",
          "Para Jumbles",
          "Active & Passive Voice",
          "Direct & Indirect Speech"
        ]),
      },
    ],
  },
  {
    id: 'rrb',
    name: 'RRB NTPC',
    subjects: [
      {
        id: 'math',
        name: 'Mathematics',
        topics: createTopics([
          "Number System",
          "BODMAS",
          "Decimals",
          "Fractions",
          "LCM, HCF",
          "Ratio and Proportions",
          "Percentages",
          "Mensuration",
          "Time and Work",
          "Time and Distance",
          "Simple and Compound Interest",
          "Profit and Loss",
          "Algebra",
          "Geometry",
          "Trigonometry",
          "Elementary Statistics",
          "Square Root",
          "Age Calculations",
          "Calendar & Clock",
          "Pipes & Cistern"
        ]),
      },
      {
        id: 'reasoning-rrb',
        name: 'General Intelligence and Reasoning',
        topics: createTopics([
          "Analogies",
          "Alphabetical and Number Series",
          "Mathematical Operations",
          "Similarities and Differences",
          "Relationships",
          "Analytical Reasoning",
          "Syllogism",
          "Jumbling",
          "Venn Diagram",
          "Data Interpretation",
          "Conclusions and Decision Making",
          "Maps",
          "Interpretation and Classification",
          "Non-Verbal Series",
          "Coding and Decoding",
          "Statement - Arguments and Assumptions"
        ]),
      },
      {
        id: 'gk-rrb',
        name: 'General Awareness',
        topics: createTopics([
          "Current Affairs",
          "Indian Geography",
          "Culture and History of India",
          "Indian Polity and Constitution",
          "Indian Economy",
          "Environmental Issues",
          "General Science",
          "Computer and Mobile Technology",
          "Famous Books and Authors",
          "Sports",
          "Important Government Schemes",
          "Flora and Fauna",
          "Important Days & Dates",
          "Portfolio"
        ]),
      },
    ],
  },
  {
    id: 'bank',
    name: 'Bank PO',
    subjects: [
      {
        id: 'reasoning-bank',
        name: 'Reasoning Ability',
        topics: createTopics([
          "Seating Arrangement",
          "Puzzle",
          "Syllogism",
          "Inequality",
          "Blood Relation",
          "Direction Sense",
          "Order and Ranking",
          "Alphabet Test",
          "Data Sufficiency",
          "Coded Inequalities",
          "Alpha Numeric Series",
          "Coding Decoding",
          "Input Output",
          "Statement & Assumptions",
          "Statement & Arguments",
          "Passage & Conclusions",
          "Cause & Effect"
        ]),
      },
      {
        id: 'quant-bank',
        name: 'Quantitative Aptitude',
        topics: createTopics([
          "Data Interpretation",
          "Inequalities",
          "Number Series",
          "Approximation and Simplification",
          "Profit & Loss",
          "Mixtures & Alligations",
          "Simple Interest & Compound Interest",
          "Surds & Indices",
          "Percentage",
          "Ratio & Proportion",
          "Average",
          "Time & Work",
          "Time & Distance",
          "Mensuration – Cylinder, Cone, Sphere",
          "Data Sufficiency",
          "Logarithms",
          "Permutation, Combination & Probability",
          "Boat & Streams",
          "Problems on Numbers",
          "Problems on Ages"
        ]),
      },
      {
        id: 'english-bank',
        name: 'English Language',
        topics: createTopics([
          "Reading Comprehension",
          "Cloze Test",
          "Para Jumbles",
          "Miscellaneous",
          "Fill in the Blanks",
          "Multiple Meaning/Error Spotting",
          "Paragraph Completion",
          "New Pattern English (Word Usage Types and Spell Check)"
        ]),
      },
      {
        id: 'computer',
        name: 'Computer Aptitude',
        topics: createTopics([
          "Computer Basics",
          "Hardware",
          "Software",
          "Operating System",
          "Word Processing",
          "MS Excel",
          "PowerPoint",
          "Internet",
          "LAN, WAN, MAN",
          "Database Management Systems",
          "Cyber Security"
        ]),
      },
      {
        id: 'gk-bank',
        name: 'General/Financial Awareness',
        topics: createTopics([
          "Banking Terms",
          "RBI Functions",
          "Banking History",
          "Financial Institutions",
          "Capital Market",
          "Insurance",
          "Currency",
          "Finance Commission",
          "Economic Survey",
          "Budget",
          "Tax",
          "Inflation",
          "National Income",
          "Government Schemes",
          "International Organizations"
        ]),
      },
    ],
  },
  {
  id: 'bsnl-set',
  name: 'BSNL SET',
  subjects: [
    {
      id: 'aptitude',
      name: 'General Aptitude',
      topics: createTopics([
        "Number System",
        "Simplification and Approximation",
        "Ratio and Proportion",
        "Percentage",
        "Average",
        "Profit and Loss",
        "Simple and Compound Interest",
        "Time and Work",
        "Time Speed Distance",
        "Data Interpretation",
        "Logical Reasoning",
        "Coding and Decoding",
        "Syllogism",
        "Seating Arrangement",
        "Puzzles",
        "Reading Comprehension",
        "Sentence Correction",
        "Vocabulary"
      ]),
    },

    {
      id: 'network-theory',
      name: 'Network Theory',
      topics: createTopics([
        "Circuit Laws (KCL, KVL)",
        "Node and Mesh Analysis",
        "Thevenin Theorem",
        "Norton Theorem",
        "Superposition Theorem",
        "Maximum Power Transfer",
        "AC Circuit Analysis",
        "Resonance",
        "Transient Analysis",
        "Two Port Networks"
      ]),
    },

    {
      id: 'analog-electronics',
      name: 'Analog Electronics',
      topics: createTopics([
        "Semiconductor Physics",
        "PN Junction Diode",
        "Rectifiers",
        "Zener Diode",
        "BJT Characteristics",
        "MOSFET",
        "Biasing Techniques",
        "Small Signal Models",
        "Amplifiers",
        "Operational Amplifiers",
        "Feedback Amplifiers",
        "Oscillators",
        "Power Amplifiers"
      ]),
    },

    {
      id: 'digital-electronics',
      name: 'Digital Electronics',
      topics: createTopics([
        "Boolean Algebra",
        "Logic Gates",
        "Karnaugh Maps",
        "Combinational Circuits",
        "Multiplexers and Demultiplexers",
        "Encoders and Decoders",
        "Sequential Circuits",
        "Flip Flops",
        "Counters",
        "Registers",
        "ADC",
        "DAC"
      ]),
    },

    {
      id: 'signals-systems',
      name: 'Signals and Systems',
      topics: createTopics([
        "Continuous Signals",
        "Discrete Signals",
        "Linear Time Invariant Systems",
        "Convolution",
        "Fourier Series",
        "Fourier Transform",
        "Laplace Transform",
        "Z Transform",
        "Sampling Theorem"
      ]),
    },

    {
      id: 'communication-systems',
      name: 'Communication Systems',
      topics: createTopics([
        "Analog Communication",
        "AM",
        "FM",
        "PM",
        "Noise in Communication",
        "Pulse Modulation",
        "Digital Communication",
        "ASK",
        "FSK",
        "PSK",
        "QAM",
        "Error Control Coding",
        "Information Theory"
      ]),
    },

    {
      id: 'control-systems',
      name: 'Control Systems',
      topics: createTopics([
        "Transfer Function",
        "Block Diagram Reduction",
        "Signal Flow Graph",
        "Time Response Analysis",
        "Stability Analysis",
        "Routh Stability Criterion",
        "Root Locus",
        "Nyquist Plot",
        "Bode Plot",
        "PID Controllers"
      ]),
    },

    {
      id: 'electromagnetics',
      name: 'Electromagnetic Theory',
      topics: createTopics([
        "Maxwell Equations",
        "Wave Propagation",
        "Transmission Lines",
        "Waveguides",
        "Antennas"
      ]),
    },

    {
      id: 'computer-networks',
      name: 'Computer Networks',
      topics: createTopics([
        "OSI Model",
        "TCP/IP Model",
        "IPv4",
        "IPv6",
        "Subnetting",
        "Routing Protocols",
        "Switching Techniques",
        "Network Security",
        "Wireless Networking"
      ]),
    },

    {
      id: 'telecom-technologies',
      name: 'Telecommunication Technologies',
      topics: createTopics([
        "Telecommunication Architecture",
        "Switching Systems",
        "Signaling Systems",
        "PSTN",
        "VoIP",
        "Next Generation Networks",
        "Cellular Communication",
        "LTE",
        "5G",
        "Satellite Communication"
      ]),
    },

    {
      id: 'optical-communication',
      name: 'Optical Communication',
      topics: createTopics([
        "Optical Fiber Structure",
        "Optical Transmitters",
        "Optical Receivers",
        "Fiber Losses",
        "Optical Amplifiers",
        "DWDM",
        "GPON"
      ]),
    },

    {
      id: 'data-networks',
      name: 'IP and Data Networks',
      topics: createTopics([
        "MPLS",
        "Packet Switching",
        "Quality of Service",
        "Network Virtualization",
        "Software Defined Networking"
      ]),
    },

    {
      id: 'emerging-technologies',
      name: 'Emerging Technologies',
      topics: createTopics([
        "Internet of Things",
        "Cloud Computing",
        "Artificial Intelligence Basics",
        "Big Data",
        "Cyber Security"
      ]),
    },

    {
      id: 'telecom-management',
      name: 'Telecom Infrastructure and Management',
      topics: createTopics([
        "Telecom Network Planning",
        "Telecom Standards",
        "Quality of Service",
        "Telecom Project Management",
        "Network Operations"
      ]),
    }
  ]
},
{
  id: 'CIL',
  name: 'CIL',
  subjects: [
    // --- PAPER 1 SECTIONS ---
    {
      id: 'general-awareness',
      name: '1-General Awareness',
      topics: createTopics([
        "General Science",
        "Inventions & Discoveries",
        "Indian Polity & Constitution",
        "Indian History",
        "Indian Geography",
        "Indian Economy",
        "Important Monuments & Places of India",
        "Physical/Social/Economic Geography of India & World",
        "Awards & Honours",
        "Science & Technology Developments",
        "Sports",
        "National & International Organisations",
        "National Parks & Wildlife Sanctuaries",
        "Ports & Power Plants",
        "Books & Authors",
        "Union Budget",
        "Flagship Government Programmes",
        "National & International Current Affairs",
        "Internet & Computer Awareness",
        "Climate Change & SDGs",
        "Coal Sector in India"
      ]),
    },
    {
      id: 'logical-reasoning',
      name: '1-Logical Reasoning',
      topics: createTopics([
        "Alphabetical Series",
        "Number Series",
        "Coding-Decoding",
        "Blood Relation",
        "Syllogism",
        "Statement & Conclusions",
        "Statement & Arguments",
        "Decision Making",
        "Clocks & Calendars",
        "Cubes & Dice",
        "Directions",
        "Analogy",
        "Embedded Figures",
        "Mirror Images",
        "Non-Verbal Series",
        "Seating Arrangement",
        "Data Analysis through Charts, Tables & Graphs"
      ]),
    },
    {
      id: 'quantitative-aptitude',
      name: '1-Quantitative Aptitude',
      topics: createTopics([
        "Number System",
        "LCM-HCF",
        "Average",
        "Age",
        "Percentage",
        "Ratio & Proportion",
        "Profit & Loss",
        "Time-Speed-Distance",
        "Time & Work",
        "Mixture & Allegation",
        "Boat & Stream",
        "Pipes & Cistern",
        "Simple & Compound Interest",
        "Surds & Indices",
        "Mensuration",
        "Probability",
        "Permutation & Combination",
        "Decimal Fractions",
        "Elementary Statistics"
      ]),
    },
    {
      id: 'english',
      name: '1-English',
      topics: createTopics([
        "Synonyms",
        "Antonyms",
        "Reading Comprehension",
        "Para Jumbles",
        "Error Spotting",
        "Jumbled Sentences",
        "Sentence Completion",
        "Fill in the Blanks",
        "Idiomatic Use of Words"
      ]),
    },
    // --- PAPER 2 SUBJECTS ---
    {
      id: 'programming-data-structures',
      name: 'Programming & Data Structures',
      topics: createTopics([
        "C Programming",
        "Recursion",
        "Arrays",
        "Stacks",
        "Queues",
        "Linked Lists",
        "Trees",
        "Binary Search Trees",
        "Binary Heaps",
        "Graphs"
      ]),
    },
    {
      id: 'dbms-sql',
      name: 'Databases / DBMS & SQL',
      topics: createTopics([
        "ER Model",
        "Relational Model",
        "Relational Algebra",
        "Tuple Calculus",
        "SQL",
        "Integrity Constraints",
        "Normal Forms",
        "File Organization",
        "Indexing",
        "B Tree",
        "B+ Tree",
        "Transactions",
        "Concurrency Control"
      ]),
    },
    {
      id: 'algorithms',
      name: 'Algorithms',
      topics: createTopics([
        "Searching",
        "Sorting",
        "Hashing",
        "Worst-Case Time & Space Complexity",
        "Greedy Method",
        "Dynamic Programming",
        "Divide & Conquer",
        "Graph Search",
        "Minimum Spanning Tree",
        "Shortest Path"
      ]),
    },
    {
      id: 'computer-networks-security',
      name: 'Computer Networks & Security',
      topics: createTopics([
        "Layering Concept",
        "LAN Technologies",
        "Ethernet",
        "Flow Control",
        "Error Control",
        "Switching",
        "IPv4/IPv6",
        "Routers",
        "Routing Algorithms",
        "Distance Vector",
        "Link State",
        "TCP/UDP",
        "Sockets",
        "Congestion Control",
        "DNS",
        "SMTP",
        "POP",
        "FTP",
        "HTTP",
        "Wi-Fi",
        "Authentication",
        "Public Key Cryptography",
        "Private Key Cryptography",
        "Digital Signatures",
        "Digital Certificates",
        "Firewalls"
      ]),
    },
    {
      id: 'digital-logic',
      name: 'Digital Logic',
      topics: createTopics([
        "Boolean Algebra",
        "Combinational Circuits",
        "Sequential Circuits",
        "Minimization",
        "Number Representation",
        "Fixed Point Arithmetic",
        "Floating Point Arithmetic"
      ]),
    },
    {
      id: 'operating-system',
      name: 'Operating System',
      topics: createTopics([
        "Processes",
        "Threads",
        "Inter-Process Communication",
        "Concurrency",
        "Synchronization",
        "Deadlock",
        "CPU Scheduling",
        "Memory Management",
        "Virtual Memory",
        "File Systems"
      ]),
    },
    {
      id: 'theory-of-computation',
      name: 'Theory of Computation',
      topics: createTopics([
        "Regular Expressions",
        "Finite Automata",
        "Context-Free Grammar",
        "Pushdown Automata",
        "Regular & Context-Free Languages",
        "Pumping Lemma",
        "Turing Machine",
        "Undecidability"
      ]),
    },
    {
      id: 'computer-organization-architecture',
      name: 'Computer Organization & Architecture',
      topics: createTopics([
        "Machine Instructions",
        "Addressing Modes",
        "ALU",
        "Data Path",
        "Control Unit",
        "Instruction Pipeline",
        "Cache Memory",
        "Main Memory",
        "Secondary Storage",
        "I/O Interface",
        "Interrupt Mode",
        "DMA Mode"
      ]),
    },
    {
      id: 'compiler-design',
      name: 'Compiler Design',
      topics: createTopics([
        "Lexical Analysis",
        "Parsing",
        "Syntax-Directed Translation",
        "Runtime Environment",
        "Intermediate Code Generation"
      ]),
    },
  ],
}
];
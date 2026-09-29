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
  },

  {
  id: 'GATE-CS',
  name: 'GATE Computer Science and Information Technology',
  subjects: [
    // --- SECTION 1: GENERAL APTITUDE ---
    {
      id: 'verbal-aptitude',
      name: 'Verbal Aptitude',
      topics: createTopics([
        "Basic English Grammar",
        "Vocabulary",
        "Reading Comprehension",
        "Narrative Sequencing",
        "Word Groups & Idioms",
        "Sentence Completion",
        "Verbal Analogies"
      ]),
    },
    {
      id: 'quantitative-aptitude',
      name: 'Quantitative Aptitude',
      topics: createTopics([
        "Data Interpretation (Graphs, Tables, Charts)",
        "2D & 3D Geometry",
        "Mensuration",
        "Elementary Statistics",
        "Probability",
        "Numerical Computation",
        "Numerical Estimation",
        "Ratio & Proportion",
        "Powers, Exponents & Logarithms"
      ]),
    },
    {
      id: 'analytical-spatial-aptitude',
      name: 'Analytical & Spatial Aptitude',
      topics: createTopics([
        "Logic Deduction & Induction",
        "Numerical Relations & Reasoning",
        "Analogy",
        "Transformation of Shapes (Translation, Rotation, Scaling)",
        "Mirroring & Assembling",
        "Paper Folding & Cutting",
        "Patterns in 2D & 3D"
      ]),
    },

    // --- SECTION 2: ENGINEERING MATHEMATICS ---
    {
      id: 'discrete-mathematics',
      name: 'Discrete Mathematics',
      topics: createTopics([
        "Propositional Logic",
        "First-Order Logic",
        "Sets, Relations, & Functions",
        "Partial Orders & Lattices",
        "Monoids & Groups",
        "Graph Connectivity, Matching, & Coloring",
        "Combinatorics (Counting)",
        "Recurrence Relations",
        "Generating Functions"
      ]),
    },
    {
      id: 'linear-algebra',
      name: 'Linear Algebra',
      topics: createTopics([
        "Matrices & Determinants",
        "System of Linear Equations",
        "Eigenvalues & Eigenvectors",
        "LU Decomposition"
      ]),
    },
    {
      id: 'calculus',
      name: 'Calculus',
      topics: createTopics([
        "Limits, Continuity & Differentiability",
        "Maxima & Minima",
        "Mean Value Theorem",
        "Integration"
      ]),
    },
    {
      id: 'probability-statistics',
      name: 'Probability & Statistics',
      topics: createTopics([
        "Random Variables",
        "Uniform, Normal, Exponential Distributions",
        "Poisson & Binomial Distributions",
        "Mean, Median, Mode & Standard Deviation",
        "Conditional Probability",
        "Bayes Theorem"
      ]),
    },

    // --- SECTION 3: COMPUTER SCIENCE CORE ---
    {
      id: 'digital-logic',
      name: 'Digital Logic',
      topics: createTopics([
        "Boolean Algebra",
        "Combinational Circuits",
        "Sequential Circuits",
        "Minimization",
        "Number Representations",
        "Computer Arithmetic (Fixed Point & Floating Point)"
      ]),
    },
    {
      id: 'computer-organization-architecture',
      name: 'Computer Organization & Architecture',
      topics: createTopics([
        "Machine Instructions",
        "Addressing Modes",
        "ALU, Data Path & Control Unit",
        "Instruction Pipelining",
        "Pipeline Hazards",
        "Memory Hierarchy",
        "Cache Memory",
        "Main Memory",
        "Secondary Storage",
        "I/O Interface",
        "Interrupt Mode",
        "DMA Mode"
      ]),
    },
    {
      id: 'programming-data-structures',
      name: 'Programming & Data Structures',
      topics: createTopics([
        "Programming in C",
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
      id: 'algorithms',
      name: 'Algorithms',
      topics: createTopics([
        "Searching",
        "Sorting",
        "Hashing",
        "Asymptotic Worst-Case Time & Space Complexity",
        "Greedy Method",
        "Dynamic Programming",
        "Divide & Conquer",
        "Graph Traversals",
        "Minimum Spanning Tree",
        "Shortest Paths"
      ]),
    },
    {
      id: 'theory-of-computation',
      name: 'Theory of Computation',
      topics: createTopics([
        "Regular Expressions",
        "Finite Automata",
        "Context-Free Grammars",
        "Pushdown Automata",
        "Regular & Context-Free Languages",
        "Pumping Lemma",
        "Turing Machines",
        "Undecidability"
      ]),
    },
    {
      id: 'compiler-design',
      name: 'Compiler Design',
      topics: createTopics([
        "Lexical Analysis",
        "Parsing",
        "Syntax-Directed Translation",
        "Runtime Environments",
        "Intermediate Code Generation",
        "Local Optimization",
        "Data Flow Analyses (Constant Propagation, Liveness Analysis, CSE)"
      ]),
    },
    {
      id: 'operating-system',
      name: 'Operating System',
      topics: createTopics([
        "System Calls",
        "Processes",
        "Threads",
        "Inter-Process Communication (IPC)",
        "Concurrency & Synchronization",
        "Deadlock",
        "CPU Scheduling",
        "I/O Scheduling",
        "Memory Management",
        "Virtual Memory",
        "File Systems"
      ]),
    },
    {
      id: 'databases',
      name: 'Databases',
      topics: createTopics([
        "ER Model",
        "Relational Model",
        "Relational Algebra",
        "Tuple Calculus",
        "SQL",
        "Integrity Constraints",
        "Normal Forms",
        "File Organization",
        "Indexing (B and B+ Trees)",
        "Transactions",
        "Concurrency Control"
      ]),
    },
    {
      id: 'computer-networks',
      name: 'Computer Networks',
      topics: createTopics([
        "Concept of Layering (OSI & TCP/IP)",
        "Switching (Packet, Circuit, Virtual Circuit)",
        "Data Link Layer (Framing, Error Detection, MAC)",
        "Ethernet Bridging",
        "Routing Protocols (Shortest Path, Flooding, Distance Vector, Link State)",
        "Fragmentation & IP Addressing",
        "IPv4 & CIDR Notation",
        "IP Support Protocols (ARP, DHCP, ICMP)",
        "Network Address Translation (NAT)",
        "Transport Layer (Flow & Congestion Control)",
        "UDP & TCP",
        "Sockets",
        "Application Layer Protocols (DNS, SMTP, HTTP, FTP, Email)",
        "Basics of Wi-Fi"
      ]),
    },
  ],
}

];
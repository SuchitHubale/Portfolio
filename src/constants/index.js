export const navLinks = [
    {
      name: "Home",
      link: "#hero",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    
  ];
  
export const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concept", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concept", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
export const counterItems = [
    { 
      value: "suchithubale@gmail.com",
      icon: "FaEnvelope",
      label: "Copy Email",
      action: "copy",
      subtext: "Click to copy email address"
    },
    { 
      value: "/resume.pdf",
      icon: "FaFileAlt",
      label: "View Resume",
      action: "open",
      subtext: "Opens in new tab"
    },
    { value: 5, suffix: "+", label: "Completed Projects" },
    { value: 175, suffix: "+", label: "Solve LeetCode Problems" },
    
  ];
  
export const logoIconsList = [
    {
      name: "company-logo-4",
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      name: "company-logo-9",
      imgPath: "/images/logos/company-logo-9.png",
    },

  ];
  
export const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
export const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
export const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
      category: "frontend"
    },
    {
      name: "Machine Learning",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
      category: "backend"
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
      category: "backend"
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
      category: "frontend"
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
      category: "tools"
    },
  ];
  
export const expCards = [
    {
      review: "I thoroughly enjoyed working on the AI Fusion event website. I focused on building a fast, responsive, and visually appealing platform that made event registration and management easy for users.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the AI Fusion event website.",
        "Integrated Firebase and Razorpay for real-time data and secure payments.",
        "Optimized the website for speed, scalability, and responsiveness.",
      ],
    },
    {
      "review": "Built a federated learning system for fraud detection, enabling secure, distributed model training across multiple clients with real-time monitoring.",
      "imgPath": "/images/exp2.png",
      "logoPath": "/images/logo2.png",
      "title": "Full Stack ML Engineer",
      "date": "Dec 2023 - Feb 2024",
      "responsibilities": [
        "Developed server and client apps for federated learning using PyTorch and Flask.",
        "Implemented secure model aggregation and privacy-preserving training.",
        "Created a Streamlit dashboard for real-time monitoring and analytics."
      ]
    },
    {
      review: "Their work on the Mock Interview Prep app delivered a robust, user-friendly platform for technical interview practice, integrating real-time feedback and modern authentication.",
      imgPath: "/images/logo3.svg", 
      logoPath: "/images/logo3.svg", 
      title: "Full Stack Developer",
      date: "Jan 2024 - Present",
      responsibilities: [
        "Built a full-stack web app for mock technical interviews using Next.js, React, and Firebase.",
        "Implemented secure authentication, user profiles, and real-time interview feedback.",
        "Integrated AI-driven question generation and reusable UI components."
      ],
    },
  ];
  
export const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
export const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
export const projects = [
  {
  "image": "/public/images/project1.png",
  "title": "Mock Interview Prep Platform",
  "subtitle": "A full-stack web application for simulating technical and behavioral interviews with AI-driven feedback and analytics.",
  "handle": "Personal/Portfolio Project",
  "borderColor": "#2563EB",
  "gradient": "linear-gradient(135deg,#2563EB,#38BDF8)",
  "url": "https://github.com/SuchitHubale/ssh-mock-interview-prep",
  "technologies": [
    "Next.js",
    "React",
    "TypeScript",
    "Firebase",
    "Tailwind CSS",
    "Vercel",
    "VAPI",
    "Day.js"
  ],
  "about": "SSH Mock Interview Prep is a modern web platform that allows users to practice technical, behavioral, and mixed interviews in a realistic environment. Users can select roles, tech stacks, and interview types, receive AI-generated questions, and get instant feedback and scoring. The platform supports user authentication, profile management, and detailed analytics to help users track their progress.",
  "problemStatement": "Preparing for technical interviews can be daunting due to lack of realistic practice and actionable feedback. The goal was to create an interactive platform where users can simulate real interview scenarios, receive AI-driven feedback, and monitor their improvement over time.",
  "keyChallenges": [
    "Designing a flexible interview flow for multiple types (technical, behavioral, mixed)",
    "Integrating AI for dynamic question generation and feedback",
    "Implementing real-time feedback and scoring",
    "Ensuring secure authentication and user data management",
    "Building a responsive and intuitive UI/UX"
  ],
  "role": "Full Stack Developer",
  "category": "Web Application / EdTech",
  "featured": true,
  "duration": "Mar 2024 - Apr 2024",
  "liveDemo": "https://ssh-mock-interview-prep.vercel.app",
  "sourceCode": "https://github.com/yourusername/ssh-mock-interview-prep",
  "keyFeatures": [
    "Role-based interview simulation (Technical, Behavioral, Mixed)",
    "AI-generated questions and feedback using VAPI",
    "User authentication and profile management (Firebase)",
    "Interview analytics and scoring dashboard",
    "Resume upload and tech stack selection",
    "Responsive design with Tailwind CSS",
    "Real-time feedback and final assessment",
    "Interview history and feedback review"
  ],
  "technicalImplementation": "The platform is built with Next.js and React for the frontend, using TypeScript for type safety. Firebase handles authentication and data storage. The interview logic leverages VAPI for AI-driven question generation and feedback. Tailwind CSS is used for styling, and Day.js for date formatting. The app is deployed on Vercel for scalability and performance.",
  "projectTimeline": "The project was completed over two months: the first month focused on core interview logic and authentication, while the second month was dedicated to AI integration, analytics, and UI/UX refinement.",
  "systemArchitecture": {
    "overview": "Full-stack web application with serverless backend and AI integration",
    "frontend": "Next.js (React, TypeScript), Tailwind CSS",
    "backend": "Firebase (Authentication, Firestore), VAPI (AI services)",
    "aiIntegration": "VAPI for question generation and feedback",
    "dataStorage": "Firestore for user data, interviews, and feedback",
    "authentication": "Firebase Auth (email/password, OAuth)",
    "monitoring": "Interview analytics and scoring dashboard",
    "deployment": "Vercel (CI/CD, serverless functions)",
    "diagram": `
User <=> Next.js Frontend
        |
        v
Firebase Auth <=> Firestore <=> VAPI (AI)
        |
        v
Interview Logic & Feedback
        |
        v
Analytics Dashboard
    `
  },
  "milestones": [
    {
      "title": "Core Platform Development",
      "description": "Set up Next.js project, implemented authentication, and designed the interview flow.",
      "date": "Week 1-2",
      "status": "completed",
      "icon": "system"
    },
    {
      "title": "AI Integration & Feedback",
      "description": "Integrated VAPI for AI-driven question generation and feedback scoring.",
      "date": "Week 3-4",
      "status": "completed",
      "icon": "ai"
    },
    {
      "title": "Analytics & Profile Features",
      "description": "Built analytics dashboard, profile management, and interview history features.",
      "date": "Week 5-6",
      "status": "completed",
      "icon": "dashboard"
    },
    {
      "title": "UI/UX & Deployment",
      "description": "Refined UI/UX with Tailwind CSS and deployed the app to Vercel.",
      "date": "Week 7-8",
      "status": "completed",
      "icon": "deploy"
    }
  ]
},
  {
    "image": "/public/images/project2.png",
    "title": "Fraud Detection System",
    "subtitle": "A distributed machine learning system for fraud detection using federated learning with multiple clients and a central server.",
    "handle": "Academic/Research Project",
    "borderColor": "#4CAF50",
    "gradient": "linear-gradient(135deg,#4CAF50,#2196F3)",
    "url": "https://github.com/yourusername/federated-learning-fraud-detection",
    "technologies": ["Python", "PyTorch", "Flask", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Flower"],
    "about": "This project implements a federated learning system for fraud detection in financial transactions. It enables multiple clients to collaboratively train a machine learning model without sharing their raw data, addressing privacy concerns while improving model performance through distributed learning.",
    "problemStatement": "Traditional centralized machine learning approaches require sharing sensitive financial data, which poses significant privacy and security risks. The goal was to create a federated learning system that allows multiple financial institutions to collaboratively train a fraud detection model while keeping their data local and private.",
    "keyChallenges": [
      "Implementing secure weight aggregation without data sharing",
      "Managing distributed training across multiple clients",
      "Ensuring model convergence in federated settings",
      "Handling heterogeneous data distributions across clients",
      "Building a real-time monitoring and prediction system"
    ],
    "role": "Full Stack ML Engineer",
    "category": "Machine Learning / Distributed Systems",
    "featured": true,
    "duration": "Dec 2023 - Feb 2024",
    "liveDemo": "http://localhost:8501",
    "sourceCode": "https://github.com/yourusername/federated-learning-fraud-detection",
    "keyFeatures": [
      "Federated learning with multiple clients",
      "Real-time model aggregation using FedAvg algorithm",
      "Interactive Streamlit dashboard for monitoring",
      "RESTful API for model serving and predictions",
      "Automatic model versioning and round tracking",
      "Real-time metrics collection and visualization",
      "Custom fraud prediction interface",
      "Secure weight sharing without data exposure"
    ],
    "technicalImplementation": "The system consists of a Flask-based central server that coordinates federated learning rounds, multiple PyTorch-based clients that train local models on their private data, and a Streamlit dashboard for real-time monitoring. The architecture uses the Federated Averaging (FedAvg) algorithm to aggregate model weights from participating clients. Each client maintains a local neural network model with the same architecture (3-layer feedforward network) and trains it on their local financial transaction data. The server aggregates the model weights and distributes the updated global model back to clients for the next round.",
    "projectTimeline": "The project was developed over three months, with the first month dedicated to research and architecture design, the second month to implementing the core federated learning system, and the final month to building the dashboard and testing the complete system. The implementation involved setting up the server-client communication protocol, implementing the FedAvg aggregation algorithm, creating the neural network architecture, and building the monitoring dashboard.",
    "systemArchitecture": {
      "overview": "Distributed machine learning system with federated learning capabilities",
      "centralServer": "Flask-based server with RESTful API",
      "clients": "Multiple PyTorch-based training clients",
      "algorithm": "Federated Averaging (FedAvg)",
      "modelArchitecture": "3-layer feedforward neural network",
      "communication": "HTTP/REST for weight sharing",
      "monitoring": "Streamlit dashboard for real-time visualization",
      "dataPrivacy": "Local data training, only weights shared",
      "deployment": "Docker containers for scalability",
      "diagram": `
Central Server (Flask) <=> Client 1 (PyTorch)
                |              <=> Client 2 (PyTorch)
                |              <=> Client 3 (PyTorch)
                v
        Streamlit Dashboard
                |
                v
        Real-time Monitoring
                |
                v
        Model Performance Metrics
      `
    },
    "milestones": [
      {
        "title": "Research & Architecture Design",
        "description": "In-depth research on federated learning algorithms, system architecture planning, and technology stack selection.",
        "date": "Week 1-4",
        "status": "completed",
        "icon": "research"
      },
      {
        "title": "Core System Development",
        "description": "Implementation of the central server, client models, and federated learning communication protocol.",
        "date": "Week 5-8",
        "status": "completed",
        "icon": "system"
      },
      {
        "title": "Dashboard & Monitoring",
        "description": "Building the Streamlit dashboard for real-time monitoring and model performance visualization.",
        "date": "Week 9-10",
        "status": "completed",
        "icon": "dashboard"
      },
      {
        "title": "Testing & Optimization",
        "description": "Comprehensive testing of the federated learning system, performance optimization, and final deployment.",
        "date": "Week 11-12",
        "status": "completed",
        "icon": "test"
      }
    ]
  },
  {
    "image": "/public/images/project2.png",
    "title": "AI Fusion Event Platform",
    "subtitle": "A comprehensive event management platform for the Department of AIML featuring technical competitions, gaming events, and seamless registration with payment integration.",
    "handle": "Academic Project",
    "borderColor": "#6366F1",
    "gradient": "linear-gradient(135deg,#6366F1,#8B5CF6)",
    "url": "https://github.com/yourusername/ai-fusion-event",
    "technologies": ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Razorpay", "Express.js", "MongoDB", "Three.js", "React Three Fiber"],
    "about": "AI Fusion is a cutting-edge event management platform designed specifically for the Department of AIML at Rajaram Institute of Technology. The platform showcases a modern, immersive web experience featuring technical competitions like coding challenges and AI hackathons, alongside gaming events like BGMI and Free Fire tournaments. The platform integrates seamless registration, payment processing, and admin management capabilities.",
    "problemStatement": "The Department of AIML needed a modern, scalable platform to manage their annual AI Fusion event featuring multiple competitions and gaming tournaments. The platform needed to handle event registrations, payment processing, participant management, and provide an engaging user experience with real-time updates and admin controls.",
    "keyChallenges": [
      "Implementing secure payment processing with Razorpay integration",
      "Creating an immersive UI with 3D effects and animations",
      "Managing real-time event registrations and data synchronization",
      "Building a responsive admin dashboard with data export capabilities",
      "Ensuring seamless user experience across different devices"
    ],
    "role": "Full Stack Developer",
    "category": "Event Management Platform",
    "featured": true,
    "duration": "Oct 2024 - Present",
    "liveDemo": "https://aifusion2k24.web.app",
    "sourceCode": "https://github.com/yourusername/ai-fusion-event",
    "keyFeatures": [
      "Immersive hero section with video background and 3D animations",
      "Event catalog with detailed competition information",
      "Seamless registration form with payment integration",
      "Real-time data synchronization with Firebase Firestore",
      "Admin dashboard with registration analytics and data export",
      "Responsive design with Tailwind CSS and custom animations",
      "Newsletter subscription with Google Sheets integration",
      "Multi-event management with different entry fees and team sizes"
    ],
    "technicalImplementation": "The platform is built using React 18 with modern hooks and functional components. Firebase serves as the backend with Firestore for real-time data management and Firebase Hosting for deployment. The UI is crafted with Tailwind CSS and enhanced with Framer Motion for smooth animations. Payment processing is handled through Razorpay integration, while the admin dashboard includes Excel export functionality using XLSX library. The platform features custom fonts (Rajdhani, Inter, Nebula) and includes 3D effects using Three.js and React Three Fiber.",
    "projectTimeline": "The project was developed as an ongoing academic initiative for the Department of AIML. The initial phase focused on core functionality including event management and registration. The second phase added payment integration and admin features. The current phase involves continuous improvements and feature enhancements based on user feedback and event requirements.",
    "systemArchitecture": {
      "overview": "Modern event management platform with real-time capabilities and payment integration",
      "frontend": "React 18, Tailwind CSS, Framer Motion, Three.js",
      "backend": "Firebase (Firestore, Functions, Hosting)",
      "database": "Firebase Firestore (NoSQL)",
      "authentication": "Firebase Authentication",
      "payment": "Razorpay Payment Gateway",
      "storage": "Firebase Storage (Event assets)",
      "deployment": "Firebase Hosting",
      "realTime": "Firebase Firestore real-time listeners",
      "diagram": `
React Frontend <=> Firebase Services
        |              |
        v              v
    Framer Motion   Firestore (Data)
        |              |
        v              v
    Three.js 3D      Authentication
        |              |
        v              v
    Razorpay API     Real-time Updates
        |              |
        v              v
    Payment Processing  Admin Dashboard
      `
    },
    "milestones": [
      {
        "title": "Initial Development Phase",
        "description": "Core functionality development including event management, registration system, and basic UI implementation.",
        "date": "Oct 2024 - Nov 2024",
        "status": "completed",
        "icon": "development"
      },
      {
        "title": "Payment Integration",
        "description": "Integration of Razorpay payment gateway and implementation of secure payment processing.",
        "date": "Nov 2024 - Dec 2024",
        "status": "completed",
        "icon": "payment"
      },
      {
        "title": "Admin Dashboard",
        "description": "Building comprehensive admin dashboard with analytics, data export, and event management capabilities.",
        "date": "Dec 2024 - Jan 2025",
        "status": "completed",
        "icon": "admin"
      },
      {
        "title": "Continuous Improvement",
        "description": "Ongoing feature enhancements, performance optimization, and user experience improvements based on feedback.",
        "date": "Jan 2025 - Present",
        "status": "in-progress",
        "icon": "improvement"
      }
    ],
    "events": [
      {
        "name": "Decode",
        "type": "Technical",
        "description": "Coding competition with MCQ and programming rounds",
        "entryFee": "₹80",
        "participants": "Individual"
      },
      {
        "name": "BGMI",
        "type": "Gaming",
        "description": "Battle Royale tournament with squad mode",
        "entryFee": "₹350",
        "participants": "4 members per squad"
      },
      {
        "name": "Free Fire",
        "type": "Gaming", 
        "description": "Free Fire Max Squad Showdown Tournament",
        "entryFee": "₹350",
        "participants": "4 members per team"
      },
      {
        "name": "AI Hackathon",
        "type": "Technical",
        "description": "Innovation challenge with mentor support",
        "entryFee": "₹300",
        "participants": "4 members per team"
      },
      {
        "name": "IPL Auction",
        "type": "Non-Technical",
        "description": "Virtual IPL team building auction game",
        "entryFee": "₹250",
        "participants": "4 members per team"
      },
      {
        "name": "Secret Battle",
        "type": "Non-Technical",
        "description": "Mystery challenge with clues and surprises",
        "entryFee": "₹250",
        "participants": "4 members per team"
      }
    ],
    "deployment": {
      "platform": "Firebase Hosting",
      "site": "aifusion2k24",
      "database": "Firebase Firestore",
      "storage": "Firebase Storage",
      "authentication": "Firebase Auth"
    },
    "performance": {
      "lazyLoading": "Implemented for components and images",
      "codeSplitting": "Used React.lazy for route-based splitting",
      "optimization": "Tailwind CSS for optimized styles",
      "animations": "Framer Motion for 60fps animations"
    }
  },
  {
    "image": "/images/projects/patent-search-engine.jpg",
    "title": "BERT-Powered Patent Search Engine",
    "subtitle": "An intelligent patent search engine using BERT-based semantic search for comprehensive patent discovery and analysis.",
    "handle": "Academic Project",
    "borderColor": "#4A90E2",
    "gradient": "linear-gradient(135deg,#4A90E2,#2C3E50)",
    "url": "https://github.com/AnishmMore/patent_search",
    "technologies": ["Python", "Flask", "BERT", "SentenceTransformers", "FAISS", "Scrapy", "Pandas", "Bootstrap", "HTML/CSS"],
    "about": "This project is an advanced patent search engine that leverages BERT-based semantic search to provide intelligent patent discovery capabilities. The system scrapes patent data from Google Patents, generates semantic embeddings using BERT, indexes them using FAISS for efficient similarity search, and provides a web interface for users to search through thousands of patent documents with high semantic relevance.",
    "problemStatement": "The goal was to create a sophisticated patent search system that could understand the semantic meaning of search queries and find relevant patents even when they use different terminology. Traditional keyword-based search systems often miss relevant patents that use synonyms or different technical terms. This project addresses this limitation by implementing semantic search using BERT embeddings to understand context and meaning.",
    "keyChallenges": [
      "Implementing efficient semantic search using BERT embeddings and FAISS",
      "Scaling the system to handle large patent datasets (100,000+ patents)",
      "Optimizing BERT model performance for real-time search",
      "Designing an intuitive web interface for semantic search results",
      "Managing memory usage with large embedding vectors"
    ],
    "role": "Full Stack Developer & Machine Learning Engineer",
    "category": "AI-Powered Search Engine",
    "featured": true,
    "duration": "3 months",
    "liveDemo": "http://127.0.0.1:8080",
    "sourceCode": "https://github.com/AnishmMore/patent_search",
    "keyFeatures": [
      "BERT-based semantic search using 'all-MiniLM-L6-v2' model",
      "FAISS vector indexing for efficient similarity search",
      "Web scraping of patent data from Google Patents using Scrapy",
      "Semantic understanding of search queries and patent content",
      "Responsive web interface with Bootstrap styling",
      "Comprehensive patent metadata display (title, abstract, inventors, publication date)",
      "Direct links to original patent documents",
      "Scalable architecture supporting 100,000+ patent documents",
      "Real-time semantic similarity scoring"
    ],
    "technicalImplementation": "The system is built using Flask as the web framework with a focus on semantic search capabilities. The backend uses the 'all-MiniLM-L6-v2' BERT model from SentenceTransformers to generate 384-dimensional embeddings for both search queries and patent documents. These embeddings are indexed using FAISS for efficient similarity search and retrieval. The patent data is scraped using a custom Scrapy spider that extracts comprehensive metadata from Google Patents. The frontend is built with HTML templates and Bootstrap for responsive design. The system processes over 100,000 patent documents and provides semantic search with sub-second response times.",
    "projectTimeline": "The project was developed over three months with the first month dedicated to data collection and scraping using Scrapy, the second month focused on implementing the BERT semantic search (embedding generation and FAISS indexing), and the final month was spent on web interface development, testing, and optimization. The team consisted of 5 members working collaboratively on different components of the system.",
    "systemArchitecture": {
      "overview": "AI-powered semantic search system with BERT embeddings and vector indexing",
      "frontend": "Flask templates, Bootstrap, HTML/CSS",
      "backend": "Flask web framework with RESTful API",
      "aiModel": "BERT (all-MiniLM-L6-v2) for embeddings",
      "vectorIndex": "FAISS for efficient similarity search",
      "dataCollection": "Scrapy spider for Google Patents",
      "database": "In-memory storage with FAISS index",
      "searchAlgorithm": "Cosine similarity with semantic embeddings",
      "deployment": "Flask development server",
      "diagram": `
User Query <=> Flask App <=> BERT Model
                |              |
                v              v
        FAISS Index      Embedding Generation
                |              |
                v              v
        Similarity Search  Patent Documents
                |              |
                v              v
        Search Results     Metadata Display
      `
    },
    "milestones": [
      {
        "title": "Data Collection & Scraping",
        "description": "Development of Scrapy spider to collect patent data from Google Patents, processing 100,000+ documents.",
        "date": "Month 1",
        "status": "completed",
        "icon": "data"
      },
      {
        "title": "BERT Semantic Search",
        "description": "Implementation of BERT embeddings generation and FAISS indexing for efficient semantic search.",
        "date": "Month 2",
        "status": "completed",
        "icon": "ai"
      },
      {
        "title": "Web Interface & Testing",
        "description": "Development of responsive web interface, comprehensive testing, and system optimization.",
        "date": "Month 3",
        "status": "completed",
        "icon": "web"
      }
    ],
    "teamMembers": [
      "Anish More",
      "Akash Bilgi", 
      "Amrutha Alewoor",
      "Mrunali Lachake",
      "Kaushik Daiv"
    ],
    "dataScale": "100,000+ patent documents",
    "searchCapabilities": [
      "Semantic similarity search using BERT embeddings",
      "Context-aware query understanding",
      "Real-time search results with semantic relevance scoring",
      "Cross-lingual patent support through BERT's multilingual capabilities",
      "Publication date filtering and sorting",
      "Intelligent matching beyond exact keyword matches"
    ],
    "performanceMetrics": {
      "searchResponseTime": "< 1 second",
      "indexSize": "100,000+ documents",
      "embeddingDimension": "384 (BERT model)",
      "searchAccuracy": "High semantic relevance",
      "modelType": "all-MiniLM-L6-v2"
    },
    "aiComponents": {
      "bertModel": "sentence-transformers/all-MiniLM-L6-v2",
      "embeddingDimension": 384,
      "vectorIndex": "FAISS",
      "similarityMetric": "Cosine similarity",
      "searchResults": 10
    }
  },
  {
  "image": "/public/images/project1.png",
  "title": "Code Snippets Manager",
  "subtitle": "A modern web application for managing and editing code snippets with a beautiful Monaco editor integration.",
  "handle": "Personal/Portfolio Project",
  "borderColor": "#6366F1",
  "gradient": "linear-gradient(135deg,#6366F1,#38BDF8)",
  "url": "https://github.com/yourusername/snippets",
  "technologies": [
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "Tailwind CSS",
    "Radix UI",
    "Monaco Editor"
  ],
  "about": "Code Snippets Manager is a full-stack web application that allows users to create, edit, and organize code snippets in a visually appealing and efficient environment. Featuring Monaco Editor for a professional code editing experience, the app supports real-time editing, dark mode, and a modern UI built with Tailwind CSS. Data is managed with Prisma ORM and stored in a SQLite database.",
  "problemStatement": "Developers often struggle to keep their code snippets organized and accessible. This project aims to provide a seamless, beautiful, and efficient way to manage code snippets, making it easy to create, edit, and retrieve code for reuse.",
  "keyChallenges": [
    "Integrating Monaco Editor for a seamless code editing experience",
    "Designing a modern, responsive UI with Tailwind CSS and Radix UI",
    "Implementing type-safe server actions and database operations with Prisma",
    "Ensuring smooth user experience for creating, editing, and deleting snippets",
    "Managing state and form validation in a type-safe way"
  ],
  "role": "Full Stack Developer",
  "category": "Web Application / Developer Tools",
  "featured": true,
  "duration": "Mar 2024 - Apr 2024",
  "liveDemo": "https://snippets-demo.vercel.app",
  "sourceCode": "https://github.com/yourusername/snippets",
  "keyFeatures": [
    "Create, edit, and delete code snippets",
    "Monaco Editor integration for professional code editing",
    "Modern, responsive UI with Tailwind CSS and Radix UI",
    "Type-safe development with TypeScript",
    "Database integration with Prisma ORM (SQLite)",
    "Dark theme support",
    "Real-time code editing and saving",
    "Form validation and error handling"
  ],
  "technicalImplementation": "The application is built with Next.js and React for the frontend, using TypeScript for type safety. Prisma ORM manages the SQLite database, handling all CRUD operations for code snippets. The Monaco Editor provides a rich code editing experience. Tailwind CSS and Radix UI are used for styling and UI components. The app is structured with clear separation of concerns: server actions, components, and utility libraries.",
  "projectTimeline": "The project was completed over two months: the first month focused on core CRUD logic and UI design, while the second month was dedicated to editor integration, form validation, and UX refinement.",
  "systemArchitecture": {
    "overview": "Full-stack web application with server-side rendering and database integration",
    "frontend": "Next.js (React, TypeScript), Tailwind CSS, Radix UI, Monaco Editor",
    "backend": "Prisma ORM (SQLite)",
    "dataStorage": "SQLite database managed by Prisma",
    "authentication": "None (public demo, can be extended)",
    "monitoring": "N/A (can be added)",
    "deployment": "Vercel (CI/CD, serverless functions)",
    "diagram": "User <=> Next.js Frontend <=> Prisma ORM <=> SQLite Database"
  },
  "milestones": [
    {
      "title": "Core Platform Development",
      "description": "Set up Next.js project, implemented CRUD operations for snippets, and designed the main UI.",
      "date": "Week 1-2",
      "status": "completed",
      "icon": "system"
    },
    {
      "title": "Editor Integration & Validation",
      "description": "Integrated Monaco Editor and implemented robust form validation.",
      "date": "Week 3-4",
      "status": "completed",
      "icon": "ai"
    },
    {
      "title": "UI/UX & Styling",
      "description": "Refined UI/UX with Tailwind CSS, Radix UI, and added dark mode support.",
      "date": "Week 5-6",
      "status": "completed",
      "icon": "dashboard"
    },
    {
      "title": "Deployment & Documentation",
      "description": "Deployed the app to Vercel and wrote comprehensive documentation.",
      "date": "Week 7-8",
      "status": "completed",
      "icon": "deploy"
    }
  ]
},
  {
    image: "/images/projects/project5.jpg",
    title: "AI Chat Application",
    subtitle: "Real-time chat application with AI integration. Built with React and Socket.io, featuring natural language processing capabilities.",
    handle: "Client Project",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg,#06B6D4,#000)",
    url: "https://github.com/yourusername/ai-chat",
    technologies: ["React", "OpenAI API", "Socket.io", "Tailwind"],
    about: "This AI chat application allows users to interact with an AI assistant in real-time. It is built using React and Socket.io, and integrates with the OpenAI API to provide natural language processing capabilities.",
    problemStatement: "The goal was to create a chat application that could provide users with a seamless and engaging experience, while also leveraging the power of AI to enhance the interaction.",
    keyChallenges: ["Integrating with the OpenAI API", "Implementing real-time chat functionality", "Creating a responsive and intuitive user interface"],
    role: "Full Stack Developer",
    category: "Web App",
    featured: true,
    duration: "Aug 2023 - Sep 2023",
    liveDemo: "https://your-ai-chat-app-demo.com",
    sourceCode: "https://github.com/yourusername/ai-chat",
    keyFeatures: ["Real-time chat", "AI assistant integration", "Natural language processing", "User authentication", "Responsive design"],
    technicalImplementation: "The app is built using React for the frontend, Socket.io for real-time communication, and the OpenAI API for natural language processing.",
    projectTimeline: "The project was completed in one month, with the first two weeks dedicated to development and the second two weeks to testing and refinement.",
    systemArchitecture: {
      "overview": "Real-time chat application with AI integration",
      "frontend": "React with Tailwind CSS",
      "backend": "Node.js with Socket.io",
      "ai": "OpenAI API for natural language processing",
      "realTime": "Socket.io for real-time messaging",
      "deployment": "Cloud hosting",
      "diagram": `
React Frontend <=> Socket.io Server <=> OpenAI API
        |              |              |
        v              v              v
    User Interface  Real-time Chat  AI Responses
        |              |              |
        v              v              v
    Message Display  Event Handling  NLP Processing
      `
    },
    milestones: [
      {
        "title": "Backend Development",
        "description": "Implementation of Socket.io server and OpenAI API integration for real-time chat functionality.",
        "date": "Week 1-2",
        "status": "completed",
        "icon": "backend"
      },
      {
        "title": "Frontend & Testing",
        "description": "Building React frontend, implementing real-time chat interface, and comprehensive testing.",
        "date": "Week 3-4",
        "status": "completed",
        "icon": "frontend"
      }
    ]
  },
  
];


// src/data/projects.js
export const projects = [
  {
    id: 'quick-cart',
    index: '01',
    title: 'Quick Cart',
    category: 'MERN E-Commerce',
    year: 'Personal Project',
    visual: 'ecommerce',
    tagline:
      'A full-stack grocery e-commerce platform built on the MERN stack covering browsing, authentication, cart management and order placement.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: [
      'User authentication & session handling',
      'Product catalog for browsing grocery items',
      'Cart management — add, update, remove',
      'Order placement flow from cart to checkout',
      'Responsive UI across screen sizes',
      'Optimized MongoDB read/write operations',
    ],
    links: {
      github: 'https://github.com/Sathishraan',
      live: null,
    },
    caseStudy: {
      overview:
        'Quick Cart is a personal full-stack project: a grocery e-commerce platform covering the core shopping flow from browsing to checkout, built end-to-end on the MERN stack.',
      problem:
        'Grocery shopping flows need a reliable path from product discovery to order confirmation, with cart state, authentication and database operations all staying consistent as data grows.',
      solution:
        'Built a component-based React.js front end backed by a RESTful Express/Node.js API, with MongoDB handling product, user, cart and order data.',
      architecture:
        'React.js SPA → REST API (Express.js on Node.js) → MongoDB. Authentication and session handling guard account access; cart and order state are persisted through the API layer.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      implementation: [
        'Implemented user authentication and session handling to support secure account access.',
        'Developed a product catalog module for browsing and viewing grocery items.',
        'Built cart management functionality, including adding, updating and removing items.',
        'Implemented the order placement flow so users can complete purchases from cart to checkout.',
        'Designed a responsive UI so the app works smoothly across different screen sizes.',
        'Optimized real-time database read/write operations in MongoDB to keep the app performant and scalable as data grew.',
      ],
    },
  },
  {
    id: 'chat-app',
    index: '02',
    title: 'Real-Time Chat Application',
    category: 'Real-Time Application',
    year: 'Personal Project',
    visual: 'chat',
    tagline:
      'A real-time messaging application built using the MERN stack and Socket.IO for instant user-to-user communication.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'JWT'],
    features: [
      'JWT-based authentication',
      'Instant bidirectional messaging',
      'Message persistence in MongoDB',
      'Chat history across sessions',
      'Responsive real-time interface',
    ],
    links: {
      github: 'https://github.com/Sathishraan',
      live: null,
    },
    caseStudy: {
      overview:
        'A personal full-stack project: a real-time messaging application focused on instant, secure user-to-user communication.',
      problem:
        'Traditional request/response messaging cannot deliver instant delivery, and chat sessions need to stay secure and recoverable across sessions.',
      solution:
        'Used Socket.IO on top of the MERN stack for bidirectional real-time transport, with JWT securing login and chat sessions, and MongoDB persisting accounts and message history.',
      architecture:
        'React.js client ↔ Socket.IO channel ↔ Node.js/Express.js server → MongoDB for users and message history. JWT guards authentication and session access.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'JWT'],
      implementation: [
        'Built a real-time chat platform using the MERN stack with Socket.IO for instant, bidirectional user-to-user messaging.',
        'Implemented JWT-based authentication to secure user login and protect chat sessions.',
        'Used MongoDB to persist user accounts and message history, enabling chat history to load across sessions.',
        'Structured the front end in React.js for a responsive, real-time chat interface.',
      ],
    },
  },
  {
    id: 'school-erp',
    index: '03',
    title: 'School ERP',
    category: 'Production / Enterprise System',
    year: 'Oct 2025 — Present',
    visual: 'erp',
    tagline:
      'A School ERP system covering payroll, HR, attendance and leave management, serving 200+ users in a live production environment.',
    tech: [
      'CodeIgniter',
      'Laravel',
      'React Native',
      'Node.js',
      'MySQL',
      'REST API',
      'Socket.IO',
    ],
    features: [
      'Payroll management',
      'HR operations',
      'Attendance tracking',
      'Leave management',
      'Role-based access control',
      'Secure REST APIs with JWT',
      'Cross-platform mobile application',
      'Real-time notifications & dashboards',
    ],
    links: {
      github: null,
      live: null,
    },
    caseStudy: {
      overview:
        'An enterprise School ERP system delivered end-to-end for 200+ users — spanning back-end modules, a cross-platform mobile app, secure APIs, real-time communication, database design and an AI-powered data retrieval layer.',
      problem:
        'School operations such as payroll, HR, attendance and leave management were spread across disconnected processes, with no unified, secure and real-time way for staff and management to access live data.',
      solution:
        'Architected a modular MVC back end on CodeIgniter and Laravel with role-based access control, exposed through secure REST APIs, consumed by both a web dashboard and a React Native mobile app, with Node.js microservices and Socket.IO handling background work and real-time updates.',
      architecture:
        'CodeIgniter / Laravel MVC services → REST API layer (JWT, middleware validation, rate limiting) → MySQL. Node.js microservices handle background tasks and inter-service communication, Socket.IO drives live notifications and dashboards, and a FastAPI RAG service sits alongside the ERP data layer.',
      technologies: [
        'CodeIgniter',
        'Laravel',
        'React Native',
        'Node.js',
        'MySQL',
        'REST API',
        'JWT',
        'Socket.IO',
        'FastAPI',
        'RAG',
        'TanStack Query',
        'Postman',
      ],
      implementation: [
        'Architected scalable server-side modules using CodeIgniter and Laravel (MVC) for payroll, attendance, leave management and role-based access control.',
        'Built reusable service layers with robust error handling and input validation, following clean code practices for a secure, production-ready system.',
        'Built a cross-platform React Native mobile app for staff and management covering payroll, attendance and HR features with a responsive interface.',
        'Integrated RESTful APIs for real-time sync and implemented JWT authentication with persistent session handling across Android and iOS.',
        'Created secure RESTful APIs with JWT authentication, middleware validation, rate limiting and structured error handling across web, mobile and back-end services.',
        'Integrated 3+ third-party services for real-time notifications and automated reporting, with API documentation that improved cross-team efficiency by 30%.',
        'Delivered modular Node.js microservices for background tasks and inter-service communication, keeping the system decoupled and scalable.',
        'Used Socket.IO for live notifications, real-time attendance updates and dynamic dashboard refresh.',
        'Tested APIs with Postman and implemented TanStack Query for smart caching, reducing API calls by 35% and improving app responsiveness.',
        'Managed MySQL operations including schema design, query optimization, indexing and migrations.',
      ],
    },
  },
  {
    id: 'rag-retrieval',
    index: '04',
    title: 'AI-Powered Data Retrieval',
    category: 'AI / RAG',
    year: 'Integrated with School ERP',
    visual: 'ai',
    tagline:
      'A Retrieval-Augmented Generation system integrated with the School ERP to enable natural-language retrieval of live school data.',
    tech: ['Python', 'FastAPI', 'RAG', 'MySQL', 'AI'],
    features: [
      'Natural-language queries over ERP data',
      'Student data retrieval',
      'Income information retrieval',
      'Employment information retrieval',
      'Live ERP data integration',
    ],
    links: {
      github: null,
      live: null,
    },
    caseStudy: {
      overview:
        'A Retrieval-Augmented Generation system built and deployed inside the School ERP, served through a FastAPI backend, allowing staff and school owners to ask questions in plain language instead of navigating reports.',
      problem:
        'Staff and school owners needed day-to-day information — student records, income and employment details — but retrieving it meant navigating structured ERP screens and reports rather than simply asking for it.',
      solution:
        'Built a RAG pipeline served through FastAPI and integrated it directly with the existing ERP data layer, so natural-language queries resolve against live, up-to-date records rather than stale copies.',
      architecture:
        'Natural-language query → FastAPI RAG service → retrieval against the ERP data layer (MySQL) → grounded response. The service is integrated with the existing ERP so results always reflect current records.',
      technologies: ['Python', 'FastAPI', 'RAG', 'MySQL', 'AI'],
      implementation: [
        'Built and deployed a Retrieval-Augmented Generation (RAG) system within the School ERP, served through a FastAPI backend, to enable natural-language data retrieval.',
        'Enabled staff to retrieve student data and school owners to retrieve day-to-day income and employment details through natural-language queries.',
        'Integrated the RAG service with the existing ERP data layer so results reflect live, up-to-date records.',
      ],
      sample: {
        user: "Show me today's attendance summary.",
        ai: 'Retrieving the latest attendance data…',
      },
    },
  },
];
// src/data/experience.js
export const experience = [
  {
    id: 'sparkle',
    index: '01',
    role: 'Junior Full Stack Developer',
    company: 'Sparkle Digital Solutions Pvt. Ltd.',
    period: 'Oct 2025 — Present',
    location: 'Tamil Nadu, India',
    summary:
      'Designed and built a School ERP system covering payroll, HR, attendance and leave management for 200+ users. Owned the project end-to-end — back-end development, mobile app development, API integration, real-time communication and database design — in a live production environment.',
    groups: [
      {
        title: 'Backend Development',
        stack: ['CodeIgniter', 'Laravel'],
        points: [
          'Architected scalable server-side modules using CodeIgniter and Laravel (MVC) for payroll, attendance, leave management and role-based access control.',
          'Built reusable service layers with robust error handling and input validation, following clean code practices for a secure, production-ready system.',
        ],
      },
      {
        title: 'Mobile Application Development',
        stack: ['React Native'],
        points: [
          'Built a cross-platform React Native mobile app for staff and management, covering payroll, attendance and HR features with a responsive interface.',
          'Integrated RESTful APIs for real-time sync and implemented JWT authentication with persistent session handling across Android and iOS.',
        ],
      },
      {
        title: 'RESTful API Development & Integration',
        stack: ['REST API', 'JWT', 'Postman'],
        points: [
          'Created secure RESTful APIs with JWT authentication, middleware validation, rate limiting and structured error handling across web, mobile and back-end services.',
          'Integrated 3+ third-party services for real-time notifications and automated reporting, with clear API documentation that improved cross-team efficiency by 30%.',
        ],
      },
      {
        title: 'Node.js Microservices & Real-Time Communication',
        stack: ['Node.js', 'Socket.IO'],
        points: [
          'Delivered modular Node.js microservices for background tasks and inter-service communication, keeping the system decoupled and scalable.',
          'Used Socket.IO for live notifications, real-time attendance updates and dynamic dashboard refresh.',
        ],
      },
      {
        title: 'API Testing, Caching & Database Management',
        stack: ['Postman', 'TanStack Query', 'MySQL'],
        points: [
          'Tested APIs with Postman and implemented TanStack Query for smart caching, reducing API calls by 35% and improving app responsiveness.',
          'Managed MySQL operations including schema design, query optimization, indexing and migrations for a reliable, high-performing database.',
        ],
      },
      {
        title: 'AI-Powered Data Retrieval (RAG System)',
        stack: ['Python', 'FastAPI', 'RAG'],
        points: [
          'Built and deployed a Retrieval-Augmented Generation (RAG) system within the School ERP, served through a FastAPI backend, to enable natural-language data retrieval.',
          'Enabled staff to retrieve student data and school owners to retrieve day-to-day income and employment details through natural-language queries.',
          'Integrated the RAG service with the existing ERP data layer so results reflect live, up-to-date records.',
        ],
      },
    ],
    tech: [
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
  },
  {
    id: 'lgm',
    index: '02',
    role: 'Full Stack Developer Intern',
    company: "Let's Grow More",
    period: 'Apr 2024 — Jun 2024',
    location: 'Remote',
    summary:
      'Built responsive web interfaces and server-side API endpoints, working with real-world development workflows, code reviews and Git-based version control.',
    groups: [
      {
        title: 'Frontend Development',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
        points: [
          'Built fully responsive web pages with HTML, CSS, JavaScript and React.js, focusing on clean UI, cross-browser compatibility and a smooth experience across all screen sizes.',
        ],
      },
      {
        title: 'Backend & Integration',
        stack: ['Node.js', 'Express.js', 'REST API'],
        points: [
          'Implemented server-side functionality using Node.js and Express.js, developing RESTful API endpoints to handle data flow between front-end and back-end services.',
          'Implemented dynamic rendering, form validation and real-time feedback to boost user engagement and overall application functionality.',
        ],
      },
      {
        title: 'Team Workflow',
        stack: ['Git'],
        points: [
          'Collaborated with the team through code reviews and Git-based version control, gaining hands-on experience with real-world development workflows and best practices.',
        ],
      },
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'REST API', 'Git'],
  },
];
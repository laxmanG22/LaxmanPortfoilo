export const PERSONAL_INFO = {
  name: "LAXMAN GUDIMALLA",
  firstName: "Laxman",
  lastName: "Gudimalla",
  role: "Software Engineer",
  tagline: "Building scalable web and mobile experiences with React.js and React Native.",
  subTagline: "Engineered for high performance, spatial precision, and intuitive digital interaction.",
  location: "Hyderabad, India",
  email: "gudimallalaxman@gmail.com",
  phone: "8341375904",
  status: "AVAILABLE FOR ENGINEERING ROLES",
  keywords: [
    "REACT.JS",
    "REACT NATIVE",
    "NODE.JS",
    "MYSQL",
    "REST APIs",
    "GEOSPATIAL SYSTEMS",
    "CROSS-PLATFORM"
  ]
};

export const ABOUT_DATA = {
  headline: "I BUILD DIGITAL EXPERIENCES.",
  paragraphs: [
    "I am a Software Engineer focused on crafting high-performance web and mobile applications. Currently engineering robust solutions with React.js and React Native at S P A Enterprise Info Services.",
    "My engineering core spans cross-platform mobile architectures, complex web portals, geospatial mapping with custom polygon coordinates, role-based security systems, and high-throughput REST API integrations.",
    "From native mobile deployment on Google Play & Apple App Store to tuning responsive interfaces for large datasets, I prioritize clean architecture, strict performance standards, and real-world reliability."
  ],
  pillars: [
    { label: "Frontend & Mobile", value: "React.js • React Native • JavaScript" },
    { label: "Geospatial & Spatial", value: "Interactive Maps • Polygons • Route Systems" },
    { label: "Backend & Systems", value: "REST APIs • Node.js • Express • MySQL" },
    { label: "Production Lifecycle", value: "Play Store • App Store • Optimization" }
  ]
};

export const CAPABILITIES = [
  {
    id: "01",
    title: "WEB APPLICATIONS",
    description: "React.js applications and responsive interfaces engineered with reusable component architectures, state orchestration, and fluid interactions.",
    tech: ["React.js", "JavaScript", "HTML5/CSS", "Vite", "Component Architecture"]
  },
  {
    id: "02",
    title: "MOBILE APPLICATIONS",
    description: "Cross-platform Android and iOS applications using React Native, delivering native performance, clean lifecycle management, and unified codebase efficiency.",
    tech: ["React Native", "Android Studio", "Xcode", "Mobile Workflows"]
  },
  {
    id: "03",
    title: "MAP & LOCATION EXPERIENCES",
    description: "Interactive maps, polygons, location selection, Google Maps deep linking, and real-time field navigation built for spatial clarity and operational tracking.",
    tech: ["Interactive Maps", "Polygons", "Spatial Coordinates", "Google Maps Navigation"]
  },
  {
    id: "04",
    title: "API & DATA SYSTEMS",
    description: "REST APIs, secure authentication, role-based authorization modules, and database-driven data flows connecting client state with robust backend services.",
    tech: ["REST APIs", "Node.js", "Express.js", "MySQL", "Auth / RBAC"]
  },
  {
    id: "05",
    title: "PERFORMANCE",
    description: "Responsive applications optimized for real-world datasets, rapid rendering pipelines, code-splitting, and smooth client-side filtering and pagination.",
    tech: ["Dataset Optimization", "Virtualization", "Search & Filters", "Bundle Tuning"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "React & React Native Developer",
    company: "S P A Enterprise Info Services (India) Pvt Ltd.",
    period: "08/2025 — Present",
    location: "Hyderabad, India",
    type: "Full-time",
    responsibilities: [
      "Engineering end-to-end production web applications with React.js and mobile apps with React Native for Android and iOS.",
      "Designing and implementing scalable REST API integrations with robust authentication, role-based authorization, and real-time error boundaries.",
      "Developing advanced location-based services, custom map features, polygon boundary visualization, and navigational routing workflows.",
      "Optimizing application rendering performance, minimizing re-renders, and streamlining client-side processing for data-heavy views.",
      "Handling production builds and store submission pipelines on Google Play Console and App Store Connect.",
      "Conducting code reviews, enforcing architectural guidelines, and upholding modern engineering best practices across development sprints."
    ],
    skills: ["React.js", "React Native", "REST APIs", "Location Services", "Map Features", "Auth/RBAC", "Play Store", "App Store Connect"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "acrex",
    number: "01",
    name: "AcreX",
    period: "04/2026 — Present",
    tagline: "Geospatial Land & Property Intelligence Platform",
    stack: ["React.js", "React Native", "Google Maps API", "REST APIs", "Spatial Polygons"],
    summary: "A unified enterprise platform featuring an Admin Portal and mobile applications for interactive property mapping, multi-point polygon boundaries, and real-time location selection.",
    whatIBuilt: [
      "Built Admin Portal for property inventory management, listing uploads, and verified document associations.",
      "Engineered polygon-based property mapping allowing precise boundary drawing, land plotting, and parcel coordinate storage.",
      "Designed interactive map pins, clickable layout overlays, and visual highlight states for selected land parcels.",
      "Integrated Google Maps navigation to enable turn-by-turn driving routes directly to plotted property boundaries.",
      "Implemented responsive spatial interactions and rendering optimizations for seamless mobile and desktop map rendering."
    ],
    highlightFeatures: [
      "Interactive Polygon Mapping",
      "Admin Property Portal",
      "Map Pin Navigation",
      "Spatial Parcel Layouts",
      "Turn-by-turn Routing"
    ],
    visualizationType: "map"
  },
  {
    id: "tejaswi",
    number: "02",
    name: "Tejaswi",
    period: "08/2025 — 01/2026",
    tagline: "Multi-Tier Field Service & Dispatch Ecosystem",
    stack: ["React.js", "React Native", "REST APIs", "Google Maps Deep Linking", "Location Tracking"],
    summary: "An integrated operations system connecting Admin headquarters, customer web portals, React Native customer apps, and dedicated technician dispatch tools with dynamic warehouse-to-customer routing.",
    whatIBuilt: [
      "Engineered central Admin application to orchestrate dispatch queues, service assignments, and real-time status updates.",
      "Built cross-platform customer web application and React Native mobile app for service requests and live tracking.",
      "Developed specialized technician application with Google Maps deep linking for instant warehouse-to-customer navigation.",
      "Streamlined automated route generation and waypoint tracking to optimize technician travel times and field service handoffs.",
      "Tuned client state management and network payloads for ultra-low latency updates during field operations."
    ],
    highlightFeatures: [
      "Admin Dispatch Console",
      "Technician Field App",
      "Warehouse-to-Customer Routing",
      "Google Maps Deep Linking",
      "Customer Mobile Portal"
    ],
    visualizationType: "route"
  },
  {
    id: "satyasakshi",
    number: "03",
    name: "Satyasakshi",
    period: "12/2025 — 03/2026",
    tagline: "Role-Based Fleet & Enterprise Governance Suite",
    stack: ["React.js", "Role-Based Access Control", "REST APIs", "Data Virtualization", "MySQL"],
    summary: "A comprehensive governance application structured across four user modules featuring a Super Admin dashboard for vehicle, user, and system management with enterprise-grade security.",
    whatIBuilt: [
      "Architected four distinct user modules governed by a granular Role-Based Access Control (RBAC) security layer.",
      "Developed Super Admin dashboard for centralized control of fleet vehicles, system logs, user permissions, and audit trails.",
      "Constructed a high-performance reusable UI library including custom data tables, multi-column filters, and dynamic search.",
      "Engineered client-side pagination and optimized state pipelines capable of smoothly rendering large datasets without layout thrashing.",
      "Integrated robust authentication and session handling to guarantee zero unauthorized route traversals."
    ],
    highlightFeatures: [
      "4 Modular User Portals",
      "Super Admin Management",
      "Granular RBAC Security",
      "Optimized Data Tables",
      "Fleet & System Registry"
    ],
    visualizationType: "dashboard"
  }
];

export const TECH_STACK = {
  Frontend: [
    { name: "React.js", level: "Primary", desc: "Hooks, architecture, context, custom engines" },
    { name: "React Native", level: "Primary", desc: "Cross-platform iOS & Android mobile apps" },
    { name: "JavaScript", level: "Core", desc: "ESNext, asynchronous patterns, modern DOM" },
    { name: "HTML5", level: "Core", desc: "Semantic markup, accessibility, SEO structure" },
    { name: "CSS", level: "Core", desc: "Modern layouts, Flexbox/Grid, CSS variables, keyframes" }
  ],
  Backend: [
    { name: "Node.js", level: "Engine", desc: "Event-driven runtime for scalable backend services" },
    { name: "Express.js", level: "Framework", desc: "RESTful routing, middleware, controllers" },
    { name: "REST APIs", level: "Architecture", desc: "Clean contract integration, pagination, error handling" }
  ],
  Database: [
    { name: "MySQL", level: "Relational", desc: "Schema design, relational indexing, query execution" }
  ],
  Tools: [
    { name: "Git", desc: "Version control, branching, release flows" },
    { name: "GitHub", desc: "Code reviews, repository collaboration, CI workflows" },
    { name: "VS Code", desc: "Primary IDE, workspace customization" },
    { name: "Postman", desc: "API testing, collection runner, payload validation" },
    { name: "Android Studio", desc: "Android builds, emulator testing, ADB tools" },
    { name: "Xcode", desc: "iOS builds, provisioning, Simulator runtime" }
  ],
  Publishing: [
    { name: "Google Play Console", desc: "App bundle release, track management, compliance" },
    { name: "App Store Connect", desc: "TestFlight distribution, metadata, iOS releases" }
  ],
  "AI Tools": [
    { name: "ChatGPT", desc: "Architectural ideation & algorithm reasoning" },
    { name: "GitHub Copilot", desc: "Accelerated inline code generation" },
    { name: "Cursor AI", desc: "Agentic development & semantic workspace edits" },
    { name: "Claude AI", desc: "Deep reasoning & system design exploration" },
    { name: "Cline", desc: "Autonomous CLI agent workflows" }
  ]
};

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Technology",
    institution: "J.B. Institute of Engineering and Technology",
    period: "2020 — 2024",
    location: "Hyderabad, India"
  },
  {
    degree: "Intermediate",
    institution: "Vaagdevi Junior College",
    period: "2018 — 2020",
    location: "Hanamkonda, India"
  },
  {
    degree: "10th Standard",
    institution: "Sri Krishnaveni High School",
    period: "2018",
    location: "Mandamarri, India"
  }
];


import { frame } from "motion";
import { object } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    slug: "ezypet-pet-care-solution",
    title: "Pet Care Solution",
    category: "App & Dashboard",
    framework: "React Native, Next.js",
    underCompany: "Lota Global",
    description:
      "A cross-platform pet care mobile app and admin portal for managing pet services, featuring responsive UI and real-time notifications.",
    subDescription: [
      "Built a mobile app with React Native, implementing a component-based architecture for modular and reusable UI development.",
      "Developed an admin portal using Laravel, Livewire, and Tailwind CSS, following MVC architecture for efficient pet service management.",
      "Applied clean architecture by structuring code with presentation, domain, and data layers, ensuring dependency inversion.",
      "Integrated real-time notifications and responsive design, enhancing user engagement across platforms.",
    ],
    href: "https://ezypet.info",
    logo: "",
    image: "/assets/projects/ezypet.jpg",
    images: [
      "/assets/projects/ezypet_1.png",
      "/assets/projects/ezypet_4.png",
      "/assets/projects/ezypet_2.png",
    ],
    objectives: [
      {
        key: "Development Challenges",
        value:
          "Building Ezypet was challenging due to the need for real-time features like lost pet alerts and health record updates across iOS and Android. I struggled with state synchronization for large datasets, ensuring responsiveness on various devices, and optimizing load times for low-resource users. Cross-platform inconsistencies and maintaining a lightweight codebase were also key hurdles that required careful debugging and performance tuning.",
      },
      {
        key: "Project Goal",
        value:
          "The goal was to create a scalable pet care app that integrates global platforms for delivery and health management. I focused on secure authentication, an intuitive frontend with Tailwind CSS, and features like payment systems, localization, and advanced filters. The aim was to deliver a user-friendly, future-proof solution for pet owners while ensuring robust performance.",
      },
      {
        key: "Role",
        value:
          "I led the UI design and implementation using React Native and Tailwind CSS. I collaborated with the design team to build responsive interfaces, integrated PHP-based APIs for seamless data flow and conducted thorough testing to ensure stability. My focus on component-based architecture and clean code principles enhanced the app's usability and scalability.",
      },
      {
        key: "Development Approach",
        value:
          "I started with user research to understand pet owners' needs, then adopted an MVC pattern for a modular codebase. Prototyping with React Native allowed iterative design improvements based on usability feedback. I optimized Service Workers for offline access, used GSAP for animations, and implemented multilingual support, addressing technical debt and edge cases like network issues through continuous testing.",
      },
      {
        key: "Key Takeaways and Impact",
        value:
          "This project sharpened my skills in cross-platform development and performance optimization. I delivered a polished app with features like pet profiles, health records, blogs, lost pet posters, owner and co-owners features. Ezypet now empowers pet owners with a reliable, user-centric tool, showcasing my ability to build impactful solutions under pressure.",
      },
    ],
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 3,
        name: "Livewire",
        path: "/assets/logos/livewire.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    slug: "nexlynk-elearning-app",
    title: "E Learning App & Dashboard",
    category: "App & Dashboard",
    framework: "React Native, Next.js",
    underCompany: "Lota Global",
    description:
      "A modern language learning platform for schools and students, supporting thousands of users with scalable UI components and responsive dashboards.",
    subDescription: [
      "Created a learning portal with React Native and Next.js, utilizing a microfrontend architecture for scalable and maintainable UI components.",
      "Designed responsive admin and school dashboards with Tailwind CSS, leveraging Next.js server-side rendering for performance optimization.",
      "Implemented clean architecture by isolating business logic in domain layers and using dependency injection for API services.",
      "Improved usability by 40% through intuitive design and efficient data handling.",
    ],
    href: "https://admin.nexlynk.com",
    logo: "",
    image: "/assets/projects/nexlynk.jpg",
    images: [
      "/assets/projects/nexlynk-2.jpg",
      "/assets/projects/nexlynk-3.jpg",
      "/assets/projects/nexlynk-4.jpg",
    ],
    objectives: [
      {
        key: "Problem Statement",
        value:
          "This project involves developing a digital e-learning app and dashboard for a local startup company collaborating with language schools. The platform will provide an intuitive interface for students and instructors, featuring course management tools, interactive learning resources, and progress tracking capabilities. By integrating tailored content and fostering collaboration between language schools and learners, the app aims to enhance the language learning experience and promote personalized education.",
      },
      {
        key: "Objective",
        value:
          "The e-learning app offers a range of features to enhance learning for both students and instructors. Users can easily browse and purchase courses with secure payments, creating personalized accounts to track their progress. Instructors have access to tools for monitoring student performance and engagement. The app includes short video reels for quick lessons and a comprehensive Learning Management System (LMS) for seamless course delivery.",
      },
      {
        key: "Role",
        value:
          "I worked on the e-learning app as a standalone project over 1.5 months, focusing on creating an engaging and user-friendly platform.",
      },
      {
        key: "Design Process",
        value:
          "I began the design process with user research to gain insights into the needs and preferences of students and instructors. This involved conducting surveys and interviews to identify pain points and expectations regarding e-learning platforms. With this information, I defined the key requirements for the app and created low-fidelity wireframes to outline the layout and user flow. After refining these wireframes based on feedback, I developed high-fidelity prototypes that incorporated visual design elements, interactions, and animations..",
      },
      {
        key: "Actions & Reflections",
        value:
          "Through the e-learning app project, I gained valuable insights into the significance of user research and market analysis in shaping a successful product. I learned how understanding user needs and industry trends is essential for informed decision-making. Additionally, I recognized the importance of stakeholder collaboration, as it fosters a shared vision and ensures that the design aligns with business goals while meeting user expectations.",
      },
    ],
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 3,
        name: "NestJS",
        path: "/assets/logos/nestjs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "MIBA",
    slug: "miba-lms-and-sms",
    category: "App & Dashboard",
    framework: "React Native, Next.js",
    underCompany: "Lota Global",
    description:
      "A learning management system with a student portal for seamless course navigation and efficient course management.",
    subDescription: [
      "Developed a student portal with React and Tailwind CSS, using a component-based architecture for reusable UI elements.",
      "Integrated with Laravel backend following MVC architecture, ensuring robust API-driven data handling.",
      "Adopted clean architecture by separating UI logic, business rules, and data access layers for enhanced maintainability.",
      "Enabled intuitive course navigation, improving user experience and accessibility.",
    ],
    href: "https://miba.sportylite.com",
    logo: "",
    image: "/assets/projects/miba.jpg",
    images: [
      "/assets/projects/miba_1.png",
      "/assets/projects/miba_2.png",
      "/assets/projects/miba_3.png",
    ],
    objectives: [
      {
        key: "Problem Statement",
        value:
          "This project involves developing a digital e-learning app and dashboard for a local startup company collaborating with language schools. The platform will provide an intuitive interface for students and instructors, featuring course management tools, interactive learning resources, and progress tracking capabilities. By integrating tailored content and fostering collaboration between language schools and learners, the app aims to enhance the language learning experience and promote personalized education.",
      },
      {
        key: "Objective",
        value:
          "The e-learning app offers a range of features to enhance learning for both students and instructors. Users can easily browse and purchase courses with secure payments, creating personalized accounts to track their progress. Instructors have access to tools for monitoring student performance and engagement. The app includes short video reels for quick lessons and a comprehensive Learning Management System (LMS) for seamless course delivery.",
      },
      {
        key: "Role",
        value:
          "I worked on the e-learning app as a standalone project over 1.5 months, focusing on creating an engaging and user-friendly platform.",
      },
      {
        key: "Design Process",
        value:
          "I began the design process with user research to gain insights into the needs and preferences of students and instructors. This involved conducting surveys and interviews to identify pain points and expectations regarding e-learning platforms. With this information, I defined the key requirements for the app and created low-fidelity wireframes to outline the layout and user flow. After refining these wireframes based on feedback, I developed high-fidelity prototypes that incorporated visual design elements, interactions, and animations..",
      },
      {
        key: "Actions & Reflections",
        value:
          "Through the e-learning app project, I gained valuable insights into the significance of user research and market analysis in shaping a successful product. I learned how understanding user needs and industry trends is essential for informed decision-making. Additionally, I recognized the importance of stakeholder collaboration, as it fosters a shared vision and ensures that the design aligns with business goals while meeting user expectations.",
      },
    ],
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    slug: "ess-hr-web-application",
    title: "HR Web Application",
    category: "App & Dashboard",
    framework: "React Native, Next.js",
    underCompany: "Lota Global",
    description:
      "A recruitment management system with responsive UI and microservices architecture for efficient hiring processes.",
    subDescription: [
      "Developed frontend and backend using Next.js and NestJS, implementing a microservices architecture with NestJS-GRPC and Docker.",
      "Designed responsive UI with Next.js and Tailwind CSS, optimizing performance with server-side rendering.",
      "Applied clean architecture with domain-driven design, isolating business logic and using dependency inversion for scalable services.",
      "Enhanced system scalability and maintainability through containerization and modular design.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/hrwebapp.png",
    images: [
      "/assets/projects/hrwebapp_1.png",
      "/assets/projects/hrwebapp_2.png",
      "/assets/projects/hrwebapp_3.png",
    ],
    objectives: [
      {
        key: "Problem Statement",
        value:
          "This project involves developing a digital e-learning app and dashboard for a local startup company collaborating with language schools. The platform will provide an intuitive interface for students and instructors, featuring course management tools, interactive learning resources, and progress tracking capabilities. By integrating tailored content and fostering collaboration between language schools and learners, the app aims to enhance the language learning experience and promote personalized education.",
      },
      {
        key: "Objective",
        value:
          "The e-learning app offers a range of features to enhance learning for both students and instructors. Users can easily browse and purchase courses with secure payments, creating personalized accounts to track their progress. Instructors have access to tools for monitoring student performance and engagement. The app includes short video reels for quick lessons and a comprehensive Learning Management System (LMS) for seamless course delivery.",
      },
      {
        key: "Role",
        value:
          "I worked on the e-learning app as a standalone project over 1.5 months, focusing on creating an engaging and user-friendly platform.",
      },
      {
        key: "Design Process",
        value:
          "I began the design process with user research to gain insights into the needs and preferences of students and instructors. This involved conducting surveys and interviews to identify pain points and expectations regarding e-learning platforms. With this information, I defined the key requirements for the app and created low-fidelity wireframes to outline the layout and user flow. After refining these wireframes based on feedback, I developed high-fidelity prototypes that incorporated visual design elements, interactions, and animations..",
      },
      {
        key: "Actions & Reflections",
        value:
          "Through the e-learning app project, I gained valuable insights into the significance of user research and market analysis in shaping a successful product. I learned how understanding user needs and industry trends is essential for informed decision-making. Additionally, I recognized the importance of stakeholder collaboration, as it fosters a shared vision and ensures that the design aligns with business goals while meeting user expectations.",
      },
    ],
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "NestJS",
        path: "/assets/logos/nestjs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 5,
    slug: "dozo-vpn-website",
    title: "DOZO VPN Website",
    category: "CMS Website",
    framework: "Next.js, Laravel",
    underCompany: "Freedoma",
    description:
      "The DOZO VPN Website is a CMS-powered platform built with Next.js and Laravel, offering a secure VPN service with military-grade encryption, global server access, a no-logs policy, fast streaming speeds, real-time server monitoring, and cross-device compatibility. It serves users seeking privacy and seamless browsing, with free and premium plan options.",
    href: "",
    logo: "",
    image: "/assets/projects/dozo.png",
    videoUrl: "/assets/projects/videos/dozo.mp4",
    images: [
      "/assets/projects/dozo_1.png",
      "/assets/projects/dozo_2.png",
      "/assets/projects/dozo_3.png",
    ],
    objectives: [
      {
        key: "Development Challenges",
        value:
          "I worked hard to make it run smoothly on every device. Linking the Laravel backend with the Next.js frontend took some effort. Keeping it secure and fast was also a big focus.",
      },
      {
        key: "Project Goal",
        value:
          "I aimed to build a simple, safe VPN site that's easy to use and can grow. It's meant to improve browsing and might get new features later.",
      },
      {
        key: "Role",
        value:
          "I developed the responsive frontend with Next.js and set up the secure backend with Laravel, making sure it handles data well across devices.",
      },
      {
        key: "Development Approach",
        value:
          "I started by planning the site's structure and user needs. Then, I built the frontend with Next.js to keep it fast and responsive. For the backend, I used Laravel to manage content securely and handle data. I tested everything step-by-step to make sure it worked well on all devices.",
      },
      {
        key: "Key Takeaways and Impact",
        value:
          "This project deepened my understanding of Next.js for creating fast, responsive frontends and Laravel for building a secure, scalable backend. I learned to tackle complex API integrations and optimize performance under tight deadlines, especially while ensuring cross-device compatibility.",
      },
    ],
    tags: [
      {
        id: 1,
        name: "NestJs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
    ],
  },
];

export const myProjectsOrg = [
  {
    id: 1,
    title: "React3Fibre Project",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://r3f-scroll-animation-wine.vercel.app/",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySkills = [
  "ReactJs",
  "NextJs",
  "NodeJs",
  "ExpressJs",
  "NestJs",
  "Greensock",
  "PHP/Laravel",
  "JavaScript",
  "TypeScript",
  "Radix-ui",
  "TailwindCSS",
  "HTML/CSS",
  "Git",
  "Docker",
  "Headless CMS",
  "Design Systems",
  "Clean Architecture",
  "Motion Design",
];
export const mySocials = [
  // {
  //   name: "WhatsApp",
  //   href: "",
  //   icon: "/assets/socials/whatsApp.svg",
  // },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kaungwintshein/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Hackerrank",
    href: "https://www.hackerrank.com/profile/kaungwintshein",
    icon: "https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png",
  },
  {
    name: "Github",
    href: "https://github.com/Kaungwintshein",
    icon: "https://github.githubassets.com/favicons/favicon-dark.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/ali.sanatidev/reels/",
  //   icon: "/assets/socials/instagram.svg",
  // },
];

export const experiences = [
  {
    title: "Junior Web Developer",
    job: "",
    date: "2021-2023",
    contents: [
      "Built responsive web interfaces using JavaScript, React, and CSS, contributing to the development of client-facing eCommerce and CMS platforms.",
      "Implemented UI designs with Bootstrap and Tailwind CSS, ensuring cross-browser compatibility and mobile responsiveness.",
      "ssisted in integrating frontend with PHP-based APIs, improving data rendering efficiency by 10%.",
      "articipated in code reviews and adopted Git for version control, enhancing team collaboration and code quality",
      "Supported post-launch maintenance, resolving UI bugs and improving user experience based on client feedback.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Led frontend development for enterprise applications using React, Next.js, and Livewire, delivering intuitive and scalable user interfaces",
      "Designed and implemented reusable UI components with Tailwind CSS, reducing development time for new features by 20%.",
      "Enhanced application performance by optimizing JavaScript and TypeScript code, resulting in a 15% reduction in rendering times",
      "Integrated frontend with Laravel-based APIs, ensuring robust data handling and real-time updates for eCommerce and LMS platforms.",
      "Conducted usability testing and post-deployment support, decreasing UI-related bug reports by 35%.",
    ],
  },
  {
    title: "Software Engineer",
    job: "",
    date: "2024-Present",
    contents: [
      "Developed responsive and interactive user interfaces for web applications using React, Next.js, and Tailwind CSS, improving user engagement by 30%",
      "Optimized frontend performance by implementing lazy loading and code splitting, reducing page load times by 25%.",
      "Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow between frontend and NestJS-based services.",
      "Utilized Docker for consistent development environments and maintained CI/CD pipelines for efficient deployments.",
      "Contributed to UI/UX design discussions, enhancing accessibility and user satisfaction across mobile and desktop platforms.",
    ],
  },
];

export const reviews = [
  {
    name: "Than Htike Aung",
    username: "@thanhtikeaung",
    body: "He is a great team player, able to solve problems and pay close attention to detail make him an invaluable member of any team. So, I heartily recommend him.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Yee Ywal Pyae Mhue",
    username: "@yeeywalpyaemhue",
    body: "His expertise in both management and problem-solving, combined with his strong leadership qualities, has consistently driven projects to successful outcomes.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Girja Shanker",
    username: "@kothet",
    body: "Kaung's ability to deliver high-quality code under tight deadlines is remarkable. He's a true asset to any team and someone I highly recommend.",
    img: "https://robohash.org/john",
  },
  {
    name: "May Thin Khine",
    username: "@mayve",
    body: "Kaung possesses a deep understanding of both front-end and back-end development, which allowed us to bridge the gap between design and implementation effortlessly. He is a dedicated and reliable full-stack developer who would be a great asset to any team. 🌟✨🔥",
    img: "https://robohash.org/alice",
  },
  {
    name: "Aung Cho Hein",
    username: "@aunghein",
    body: "He fulfilled the basic responsibilities of his role and demonstrated a satisfactory level of competence. Kaung Wint Shein approached his tasks with diligence and was able to meet the necessary requirements.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

/*
 * Portfolio content
 * -----------------
 * Add or edit projects, roles, skills, and LinkedIn posts in this file.
 * The page will update automatically; no component changes are required.
 */

export type Project = {
  title: string;
  description: string;
  technology: string;
  url: string;
  theme: "orange" | "blue";
};

export type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
};

export type AcademicProject = {
  title: string;
  description: string;
  stack: string[];
};

export type LinkedInPost = {
  title: string;
  embedUrl: string;
};

export type Skill = {
  name: string;
  source: string;
  context: string;
};

export const portfolioContent = {
  profile: {
    email: "simon.cornelissis@gmail.com",
    github: "https://github.com/scornelissis",
    linkedin: "https://www.linkedin.com/in/simon-cornelissis/",
  },

  projects: [
    {
      title: "Depart now trains",
      description:
        "A practical C++ utility that works backwards from Belgian train times to tell you exactly when to leave.",
      technology: "C++ / Transport",
      url: "https://github.com/scornelissis/depart-now-trains",
      theme: "orange",
    },
    {
      title: "Redis in Go",
      description:
        "A Redis-compatible server in Go with RESP parsing, in-memory storage, and a set of core commands.",
      technology: "Go / Systems",
      url: "https://github.com/scornelissis/redis-in-go",
      theme: "blue",
    },
  ] satisfies Project[],

  academicProjects: [
    {
      title: "HowestPrime",
      description:
        "A movie-ordering platform built as a set of microservices, including a Deno service, AMQP messaging, and a Blazor back office. The platform was containerized with Docker and deployed to Azure through Terraform.",
      stack: [
        "C#",
        ".NET",
        "TypeScript",
        "Deno",
        "AMQP",
        "Blazor",
        "Docker",
        "Azure",
        "Terraform",
      ],
    },
    {
      title: "ADRIA",
      description:
        "A full-stack product for smart doors, developed as a team alongside a business plan and product strategy.",
      stack: ["C#", ".NET", "Vue", "SQL", "Docker", "Agile", "Scrum"],
    },
    {
      title: "Splendor",
      description:
        "A client-server version of the board game, with a browser client and a Java backend.",
      stack: ["Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "BNXT League mobile app",
      description:
        "A native mobile application for the BNXT League, built with Kotlin and Jetpack Compose.",
      stack: ["Kotlin", "Jetpack Compose"],
    },
  ] satisfies AcademicProject[],

  experience: [
    {
      year: "2026",
      role: "Student Manufacturing Engineering",
      company: "Allison Off-Highway Drive & Motion Systems",
      description:
        "Digital work instruction systems, sensor-driven assembly conditions, and operator-focused implementation.",
    },
    {
      year: "2026",
      role: "Student IT",
      company: "Allison Off-Highway Drive & Motion Systems",
      description:
        "Network monitoring tools in Rust and Python, SFTP automation, and on-premises systems support.",
    },
    {
      year: "2025",
      role: "Student IT",
      company: "Dana Incorporated",
      description:
        "IT operations, ESP-NOW microcontrollers, network inventory, and cross-team troubleshooting.",
    },
  ] satisfies Experience[],

  skillGroups: [
    {
      title: "Languages",
      skills: [
        {
          name: "Rust",
          source: "Professional",
          context:
            "Built network monitoring and uptime tooling for on-premises systems at Allison.",
        },
        {
          name: "Kotlin",
          source: "Academic",
          context:
            "Developed a mobile application for the BNXT League using Kotlin and Jetpack Compose.",
        },
        {
          name: "Java",
          source: "Academic",
          context:
            "Built the backend of Splendor, a client-server implementation of the board game.",
        },
        {
          name: "C#",
          source: "Academic",
          context:
            "Built backend services for the ADRIA smart-door platform and movie-ordering microservices for HowestPrime.",
        },
        {
          name: ".NET",
          source: "Academic",
          context:
            "Used .NET for backend services in ADRIA and the HowestPrime microservice ecosystem.",
        },
        {
          name: "Python",
          source: "Professional + academic",
          context:
            "Built automation and SFTP tooling at work, and used Python for data analysis and dataframe coursework.",
        },
        {
          name: "JavaScript",
          source: "Academic",
          context:
            "Created the browser client for Splendor using HTML, CSS, and JavaScript.",
        },
        {
          name: "TypeScript",
          source: "Academic",
          context:
            "Built a Deno microservice in TypeScript as part of the HowestPrime platform.",
        },
        {
          name: "C++",
          source: "Personal",
          context:
            "Built Depart Now Trains, a utility that calculates when to leave for a Belgian train.",
        },
        {
          name: "Go",
          source: "Personal",
          context:
            "Built a basic Redis-compatible server with RESP parsing and a set of core commands.",
        },
      ],
    },
    {
      title: "Web, mobile & data",
      skills: [
        {
          name: "Vue",
          source: "Academic",
          context:
            "Built the frontend of ADRIA, a full-stack smart-door product developed alongside a business plan.",
        },
        {
          name: "Blazor",
          source: "Academic",
          context:
            "Built the back-office interface for the HowestPrime platform.",
        },
        {
          name: "Deno",
          source: "Academic",
          context:
            "Used Deno as the runtime for a TypeScript microservice in HowestPrime.",
        },
        {
          name: "AMQP",
          source: "Academic",
          context:
            "Used AMQP for asynchronous communication between HowestPrime microservices.",
        },
        {
          name: "Jetpack Compose",
          source: "Academic",
          context:
            "Created the user interface for the BNXT League mobile application.",
        },
        {
          name: "HTML",
          source: "Academic",
          context:
            "Built the browser-based client interface for the Splendor board game.",
        },
        {
          name: "CSS",
          source: "Academic",
          context:
            "Designed and implemented the visual interface for the Splendor client.",
        },
        {
          name: "SQL",
          source: "Academic",
          context:
            "Used relational databases throughout full-stack and microservice projects.",
        },
        {
          name: "NoSQL",
          source: "Academic",
          context:
            "Used MongoDB in a ticketing microservice and explored other NoSQL models in coursework.",
        },
      ],
    },
    {
      title: "Architecture & methodologies",
      skills: [
        {
          name: "Clean Architecture",
          source: "Academic",
          context:
            "Structured HowestPrime services around clear domain, application, and infrastructure boundaries.",
        },
        {
          name: "Domain-Driven Design",
          source: "Academic",
          context:
            "Modelled HowestPrime microservices around business domains and bounded responsibilities.",
        },
        {
          name: "Ports & Adapters",
          source: "Academic",
          context:
            "Applied adapter boundaries in HowestPrime to keep domain logic independent of infrastructure.",
        },
        {
          name: "Agile",
          source: "Academic",
          context:
            "Worked iteratively in teams while building ADRIA and Splendor.",
        },
        {
          name: "Scrum",
          source: "Academic",
          context:
            "Used sprints, planning, reviews, and team ceremonies in ADRIA and Splendor.",
        },
        {
          name: "CI/CD",
          source: "Academic",
          context:
            "Set up or worked with automated build and delivery pipelines across most team projects.",
        },
      ],
    },
    {
      title: "Tools & infrastructure",
      skills: [
        {
          name: "Docker",
          source: "Academic",
          context:
            "Containerized services and development environments for ADRIA, HowestPrime, and other team projects.",
        },
        {
          name: "Kubernetes",
          source: "Academic",
          context:
            "Deployed and managed containerized workloads in infrastructure labs.",
        },
        {
          name: "Microsoft Azure + Terraform",
          source: "Academic",
          context:
            "Provisioned Azure infrastructure with Terraform to deploy the HowestPrime platform.",
        },
      ],
    },
    {
      title: "Python & data science",
      skills: [
        {
          name: "pandas",
          source: "Academic",
          context:
            "Prepared, transformed, and explored datasets during data analysis coursework.",
        },
        {
          name: "scikit-learn",
          source: "Academic",
          context:
            "Built and evaluated predictive models during data science coursework.",
        },
        {
          name: "Linear Regression",
          source: "Academic",
          context:
            "Applied regression techniques to supervised-learning exercises and datasets.",
        },
        {
          name: "Logistic Regression",
          source: "Academic",
          context:
            "Used classification models to explore predictions and model evaluation.",
        },
      ],
    },
  ],

  /*
   * LinkedIn does not allow an entire profile feed to be embedded.
   * To add an individual public post:
   * 1. Open the post on LinkedIn.
   * 2. Choose ••• → Embed this post.
   * 3. Copy the URL from the iframe's `src` attribute.
   * 4. Add { title: "Accessible post title", embedUrl: "..." } below.
   */
  linkedinPosts: [] satisfies LinkedInPost[],
};

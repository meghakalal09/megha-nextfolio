// app/experience/experience-data.ts

export interface Experience {
  role: string;
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
  url?: string; // optional: link to company or project page
}

export const experience: Experience[] = [
  {
    role: "Teaching Assistant",
    company: "University of Maryland",
    location: "College Park, MD",
    dateRange: "Aug 2025 - Dec 2025",
    bullets: [
      "Assisted Dr. Bharti Motwani in designing and mentoring student projects on cloud computing topics, including HDFS, Apache Spark, Neo4j, and MapReduce.",
      "Guided a cohort of 60+ students through advanced big data concepts during office hours, resolving challenges related to distributed data processing and cloud infrastructure.",
    ],
  },
  {
    role: "Student Advisor",
    company: "University of Maryland",
    location: "College Park, MD",
    dateRange: "May 2025 - Dec 2025",
    bullets: [
      "Led engagement operations for global programs, coordinating across faculty, international partner universities, and students to facilitate 300+ study abroad applications.",
      "Processed large-scale student application datasets using Python, automating data validation, award allocation workflows, and email lists generation.",
      "Acted as interim process lead during supervisor leave, managing day-to-day coordination of study abroad workflows, from application vetting to visa and orientation planning.",
      "Analyzed cross-sectional trends by comparing Smith School participation rates with national averages, identifying gaps in outbound mobility and proposing strategies to boost engagement.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Horizon World Salon",
    location: "New York, NY",
    dateRange: "May 2025 - Aug 2025",
    bullets: [
      "Built a user management portal (MERN stack, JWT auth, RBAC) for invited speakers to onboard, manage profiles, and register for events, replacing ad-hoc coordination.",
      "Developed a speaker outreach pipeline using Puppeteer and OpenAI APIs, extracting 30K+ profiles and automating ~70% of outbound workflows.",
      "Deployed containerized applications on Azure VMs via GitHub Actions CI/CD pipelines, automating Docker builds and Jest testing.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University of Maryland",
    location: "College Park, MD",
    dateRange: "Jan 2025 -  May 2025",
    bullets: [
      "Assisted Prof. Anil K. Gupta in developing an LLM classifier to detect AI skills in job postings, benchmarked against traditional ML and few-/zero-shot models.",
    ],
  },
  {
    role: "Software Engineer",
    company: "DWD Merchant Assoc.",
    location: "Bangalore, India",
    dateRange: "Aug 2023 - Apr 2024",
    bullets: [
      "Automated end-to-end operational workflows, including vendor reporting and daily summary emails, via Python scripts, Cron jobs, and SMTP, cutting staff workload by ~60%.",
      "Designed and built a custom POS and inventory system for a retail business using React, Node.js, and PostgreSQL, powering reconciliation for 300+ daily transactions.",
    ],
  },
  {
    role: "Software Development Engineer 1",
    company: "Amazon",
    location: "Bangalore, India",
    dateRange: "Mar 2021 - Apr 2023",
    bullets: [
      "Built merchant onboarding and storefront tools for Amazon SmartCommerce using Spring Boot, REST APIs, and cloud-native stack enabling thousands of SMB sellers to launch online stores.",
      "Implemented multi-tenant dashboards by embedding AWS QuickSight into an Angular-based internal portal, with Redshift data ingestion, enabling reporting for 300+ active merchants.",
      "Developed alerting/ticketing workflows in AWS CloudWatch, Lambda, SNS, and Prometheus exporters, improving SLA compliance by 15%.",
      "Designed DynamoDB NoSQL data models and migration scripts (Bash, SQL); optimized high-volume read/write paths reducing latency to ~160ms.",
      "Led the agile development of an internal wiki, improving cross-team communication and reducing new-hire onboarding time by 25%.",
      "Conducted code/design reviews, on-call debugging, and JVM-based performance tuning, ensuring high reliability across distributed microservices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Delvit Solutions Pvt. Ltd.",
    location: "Bangalore, India",
    dateRange: "Jan 2020 - Feb 2021",
    bullets: [
      "Boosted user retention by 15% by building SQL-based pipelines on Google BigQuery for anomaly detection and root-cause analysis across 1M+ rows, surfacing key funnel drop-offs.",
      "Developed a React-based architecture for payment workflows using React Router and Redux Toolkit, reducing page load time by 20%.",
      "Collaborated with three cross-functional teams to migrate cloud infrastructure and data from GCP to AWS, decreasing system downtime by ~40% through coordinated rollout.",
      "Developed 30+ user interface screens using React.js and JavaScript and 20+ custom REST APIs on the Flask framework, hosted on Google Cloud for the company's self-checkout project.",
      "Integrated behavioral analytics via Google Analytics to uncover engagement patterns, segment users, and inform data-backed marketing interventions.",
    ],
  },
];

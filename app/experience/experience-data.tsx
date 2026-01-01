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
      "Developed a high-volume Puppeteer scraper extracting 30K+ speaker profiles, integrating OpenAI APIs to automate personalized outreach workflows and scale engagement.",
      "Deployed containerized application on AWS EC2 via GitHub Actions CI/CD pipeline, with Jest testing and CloudWatch monitoring.",
      "Led development of speaker portal (MERN stack), implementing multi-step registration, JWT-based authentication, S3 resume/media uploads, and secure RBAC for speakers and admins.",
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
      "Built a lightweight POS & inventory system with real-time reconciliation, improving sales accuracy across 200+ transactions/day.",
      "Automated vendor reporting via Python scripts to trigger daily summaries, reducing manual operations by 60%.",
    ],
  },
  {
    role: "Software Development Engineer 1",
    company: "Amazon",
    location: "Bangalore, India",
    dateRange: "Mar 2021 - Apr 2023",
    bullets: [
      "Integrated auth-enabled APIs in Spring Boot with downstream services; implemented caching, query optimizations that reduced response time by 30%, ensuring scalability.",
      "Developed cloud-native ticketing and alerting workflows with AWS CloudWatch, Lambda, and SNS improving SLA compliance by 15%.",
      "Created multi-tenant dashboards in AWS QuickSight with an Angular UI and Redshift ingestion, enabling insights for 300+ merchants.",
      "Designed scalable DynamoDB schemas and data migration scripts to power 50+ monthly merchant onboardings.",
      "Led a team of 12 in the agile development of an internal knowledge Wiki, reducing new-hire onboarding time by 25%.",
      "Conducted code/design reviews, on-call debugging of production issues and performance tuning, ensuring reliability of distributed systems.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Delvit Solutions Pvt. Ltd.",
    location: "Bangalore, India",
    dateRange: "Jan 2020 - Feb 2021",
    bullets: [
      "Architected modular microservices for payment management with React Router and Redux Toolkit, reducing page load times by 20%.",
      "Built SQL/BigQuery pipelines to run performance debugging and root-cause analysis on 1M+ rows, surfacing key funnel drop-offs.",
      "Collaborated with 3 cross-functional teams to migrate core infrastructure from GCP to AWS, reducing data extraction latency by 30%.",
      "Developed 30+ user interface screens using React.js and JavaScript and 20+ custom REST APIs on the Flask framework, hosted on Google Cloud for the company's self-checkout project.",
      "Integrated behavioral analytics via Google Analytics to uncover engagement patterns, segment users, and inform data-backed marketing interventions.",
    ],
  },
];

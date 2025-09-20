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
    location: "College Park, USA",
    dateRange: "Aug 2025 – Present",
    bullets: [
      "Assisting Dr. Bharti Motwani in designing projects on HDFS, Apache Spark, Neo4j, MongoDB, and MapReduce for the upcoming cohort of the Enterprise Cloud Computing course.",
      "Conducting office hours for a cohort of 80 students. ",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Horizon World Salon",
    location: "New York, NY",
    dateRange: "May 2025 – Aug 2025",
    bullets: [
      "Implemented an email outreach system (Puppeteer scraper + personalized sends), increasing speaker reach by 200%.",
      "Deployed containerized application on AWS S3 and EC2 via GitHub Actions CI/CD, with Jest tests and CloudWatch monitoring.",
      "Integrated an AI-driven algorithm to recommend speakers by event theme, improving match accuracy by 40%.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University of Maryland",
    location: "College Park, USA",
    dateRange: "Jan 2025 – May 2025",
    bullets: [
      "Assisted Prof. Anil K. Gupta in developing an LLM classifier to detect AI skills in job postings, benchmarked against traditional ML and few-/zero-shot models.",
    ],
  },
  {
    role: "Software Engineer",
    company: "DWD Merchant Assoc.",
    location: "Bangalore, India",
    dateRange: "Aug 2023 – Apr 2024",
    bullets: [
      "Built a lightweight POS & inventory system with real-time reconciliation, improving sales accuracy across 200+ transactions/day.",
      "Automated vendor reporting via Python scripts to trigger daily summaries, reducing manual operations by 60%.",
    ],
  },
  {
    role: "Software Development Engineer 1",
    company: "Amazon",
    location: "Bangalore, India",
    dateRange: "Mar 2021 – Apr 2023",
    bullets: [
      "Integrated auth-enabled Spring Boot APIs with downstream services; added caching & query optimizations to reduce response time by 30%.",
      "Developed automated ticketing & alerting with AWS CloudWatch and Lambda, improving SLA compliance by 15%.",
      "Built merchant dashboards in AWS QuickSight with an Angular UI, enabling real-time insights for 100+ merchants.",
      "Designed DynamoDB schemas and data-migration scripts to power 50+ monthly merchant onboardings.",
      "Led a team of 12 to build an internal wiki, cutting new-hire onboarding time by 25%.",
      "Conducted code/design reviews, on-call debugging of production issues and performance tuning, ensuring reliability of distributed systems.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Delvit Solutions Pvt. Ltd.",
    location: "Bangalore, India",
    dateRange: "Jan 2020 – Feb 2021",
    bullets: [
      "Architected modular microservices for payment management with React Router & Redux, reducing page load times by 20%.",
      "Built SQL/BigQuery workflows for anomaly detection and root-cause analysis on 1M+ rows, surfacing funnel drop-offs.",
      "Collaborated with 3 cross-functional teams to migrate analytics tooling from GCP to AWS, reducing extraction latency by 30%.",
      "Collaborated with cross-functional teams during the acquisition process to integrate analytical applications into the AWS cloud, streamlining data consolidation",
      "Developed 30+ User interface screens using React.js and JavaScript and 20+ custom REST APIs on Flask Framework, hosted on Google Cloud for the company’s self-checkout project.",
      "Integrated behavioral analytics via Google Analytics to uncover engagement patterns, segment users, and inform data-backed marketing interventions.",
    ],
  },
];

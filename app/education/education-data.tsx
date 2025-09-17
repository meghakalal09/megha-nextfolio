// app/education/education-data.ts

export interface EducationItem {
  school: string;
  location: string;
  degree: string;
  gpa?: string;
  dateRange: string;
  coursework?: string[];
  honors?: string[];
}

export interface RTItem {
  role: string;
  org: string;
  dateRange?: string;
  bullets: string[];
}

export const education: EducationItem[] = [
  {
    school: "University of Maryland, College Park",
    location: "College Park, MD",
    degree: "Master of Science in Information Systems",
    gpa: "3.97/4.00",
    dateRange: "Aug 2024 – Dec 2025",
    honors: [
      "Terrapin Scholarship Recipient for academic and professional excellence.",
    ],
    coursework: [
      "AI Systems",
      "Cloud Computing",
      "Big Data",
      "Data Modeling",
      "Predictive Modeling",
      "Database Management",
      "Project Management",
    ],
  },
  {
    school: "PES University",
    location: "Bangalore, India",
    degree: "Bachelor of Science in Computer Engineering",
    gpa: "3.8/4.00",
    dateRange: "Aug 2016 – May 2020",
    honors: ["CNR Rao Merit Scholarship (3-time recipient)."],
    coursework: [
      "Distributed Systems",
      "Data Structures",
      "Computer Architecture",
      "Web Development",
      "Design Patterns",
      "Machine Learning",
      "NLP",
    ],
  },
];

export const researchTeaching: RTItem[] = [
  {
    role: "Research Assistant",
    org: "University of Maryland (Prof. Anil K. Gupta)",
    bullets: [
      "Developed an LLM classifier to detect AI skills in job postings; benchmarked against traditional ML and few-/zero-shot approaches.",
    ],
  },
  {
    role: "Teaching Assistant – Enterprise Cloud Computing",
    org: "University of Maryland (Dr. Bharti Motwani)",
    bullets: [
      "Designed projects/labs on HDFS, Apache Spark, Neo4j, MongoDB, and MapReduce for the upcoming cohort.",
    ],
  },
];

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

export const education: EducationItem[] = [
  {
    school: "University of Maryland",
    location: "College Park, MD",
    degree: "MS in Information Systems",
    gpa: "3.96/4.00",
    dateRange: "Aug 2024 - Dec 2025",
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
    degree: "B.Tech in Computer Engineering",
    gpa: "9.1/10.00",
    dateRange: "Aug 2016 - May 2020",
    honors: ["Prof. CNR Rao Merit Scholarship (3-time recipient)."],
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

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Megha is brimming with positive values, work ethics, and confidence. Her ability to conduct and interact in team meetings showcases her leadership and ownership qualities. She has, at times, gone beyond and above her way and time schedules to help the team stay afloat. She is a team player through and through.",
    author: "Saketh BSV",
    role: "Product & Engineering Leader, Amazon",
  },
  {
    text: "I say self-reliant because of her capabilities to build services end to end as she is well-versed in both front-end and back-end development. This led me to trust her with work across all spectrums and assured me of her proficiency.",
    author: "Ponkishore Balakrishnan",
    role: "Engineering manager, SIXT R&D India",
  },
  {
    text: "Her commendable hold on Data Structures and Algorithms, Data Analytics, Java, Python, Databases, and Web Technologies will surely help her pick up any new project or subject easily. She can embody leadership qualities and always takes others' opinions into full consideration. Her idea to never resort to conformity and always make herself heard is an effective leadership quality.",
    author: "Bhaskarjyoti Das",
    role: "Adjunct Professor - Dept. of CSE in AI & ML, PES University",
  },
];

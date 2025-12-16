// app/projects/projects-data.ts

export interface ProjectItem {
  title: string;
  date: string; // e.g., "Dec 2025"
  description: string; // 1–2 lines max
  url?: string; // optional external link
}

export const projects: ProjectItem[] = [
  {
    title: "Strategic Simulation System · National Defence University",
    date: "Dec 2025",
    description:
      "Developed a strategic simulation platform to model how diseases spread and how supply-chain disruptions unfold in real time. The system supported national defense teams in testing different scenarios, exploring outcomes, and planning responses more effectively.",
  },
  {
    title: "India's Gender Divide and the Rising Voice Against Violence",
    date: "Oct 2025",
    description:
      "Designed an interactive Tableau story analyzing gender disparity and crimes against women across Indian states. Integrated demographic, literacy, and population data with crime statistics to uncover regional inequalities and post-2012 reporting shifts.",
  },
  {
    title: "Real-Time Recommendation System using Kafka",
    date: "May 2025",
    description:
      "Built a live Kafka → PySpark pipeline with recommendation engine that adapted instantly to user activity, creating personalized suggestions within seconds. The system demonstrated how large-scale data pipelines can power seamless, real-time user experiences.",
  },
  {
    title: "Code Similarity Detection System",
    date: "April 2025",
    description:
      "Built an AI-powered code similarity detection system to automatically identify duplicate and functionally equivalent code across large repositories. Using CodeBERT embeddings to represent code semantics and a Siamese neural network for comparison, we trained and evaluated our model on benchmark datasets. This approach demonstrated how modern NLP techniques can be adapted to software engineering problems, streamlining code review and maintenance.",
  },
  {
    title: "SmartHire · AI-Powered Resume Screening",
    date: "Mar 2025",
    description:
      "Designed an AI-powered hiring assistant that automatically matched resumes to job descriptions, summarized candidate profiles, and even generated interview questions. Implemented BERT-based classification, cosine-similarity matching, and LLaMA agents.",
  },
  {
    title: "Tracking Federal Spending Transparency",
    date: "Feb 2025",
    description:
      "Created an interactive platform to analyze and visualize U.S. federal spending across agencies. The tool highlighted unusual spending patterns, helping stakeholders uncover inefficiencies and bring more accountability into how public funds are used.",
  },
  {
    title: "Starbucks Digital Transformation Strategy",
    date: "Dec 2024",
    description:
      "Analyzed Starbucks’ digital ecosystem-including its mobile app, AI-driven personalization, and supply chain systems-to identify gaps in customer experience, employee workflows, and global expansion. Designed a transformation roadmap with cloud-native app upgrades, blockchain-enabled transparency, and AI-powered scheduling to enhance engagement, efficiency, and scalability ",
  },
  {
    title: "D-ott",
    date: "Jun 2020",
    description:
      "Built a synchronized group-watch platform with WebSockets for real-time video/audio sync across multiple users. Developed custom APIs for session management and recommendations using Microsoft Custom Vision AI. Achieved 3rd place out of 64 teams at the Dish-a-thon competition, demonstrating strong potential for collaborative media streaming.",
  },
  {
    title: "Stock Market Trader",
    date: "May 2020",
    description:
      "Developed an AI-powered trading system using RL (Q-learning, OpenAI Gym, TensorTrade) to simulate buy/sell/hold strategies. Explored how RL agents adapt to volatile markets and benchmarked model profitability, demonstrating the potential of AI-driven trading systems.",
  },
];

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
    title: "Real-Time Recommendation System using Kafka",
    date: "May 2025",
    description:
      "Built a live Kafka → PySpark pipeline with recommendation engine that adapted instantly to user activity, creating personalized suggestions within seconds. The system demonstrated how large-scale data pipelines can power seamless, real-time user experiences.",
    // url: "https://movie-recommender-app-4p5p5hrxuyvoekxg56qznc.streamlit.app/",
  },
  {
    title: "Tracking Federal Spending Transparency",
    date: "Jan 2025",
    description:
      "Created an interactive platform to analyze and visualize U.S. federal spending across agencies. The tool highlighted unusual spending patterns, helping stakeholders uncover inefficiencies and bring more accountability into how public funds are used.",
  },
  {
    title: "SmartHire · AI-Powered Resume Screening",
    date: "Mar 2025",
    description:
      "Designed an AI-powered hiring assistant that automatically matched resumes to job descriptions, summarized candidate profiles, and even generated interview questions. Implemented BERT-based classification, cosine-similarity matching, and LLaMA agents.",
  },
  {
    title: "Stock Market Trader",
    date: "May 2020",
    description:
      "Analyzed Starbucks’ digital ecosystem-including its mobile app, AI-driven personalization, and supply chain systems-to identify gaps in customer experience, employee workflows, and global expansion. Designed a transformation roadmap with cloud-native app upgrades, blockchain-enabled transparency, and AI-powered scheduling to enhance engagement, efficiency, and scalability ",
  },
  {
    title: "D-ott",
    date: "Jun 2020",
    description:
      "Built a synchronized group-watch platform with WebSockets for real-time video/audio sync across multiple users. Developed custom APIs for session management and recommendations using Microsoft Custom Vision AI. Achieved 3rd place out of 64 teams at the Dish-a-thon competition, demonstrating strong potential for collaborative media streaming.",
    // url: "https://github.com/lvnarke/DishTVHack2020",
  },
  {
    title: "Stock Market Trader",
    date: "May 2020",
    description:
      "Developed an AI-powered trading system using RL (Q-learning, OpenAI Gym, TensorTrade) to simulate buy/sell/hold strategies. Explored how RL agents adapt to volatile markets and benchmarked model profitability, demonstrating the potential of AI-driven trading systems.",
  },
];

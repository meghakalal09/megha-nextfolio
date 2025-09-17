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
      "Designed modular game logic in Flask with React controls and offline Leaflet maps to simulate disease spread and supply-chain shocks.",
  },
  {
    title: "Real-Time Recommendation System using Kafka",
    date: "May 2025",
    description:
      "Built a Kafka → PySpark pipeline with a live feedback loop; handled 60+ concurrent ratings to serve instant recommendations.",
    url: "https://movie-recommender-app-4p5p5hrxuyvoekxg56qznc.streamlit.app/",
  },
  {
    title: "Tracking Federal Spending Transparency",
    date: "Jan 2025",
    description:
      "Built a Python/SQL/JS platform to visualize federal spend; custom anomaly scoring flagged outliers across 30+ agencies and was presented to USAspending.gov.",
  },
  {
    title: "SmartHire · AI-Powered Resume Screening",
    date: "Mar 2025",
    description:
      "Implemented BERT-based classification, cosine-similarity matching, and LLaMA agents for summarization and question generation.",
  },
  {
    title: "D-ott",
    date: "Jun 2020",
    description:
      "Built synchronized group-watch with WebSockets + custom APIs and CV-based recommendations; won 3rd place (64 teams) at Dish-a-thon.",
    url: "https://github.com/lvnarke/DishTVHack2020",
  },
];

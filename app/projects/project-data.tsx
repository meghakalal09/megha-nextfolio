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
      "Designed and developed a strategic simulation platform in collaboration with the National Defense University to model disease outbreaks and supply chain disruptions across countries. <br>The tool empowered adjudicators to conduct real-time, turn-based exercises, test response strategies, and generate reports for post-simulation analysis. <br>This project demonstrated the power of digital simulations in training teams for high-stakes decision-making environments.",
  },
  {
    title: "InsightLoop - Slack-Native AI Agent",
    date: "Nov 2025",
    description:
      "Developed a Slack‑integrated AI agent to automate weekly performance tracking for growth and operations teams by detecting KPI anomalies, correlating product rollouts from Jira, and delivering actionable insights.",
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
      "Engineered a real-time, low-latency system Kafka-based pipeline streaming ratings from UI to a PySpark backend, deploying the app on cloud with a live feedback loop for personalization. Handling 60+ simultaneous ratings with instant recommendations, validating scalability.",
  },
  {
    title: "Code Similarity Detection System",
    date: "April 2025",
    description:
      "Built an AI-powered code similarity detection system to automatically identify duplicate and functionally equivalent code across large repositories. <br>Using CodeBERT embeddings to represent code semantics and a Siamese neural network for comparison, we trained and evaluated our model on benchmark datasets. <br>This approach demonstrated how modern NLP techniques can be adapted to software engineering problems, streamlining code review and maintenance.",
  },
  {
    title: "SmartHire · AI-Powered Resume Screening",
    date: "Mar 2025",
    description:
      "Engineered a modular AI pipeline for resume classification, job matching, summarization, and interview question generation, leveraging transformer-based language models and semantic similarity to enable scalable, context-aware candidate evaluation.",
  },
  {
    title: "Tracking Federal Spending Transparency",
    date: "Feb 2025",
    description:
      "Engineered an interactive data platform to analyze and visualize federal spending patterns, and designed a custom anomaly scoring framework to identify high-risk fund allocation discrepancies across 30+ agencies; insights were presented to USAspending.gov leadership.",
  },
  {
    title: "Starbucks Digital Transformation Strategy",
    date: "Dec 2024",
    description:
      "Developed a digital transformation strategy for Starbucks by analyzing its current digital landscape, including mobile app adoption, AI-driven personalization (Deep Brew), and global supply chain systems. <br>Applied frameworks such as business outcomes mapping, reimagined process flows, and a three-phase transformation roadmap. <br>Proposed initiatives including Smart Queue management, blockchain-enabled supply chain transparency, AI-driven workforce scheduling, and regional digital expansion, enhancing engagement, operational efficiency, and scalability.",
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

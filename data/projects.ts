export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  keyResult: string;
  githubUrl: string;
  liveDemoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Banking Adoption Analysis",
    description:
      "Analyzed factors influencing e-banking adoption among users using statistical methods and machine learning. Explored demographic patterns, trust, and usability factors driving digital banking uptake.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    keyResult: "Identified top 5 adoption drivers with 89% model accuracy",
    githubUrl: "https://github.com/22f3002229",
    liveDemoUrl: "https://github.com/22f3002229",
  },
  {
    id: 2,
    title: "ML Model Deployment with FastAPI",
    description:
      "Built and deployed a machine learning classification model as a REST API using FastAPI. Includes model versioning, request validation, and a simple prediction endpoint.",
    techStack: ["Python", "FastAPI", "Scikit-learn", "Pydantic", "Uvicorn"],
    keyResult: "API response time under 50ms with 99.5% uptime",
    githubUrl: "https://github.com/22f3002229",
    liveDemoUrl: "https://github.com/22f3002229",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for exploring and visualizing complex datasets. Features dynamic charts, filters, and summary statistics for quick insight generation.",
    techStack: ["Python", "Pandas", "Plotly", "Dash", "SQL"],
    keyResult: "Reduced data exploration time by 60% for end users",
    githubUrl: "https://github.com/22f3002229",
    liveDemoUrl: "https://github.com/22f3002229",
  },
];

export default projects;

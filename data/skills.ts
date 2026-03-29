export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "C", "SQL"],
  },
  {
    category: "Data",
    icon: "📊",
    skills: ["Pandas", "NumPy"],
  },
  {
    category: "ML / AI",
    icon: "🤖",
    skills: ["Scikit-learn", "PyTorch"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "FastAPI"],
  },
];

export default skillCategories;

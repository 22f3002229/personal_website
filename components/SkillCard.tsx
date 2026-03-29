import { SkillCategory } from "@/data/skills";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700/60 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {category.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-700/70 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

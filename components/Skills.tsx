import SectionWrapper from "./SectionWrapper";
import SkillCard from "./SkillCard";
import skillCategories from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Tools &amp; Technologies
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A curated set of languages, frameworks, and tools I use to build and
          analyse.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.category} category={cat} />
        ))}
      </div>
    </SectionWrapper>
  );
}

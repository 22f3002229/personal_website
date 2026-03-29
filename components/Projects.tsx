import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-gray-800/30">
      <div className="text-center mb-12">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Featured Work
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A selection of projects that demonstrate my skills in data science,
          machine learning, and software development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

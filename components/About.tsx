import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-800/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Passionate about data &amp;{" "}
            <span className="text-cyan-400">intelligence</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a Data Science student enrolled in the{" "}
              <span className="text-gray-200 font-medium">
                IIT Madras BS Data Science program
              </span>
              , one of India&apos;s most rigorous online data science
              curricula. I&apos;m passionate about transforming raw data into
              meaningful insights and building intelligent systems that solve
              real-world problems.
            </p>
            <p>
              My academic journey covers a broad spectrum — from statistical
              foundations and machine learning to software engineering and
              systems programming. I believe in learning by building, and I
              constantly work on projects that bridge theory with practice.
            </p>
          </div>
        </div>

        {/* Current coursework card */}
        <div className="bg-gray-800/60 border border-gray-700/60 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="text-cyan-400">📚</span> Current Coursework
          </h3>
          <ul className="space-y-3">
            {[
              {
                name: "Data Science Practices",
                desc: "Applied data analysis & workflows",
              },
              {
                name: "Software Engineering",
                desc: "Design patterns & SDLC",
              },
              {
                name: "C Programming",
                desc: "Systems-level programming",
              },
              {
                name: "SPG",
                desc: "Statistical inference & probability",
              },
            ].map((course) => (
              <li
                key={course.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <div>
                  <span className="text-gray-200 text-sm font-medium">
                    {course.name}
                  </span>
                  <p className="text-gray-500 text-xs mt-0.5">{course.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-700/50">
            {[
              { value: "IITM", label: "Institution" },
              { value: "BS", label: "Degree" },
              { value: "DS", label: "Major" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

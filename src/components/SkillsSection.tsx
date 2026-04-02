import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Layers, Wrench, Database } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    icon: Layers,
    title: "Frameworks / Libraries",
    skills: [
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools / Platforms",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "Firebase", level: 60 },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg gradient-bg">
                    <cat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

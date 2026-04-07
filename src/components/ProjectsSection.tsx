import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A fully responsive online store with product filtering, shopping cart, and checkout functionality built with modern web technologies.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/makamurahwa-star/EtherialStore",
    demo: "https://chitoro.netlify.app/",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop functionality, and team workspace features.",
    tech: ["TypeScript", "React", "Firebase", "Material UI"],
    github: "https://github.com/makamurahwa-star/taskapp",
    demo: "https://murahwa.netlify.app/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application that displays current conditions, forecasts, and interactive maps using a third-party API.",
    tech: ["JavaScript", "HTML/CSS", "REST API", "Chart.js"],
    github: "https://github.com/makamurahwa-star/WeatherApp",
    demo: "https://chando.netlify.app/",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for building.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="h-2 gradient-bg" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

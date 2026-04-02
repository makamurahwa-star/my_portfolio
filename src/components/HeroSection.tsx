import profileImg from "@/assets/profile.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { ArrowDown, Download } from "lucide-react";
import CodeCredits from "./CodeCredits";

const counters = [
  { end: 10, label: "Projects Completed", suffix: "+" },
  { end: 5, label: "Certifications", suffix: "+" },
  { end: 3, label: "Years Learning", suffix: "+" },
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 pb-16" ref={ref}>
      <CodeCredits />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full gradient-bg p-1">
              <img
                src={profileImg}
                alt="Profile photo"
                width={512}
                height={512}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full gradient-bg animate-pulse" />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text">Tadiwanashe Murahwa </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Web Developer & System Developer Student
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A passionate web developer pursuing a degree in Computer Science. I love building
              beautiful, responsive, and user-friendly web applications using modern technologies.
              My goal is to turn ideas into elegant digital experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <a href="#contact" className="gradient-bg text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Get In Touch
              </a>
              <a href="#projects" className="border border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
               Take a tour .View Projects
              </a>
              <a 
                href="src/Tadiwanashe Murahwa CV.pdf" 
                download="Tadiwanashe-Murahwa-CV.pdf"
                className="inline-flex items-center gap-2 border border-primary/50 bg-transparent hover:bg-primary/5 text-primary text-sm font-medium px-6 py-2.5 rounded-lg transition-all group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </div>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-6">
              {counters.map((c) => (
                <CounterCard key={c.label} {...c} isActive={isVisible} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="#skills" className="animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CounterCard({ end, label, suffix, isActive }: { end: number; label: string; suffix: string; isActive: boolean }) {
  const count = useAnimatedCounter(end, 2000, 0, isActive);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

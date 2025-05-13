import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ProjectsTitle from "@/components/projects-title";
import Skills from "@/components/skills";
import ExperienceTitle from "@/components/experience-title";
import Experience from "@/components/experience";

export default function Home() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar navItems={navItems} />
      <Hero />
      <About />
      <ProjectsTitle />
      <Projects />
      <ExperienceTitle />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ProjectsTitle from "@/components/projects-title";

export default function Home() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Bruh

  return (
    <main className="min-h-screen bg-white">
      <Navbar navItems={navItems} />
      <Hero />
      <About />
      <ProjectsTitle />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

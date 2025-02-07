import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full flex-col bg-black relative overflow-hidden px-2">
      <div className="w-full" id="about">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

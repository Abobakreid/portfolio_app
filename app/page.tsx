import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full flex-col bg-black relative overflow-hidden">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <Grid />
      <Projects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </main>
  );
}

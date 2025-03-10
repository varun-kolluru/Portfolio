import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import LampDemo from "@/components/ui/lamp";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#000319] text-white overflow-hidden">
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="connect">
          <LampDemo />
        </div>
      </main>
    </>
  );
}
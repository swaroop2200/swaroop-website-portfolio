import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default Index;
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="relative min-h-screen cursor-none">
      <CustomCursor />
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
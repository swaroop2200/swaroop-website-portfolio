import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Index;
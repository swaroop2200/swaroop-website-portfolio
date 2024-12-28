import { motion } from "framer-motion";
import { Card } from "./ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML/CSS", "Bash"],
  },
  {
    title: "Frameworks",
    skills: [
      "Spring",
      "SpringBoot",
      "JUnit",
      "TestNG",
      "Mockito",
      "JSP",
      "Hibernate",
      "React",
      "Node.js",
      "Flask",
      "Langchain",
      "CDK",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "BitBucket",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Maven",
      "Gradle",
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gray-200 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-white/50 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
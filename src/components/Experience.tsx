import { motion } from "framer-motion";
import { Card } from "./ui/card";

const experiences = [
  {
    company: "Walmart",
    logo: "/lovable-uploads/eec3ebfb-8def-4a17-8401-eedb0d75986b.png",
    role: "Software Development Engineer 3",
    period: "Apr 2023 - Present",
    location: "Bangalore, India",
    description: "At Walmart, I am a key contributor to the development of Elvis, Sam's Club's Omni Returns platform, which handles both online and in-club returns, processing over 70k returns daily. I've led efforts to integrate FedEx for online returns, enabling seamless return tracking to distribution centers and managing 20k online returns per day. I also developed critical workflows for online replacements, processing 5k replacements daily. My focus has been on building asynchronous event-driven flows for invoices, receipts, settlements, and shipment tracking. Additionally, I contributed to platform improvements like graceful pod shutdowns, distributed order locking, and concurrent order processing to enhance performance and resilience. For my contributions, I received the Bravo Award for driving significant impact and innovation.",
    techStack: "Tech Stack: Azure, Java, Python, Kubernetes, Spring, Kafka, ActiveMQ, Azure SQL, Apache Camel, MemCache"
  },
  {
    company: "Amazon",
    logo: "/lovable-uploads/d93c0544-2ba2-43bb-886b-8a437f1e2088.png",
    role: "Software Development Engineer 1",
    period: "Apr 2022 - Apr 2023",
    location: "Bangalore, India",
    highlights: [
      "Working on Amazon Local Shop, enabling customers to buy from local shops",
      "Refactored team's core repository using appropriate design patterns",
      "Developed a unified UI for category-based widgets",
      "Developed features to tag Local Shop products in Amazon Search Page results",
      "Tech Stack: AWS, Java, CDK, JUnit, Gradle, Maven, Coral, Datapath, iGraph, Pipelines, Apollo",
    ],
  },
  {
    company: "Wissen Technology",
    logo: "/lovable-uploads/7c35d476-8fed-4acd-bda8-af4f3bcd64db.png",
    role: "Associate Software Engineer",
    period: "Jun 2020 - Feb 2022",
    location: "Bangalore, India",
    highlights: [
      "Worked in Morgan Stanley - Private Wealth Management division",
      "Developed customizable workflows to automate the order lifecycle",
      "Tech Stack: Java, SpringBoot and Batch, Python, Sybase, Db2, IBM mqs, Mockito",
    ],
  },
  {
    company: "Perpule",
    logo: "/lovable-uploads/6ac15b45-45d1-4d2b-acf0-642b0bb1f883.png",
    role: "Software Engineering Intern",
    period: "Jan 2020 - May 2020",
    location: "Bangalore, India",
    highlights: [
      "Worked on UltraPos, a cloud-based point of sale system",
      "Developed features for inventory management and order processing",
      "Implemented real-time order tracking and notification system",
      "Tech Stack: Node.js, React, MongoDB, Redis, AWS",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 space-y-4 md:space-y-0">
                  <div className="flex items-center gap-4">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                      <p className="text-gray-700">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right md:ml-4">
                    <p className="text-gray-700">{exp.period}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  <p className="text-gray-700 font-medium">{exp.techStack}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

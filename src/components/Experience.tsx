import { motion } from "framer-motion";
import { Card } from "./ui/card";

const experiences = [
  {
    company: "Walmart",
    logo: "/lovable-uploads/eec3ebfb-8def-4a17-8401-eedb0d75986b.png",
    role: "Software Development Engineer 3",
    period: "Apr 2023 - Present",
    location: "Bangalore, India",
    highlights: [
      "Working on Elvis, Sam's Club Omni Returns platform for both online and club returns. Processing total 70k returns/day",
      "Processing online returns and tracking them back to return centre with Fedex Integration. Processing 20k returns/day",
      "Major contributor for developing flows to process online replacements. Processing 5k replacements/day",
      "Development of critical asynchronous flows like Invoice, Refund, Settlement, Shipment Tracking which are event driven",
      "Platform Improvements like graceful shutdown of pods, concurrent processing of orders",
      "Tech Stack: Azure, Java, Python, Kubernetes, Spring, Kafka, ActiveMQ, AzureSQL, ApacheCamel, MemCache",
    ],
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
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-left">{highlight}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
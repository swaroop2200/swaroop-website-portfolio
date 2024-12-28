import { motion } from "framer-motion";
import { Card } from "./ui/card";

const experiences = [
  {
    company: "Walmart",
    role: "Software Development Engineer 3",
    period: "Apr 2023 - Present",
    location: "Bangalore, India",
    highlights: [
      "Working on Elvis, Sam's Club Omni Returns platform for both online and club returns",
      "Processing online returns and tracking them back to return centre with Fedex Integration",
      "Major contributor for developing flows to process online replacements",
      "Development of critical asynchronous flows like Invoice, Receipt, Settlement, Shipment Tracking",
      "Platform Improvements like graceful shutdown of pods, concurrent processing of orders",
      "Tech Stack: Azure, Java, Python, Kubernetes, Spring, Kafka, ActiveMQ, AzureSQL, ApacheCamel, MemCache",
    ],
  },
  {
    company: "Amazon",
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
    role: "Associate Software Engineer",
    period: "Jun 2020 - Feb 2022",
    location: "Bangalore, India",
    highlights: [
      "Worked in Morgan Stanley - Private Wealth Management division",
      "Developed customizable workflows to automate the order lifecycle",
      "Tech Stack: Java, SpringBoot and Batch, Python, Sybase, Db2, IBM mqs, Mockito",
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
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gray-200 mx-auto"></div>
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
              <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-gray-600">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
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
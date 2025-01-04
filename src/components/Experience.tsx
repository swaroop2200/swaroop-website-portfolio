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
    description: "At Amazon, I worked on the Local Shop program, empowering customers to purchase products from nearby local stores. One of my major contributions was refactoring the team's core repository by applying scalable design patterns and reusable components, accelerating widget development from a projected 6 months to just 2 months for over 10 widgets. I spearheaded the creation of a unified UI framework for category-based widgets, driving adoption across multiple teams. I also developed features that tagged Local Shop products in Amazon's search results, enhancing visibility by 17%. Additionally, I automated the code review process by developing a Slack bot, improving closure efficiency by 40%. This solution was widely adopted by other teams, further amplifying its impact.",
    techStack: "Tech Stack: AWS, Java, CDK, JUnit, Gradle, Maven, Coral, Datapath, iGraph, Pipelines, Apollo"
  },
  {
    company: "Wissen Technology",
    logo: "/lovable-uploads/7c35d476-8fed-4acd-bda8-af4f3bcd64db.png",
    role: "Associate Software Engineer",
    period: "Jun 2020 - Feb 2022",
    location: "Bangalore, India",
    description: "At Wissen Technology, I worked within Morgan Stanley's Private Wealth Management division, where I integrated a new Australian Mutual Fund Custodian into the firm's portfolio management system, contributing to a 35% expansion in the Australian customer base. I developed customizable automated workflows to manage the entire order lifecycle, reducing the operations team's workload by approximately 4 hours daily. I also implemented batch jobs that generated daily reports, monitoring over 45 breach rules to ensure compliance and risk mitigation for high-net-worth clients. This work helped streamline operations and improved the accuracy and efficiency of financial reporting.",
    techStack: "Tech Stack: Java, Spring Boot, Spring Batch, Python, Sybase, Db2, IBM MQ, Mockito"
  },
  {
    company: "Perpule",
    logo: "/lovable-uploads/6ac15b45-45d1-4d2b-acf0-642b0bb1f883.png",
    role: "Software Engineering Intern",
    period: "Jan 2020 - May 2020",
    location: "Bangalore, India",
    description: "During my internship at Perpule (later acquired by Amazon), I contributed to the development of self-checkout and self-ordering solutions for offline stores, malls, and cafeterias. I played a hands-on role in integrating Amplitude analytics to track user behavior and optimize product offerings. Additionally, I automated mobile app testing workflows using Appium and Cucumber, enhancing the speed and reliability of testing processes. This experience allowed me to thrive in a fast-paced startup environment, wearing multiple hats and contributing directly to Perpule's growth and success.",
    techStack: "Tech Stack: Java, Android, React Native, Spring Boot, GCP, AWS, MySQL"
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
import { motion } from "framer-motion";
import { Card } from "./ui/card";

const devTools = {
  "OS": ["Windows", "Mac OS", "Linux"],
  "VCS": ["Git", "GitHub", "BitBucket"],
  "Cloud": ["AWS", "Azure"],
  "Database": ["Azure SQL", "RDS", "S3", "CosmosDB", "DynamoDB"],
  "Messaging": ["ActiveMQ", "Kafka", "Event Hub", "SQS"],
  "Security": ["AD", "IAM", "Service Registry", "SSL"],
  "Cache": ["Guava", "Redis", "MemCache"],
  "Containerization": ["K8s", "Docker"],
  "CI/CD": ["GitOps", "Jenkins"],
  "Observability": ["Prometheus", "Grafana", "CloudWatch", "Splunk", "Open Observe"],
  "Build Tools": ["Brazil", "Maven", "Ant", "Gradle"],
  "Gen AI": ["Azure OpenAI"],
  "IDE": ["VS Code", "IntelliJ"]
};

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
  }
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-purple-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Developer Tools & Technologies</h3>
            <div className="space-y-4">
              {Object.entries(devTools).map(([category, tools]) => (
                <div key={category} className="space-y-2">
                  <p className="font-medium text-gray-900">{category} </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-purple-100 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
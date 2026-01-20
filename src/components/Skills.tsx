import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Cloud,
  Database,
  MessageSquare,
  Shield,
  Zap,
  Container,
  GitBranch,
  Eye,
  Wrench,
  Sparkles,
  Code,
  GitMerge,
  Monitor,
} from "lucide-react";

const devTools = [
  { category: "Operating Systems", icon: Monitor, tools: ["Windows", "Mac OS", "Linux"], color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
  { category: "Version Control", icon: GitMerge, tools: ["Git", "GitHub", "BitBucket"], color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
  { category: "Cloud", icon: Cloud, tools: ["AWS", "Azure", "GCP"], color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
  { category: "Database", icon: Database, tools: ["Azure SQL", "RDS", "S3", "CosmosDB", "DynamoDB", "Postgres", "Cassandra"], color: "bg-green-100 text-green-700 hover:bg-green-200" },
  { category: "Messaging", icon: MessageSquare, tools: ["ActiveMQ", "Kafka", "Event Hub", "SQS"], color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
  { category: "Security", icon: Shield, tools: ["AD", "IAM", "Service Registry", "SSL", "Akeyless"], color: "bg-red-100 text-red-700 hover:bg-red-200" },
  { category: "Cache", icon: Zap, tools: ["Guava", "Redis", "MemCache"], color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
  { category: "Containerization", icon: Container, tools: ["Kubernetes", "Docker", "Podman"], color: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200" },
  { category: "CI/CD", icon: GitBranch, tools: ["GitOps", "Jenkins"], color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200" },
  { category: "Observability", icon: Eye, tools: ["Prometheus", "Grafana", "CloudWatch", "Splunk", "Open Observe"], color: "bg-teal-100 text-teal-700 hover:bg-teal-200" },
  { category: "Build Tools", icon: Wrench, tools: ["Brazil", "Maven", "Ant", "Gradle"], color: "bg-amber-100 text-amber-700 hover:bg-amber-200" },
  { category: "Gen AI", icon: Sparkles, tools: ["Azure OpenAI", "Claude Code", "OpenAI SDK", "GenAI"], color: "bg-pink-100 text-pink-700 hover:bg-pink-200" },
  { category: "IDE", icon: Code, tools: ["VS Code", "IntelliJ", "Cursor"], color: "bg-violet-100 text-violet-700 hover:bg-violet-200" },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML/CSS", "Bash"],
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-purple-500 to-pink-500",
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
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
              <Card className="p-6 h-full backdrop-blur-md bg-white/80 border border-gray-200/50 shadow-lg hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200/50 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 transform hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`h-1 w-8 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <div className={`h-1 w-8 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100/80 rounded-full text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:scale-105 transition-all duration-200 cursor-default"
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
          <Card className="p-6 backdrop-blur-md bg-white/80 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 text-center">
              Developer Tools & Technologies
            </h3>
            <div className="space-y-4">
              {devTools.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.category} className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-2 min-w-[160px]">
                      <div className={`p-1.5 rounded-lg ${item.color.split(' ')[0]}`}>
                        <IconComponent className={`w-4 h-4 ${item.color.split(' ')[1]}`} />
                      </div>
                      <span className="font-medium text-gray-800 text-sm">{item.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`px-3 py-1 rounded-full text-sm ${item.color} transition-all duration-200 cursor-default hover:scale-105`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

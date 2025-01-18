import { motion } from "framer-motion";
import { Card } from "./ui/card";

export const About = () => {
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
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-200 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 backdrop-blur-sm bg-white/30 border border-gray-200 hover:bg-pink-100/50 hover:border-pink-200 transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-600 leading-relaxed">
              Pragmatic, customer-centric Software Engineer with 4 years of experience in designing and developing scalable back-end systems on AWS, Azure, and Kubernetes. Proven track record in optimizing performance, increasing automation, enhancing observability, implementing efficient CI/CD practices, GEN AI productivity, mentorship and Agile (SCRUM) methodologies.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
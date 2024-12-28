import { motion } from "framer-motion";
import { Card } from "./ui/card";

export const Education = () => {
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
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gray-200 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">PES University</h3>
                <p className="text-gray-600">B.Tech Computer Science Engineering</p>
                <p className="text-gray-500">GPA: 9.0, Majors in Algorithms and Computing</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">2016 - 2020</p>
                <p className="text-gray-500">Bangalore, India</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
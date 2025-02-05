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
          <Card className="p-8 bg-white border border-gray-200 hover:bg-pink-100 hover:border-pink-200 transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-600 leading-relaxed">
              As a Software Engineer with four years of experience across retail industry giants like Walmart and Amazon, financial leader Morgan Stanley, and a dynamic startup environment, I bring a robust background in building and optimizing scalable backend systems on the cloud (AWS, Azure, GCP). I have successfully contributed to high-impact projects such as Walmart's Sam's Club Omni Returns, Amazon's Local Shop, and Morgan Stanley's portfolio management solutions, where I've been recognized for enhancing system efficiency and customer experience.
              <br /><br />
              With a track record of driving GEN AI productivity, streamlining SDLC practices, and aligning technical solutions with business needs, I am excited to contribute my expertise to innovative engineering teams.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
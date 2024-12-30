import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="mb-8 flex justify-center">
            <img
              src="/lovable-uploads/bb1ef300-bbcb-4264-87ea-39c004a056ed.png"
              alt="Swaroop Astakar Shekar"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Swaroop Astakar Shekar
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Software Development Engineer at Walmart
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200">
            <p className="text-sm text-gray-600">Location</p>
            <p className="font-medium text-gray-800">Bangalore, India</p>
          </Card>
          <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200">
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-800">swaroop.as97@gmail.com</p>
          </Card>
          <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200">
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium text-gray-800">+91-8546989486</p>
          </Card>
          <a 
            href="https://www.linkedin.com/in/swaroop-as-836484169/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">LinkedIn</p>
                <p className="font-medium text-gray-800">Connect with me</p>
              </div>
            </Card>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
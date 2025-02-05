import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Linkedin, Github, MapPin, Mail, Phone, Link } from "lucide-react";
import { TypeWriter } from "./TypeWriter";
import { useState } from "react";

export const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [isTitleComplete, setIsTitleComplete] = useState(false);

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
            <div className="w-64 h-64 rounded-full p-1 bg-blue-100 shadow-xl">
              <img
                src="/lovable-uploads/364f415c-0044-484d-be9b-78bc889987b3.png"
                alt="Swaroop Astakar Shekar"
                className="w-full h-full rounded-full object-cover border-4 border-white"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 min-h-[60px] md:min-h-[80px]">
            <TypeWriter 
              text="Swaroop Astakar Shekar" 
              delay={150}
              onComplete={() => {
                setShowTitle(true);
                setIsNameComplete(true);
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto min-h-[30px] md:min-h-[36px]">
            {showTitle && (
              <TypeWriter 
                text="Software Development Engineer" 
                delay={100}
                onComplete={() => setIsTitleComplete(true)}
              />
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
          <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium text-gray-800">Bangalore, India</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-800 truncate">swaroop.as97@gmail.com</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-800">+91-8546989486</p>
              </div>
            </div>
          </Card>
          <a 
            href="https://www.linkedin.com/in/swaroop-as-836484169/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-1"
          >
            <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="flex-grow">
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="font-medium text-gray-800">Connect with me</p>
                </div>
                <Link className="w-4 h-4 text-gray-400" />
              </div>
            </Card>
          </a>
          <a 
            href="https://github.com/swaroop2200"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-1"
          >
            <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-gray-50 hover:border-gray-200 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-gray-800 flex-shrink-0" />
                <div className="flex-grow">
                  <p className="text-sm text-gray-600">GitHub</p>
                  <p className="font-medium text-gray-800">View my projects</p>
                </div>
                <Link className="w-4 h-4 text-gray-400" />
              </div>
            </Card>
          </a>
          <a 
            href="https://leetcode.com/u/user9531W/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-1"
          >
            <Card className="p-4 backdrop-blur-sm bg-white/50 border border-gray-200 hover:bg-gray-50 hover:border-gray-200 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
              <div className="flex items-center gap-3">
                <img 
                  src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" 
                  alt="LeetCode"
                  className="w-5 h-5 object-contain flex-shrink-0"
                />
                <div className="flex-grow">
                  <p className="text-sm text-gray-600">LeetCode</p>
                  <p className="font-medium text-gray-800">View my profile</p>
                </div>
                <Link className="w-4 h-4 text-gray-400" />
              </div>
            </Card>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.2
        }}
      />
    </div>
  );
};
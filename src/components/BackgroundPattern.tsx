import { motion } from "framer-motion";

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100/30 to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div 
        className="absolute inset-0 animate-pattern-move" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(147, 197, 253, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 197, 253, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px',
        }}
      />
    </div>
  );
};
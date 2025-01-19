import { motion } from "framer-motion";

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"
          style={{ mixBlendMode: "multiply" }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_80%,#FDE1D3,transparent)]"
          style={{ mixBlendMode: "multiply" }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_20%_50%,#E5DEFF,transparent)]"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </div>
  );
};
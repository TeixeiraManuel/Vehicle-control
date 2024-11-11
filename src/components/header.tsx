import { BellRing, User } from "lucide-react";
import { motion } from "framer-motion";
export function Header() {
  return (
    <header className="flex flex-row justify-end items-start pt-16 w-full px-12">
      <motion.div
        className="flex items-center justify-center gap-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BellRing />
        </motion.div>

        <motion.span
          className="bg-blue-500 text-white rounded-full p-2 cursor-pointer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <User className="w-7 h-7" />
          </motion.div>
        </motion.span>

        <motion.p
          className="cursor-pointer"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            color: "#3b82f6",
          }}
        >
          srsaimbro@gmail.com
        </motion.p>
      </motion.div>
    </header>
  );
}

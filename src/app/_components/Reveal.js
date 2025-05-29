"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // slide up from below
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

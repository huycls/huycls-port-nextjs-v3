"use client";

import { motion } from "motion/react";
import { useState } from "react";
import LineGrown from "../LineGrown";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-100 bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => setIsVisible(false)}>
      <div className="flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg h-10 flex items-start text-[#333333] font-semibold">
          Portfolio
        </motion.div>
        <LineGrown
          color="bg-[#333333]"
          className="!h-10 w-px mx-4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl h-10 text-[#333333] flex items-end font-semibold">
          Huy Nguyen
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

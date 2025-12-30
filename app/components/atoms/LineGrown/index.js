"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const LineGrown = ({ className = "", color = "bg-white", ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={`relative h-px w-full ${color} animationGrownIn ${className}`}
      {...props}>
      <motion.div
        className={`absolute inset-0 ${color}`}
        style={{
          transformOrigin: "left center",
          scaleX: isInView ? 1 : 0,
          transition: "transform 0.5s ease-out",
        }}
      />
    </div>
  );
};

export default LineGrown;

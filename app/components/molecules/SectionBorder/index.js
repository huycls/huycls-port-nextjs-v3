"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

const SectionBorder = ({ children, className = "" }) => {
  const sectionRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    innerWidth: 0,
    innerHeight: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(sectionRef.current);

        const padding = {
          top: parseFloat(computedStyle.paddingTop) || 0,
          right: parseFloat(computedStyle.paddingRight) || 0,
          bottom: parseFloat(computedStyle.paddingBottom) || 0,
          left: parseFloat(computedStyle.paddingLeft) || 0,
        };

        // Calculate inner dimensions (after padding)
        const innerWidth = rect.width - padding.left - padding.right;
        const innerHeight = rect.height - padding.top - padding.bottom;

        setDimensions({
          width: rect.width,
          height: rect.height,
          padding,
          innerWidth,
          innerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const borderWidth = 2;

  const getRectanglePath = (innerWidth, innerHeight, padding) => {
    const x = padding.left;
    const y = padding.top;
    const w = innerWidth;
    const h = innerHeight;
    return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`;
  };

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {dimensions.width > 0 &&
        dimensions.height > 0 &&
        dimensions.innerWidth > 0 &&
        dimensions.innerHeight > 0 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: "visible" }}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <motion.path
              d={getRectanglePath(
                dimensions.innerWidth,
                dimensions.innerHeight,
                dimensions.padding
              )}
              fill="none"
              stroke="currentColor"
              strokeWidth={borderWidth}
              className="text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </svg>
        )}
      {children}
    </div>
  );
};

export default SectionBorder;


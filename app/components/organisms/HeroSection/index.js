"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import TiltedCard from "../../molecules/TiltedCard";
import LogoLoop from "../../molecules/LogoLoop";
import { FaReact, FaGithub, FaDocker } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const techLogos = [
  {
    node: <FaReact className="text-white" />,
    title: "React",
    alt: "React",
  },
  {
    node: <FaGithub className="text-white" />,
    title: "GitHub",
    alt: "GitHub",
  },
  {
    node: <FaDocker className="text-white" />,
    title: "Docker",
    alt: "Docker",
  },
  {
    node: <RiNextjsLine className="text-white" />,
    title: "Next.js",
    alt: "Next.js",
  },
  {
    node: <TbBrandReactNative className="text-white" />,
    title: "React Native",
    alt: "React Native",
  },
  {
    node: <SiExpress className="text-white" />,
    title: "Express",
    alt: "Express",
  },
  {
    node: <TbSql className="text-white" />,
    title: "SQL",
    alt: "SQL",
  },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
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
    <section
      ref={sectionRef}
      className="relative w-full h-screen lg:pt-20 pb-10 py-10 px-10 mx-auto">
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

      <div className="flex justify-between p-10 items-center w-full h-full">
        <div className="w-1/3 flex flex-col justify-between h-full text-white">
          <div>
            <motion.h1
              className="text-3xl font-bold lg:mb-10 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
              Huy Nguyen
            </motion.h1>
            <motion.p
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 2.5 }}>
              Frontend Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}>
              I'm a frontend developer with a passion for creating beautiful and
              functional web applications.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}>
              I'm a frontend developer with a passion for creating beautiful and
              functional web applications.
            </motion.p>
          </div>
        </div>
        <div className="flex w-1/2 overflow-hidden flex-col justify-between items-center h-full">
          <div></div>
          <TiltedCard
            imageSrc="/assets/images/avatar-me-port.jpg"
            altText="Huy Nguyen"
            captionText="Huy Nguyen"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
          />
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

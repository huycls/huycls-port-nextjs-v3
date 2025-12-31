"use client";

import { motion } from "motion/react";
import TiltedCard from "../../molecules/TiltedCard";
import LogoLoop from "../../molecules/LogoLoop";
import SectionBorder from "../../molecules/SectionBorder";
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
  return (
    <div className="w-full h-full">
      <div className="flex justify-between p-10 items-center w-full h-full">
        <div className="w-1/3 flex flex-col justify-between h-full text-white">
          <div>
            <motion.h1
              className="text-3xl font-bold lg:mb-10 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}>
              Huy Nguyen
            </motion.h1>
            <motion.p
              className="mb-4 font-semibold text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}>
              Frontend Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
              I'm a frontend developer with a passion for creating beautiful and
              functional web applications.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
              @2025
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
              With 3 years of experience in the field, I've worked on a variety
              of projects, from small personal websites to large scale
              enterprise applications. <br />
              I'm a quick learner and I'm always looking for new challenges and
              opportunities to grow.
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
    </div>
  );
};

export default HeroSection;

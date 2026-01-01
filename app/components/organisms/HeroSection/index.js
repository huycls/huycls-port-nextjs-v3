"use client";

import { motion } from "motion/react";
import TiltedCard from "../../molecules/TiltedCard";
import LogoLoop from "../../molecules/LogoLoop";
import SectionBorder from "../../molecules/SectionBorder";
import { FaReact, FaGithub, FaDocker, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import ShinyText from "../../atoms/ShinyText";
import { RainbowButton } from "../../atoms/RainbowButton";

// Social links data
const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/hoanghuy",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/hoanghuy",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/hoanghuy",
    label: "X (Twitter)",
  },
  {
    icon: HiOutlineMail,
    href: "mailto:hoanghuy@email.com",
    label: "Email",
  },
];

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
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/18UFhbNE7UCwe-KF3gvxi9Py2bYwUfhOL/view?usp=sharing";
    link.download = "HuyNguyen_CV.pdf";
    link.click();
  };
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-thin">
      <div className="flex overflow-hidden justify-between px-4 sm:px-8 md:px-16 max-w-4xl mx-auto py-6 md:py-10 items-center w-full h-full">
        <div className="w-full flex flex-col justify-between h-full text-white">
          {/* Main content area */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 items-center md:items-start">
            {/* Avatar - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:block shrink-0">
              <TiltedCard
                imageSrc="/assets/images/avatar-me-port.jpg"
                altText="Huy Nguyen"
                captionText="Huy Nguyen"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
              />
            </div>

            {/* Mobile Avatar - Smaller, shown only on mobile */}
            <div className="md:hidden shrink-0">
              <TiltedCard
                imageSrc="/assets/images/avatar-me-port.jpg"
                altText="Huy Nguyen"
                captionText="Huy Nguyen"
                containerHeight="180px"
                containerWidth="150px"
                imageHeight="180px"
                imageWidth="150px"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-between flex-1 text-center md:text-left">
              <div>
                <motion.h1
                  className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}>
                  <ShinyText
                    text="Huy Nguyen"
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                  />
                </motion.h1>
                <motion.p
                  className="mb-3 md:mb-4 font-semibold text-base sm:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}>
                  Frontend Developer
                </motion.p>
                <motion.p
                  className="mb-2 text-gray-400 font-semibold text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}>
                  Ho Chi Minh, Viet Nam
                </motion.p>
                <motion.p
                  className="text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}>
                  <span className="bg-green-400 w-2 h-2 rounded-full inline-block mr-2"></span>
                  Currently available for work
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                  className="mt-4 flex items-center justify-center md:justify-start gap-2">
                  <RainbowButton onClick={handleDownloadCV}>
                    Download CV
                  </RainbowButton>
                </motion.div>
              </div>

              {/* Description - Hidden on mobile */}
              <div className="mt-6 md:mt-10 hidden sm:block">
                <motion.p
                  className="space-y-2 text-xs sm:text-sm text-gray-300 max-w-md xl:max-w-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
                  I'm a frontend developer with a passion for building web
                  applications that are both functional and aesthetically
                  pleasing. Always learning new technologies and love solving
                  complex problems.
                  <br />
                  <br />
                  When learning new technologies, I always try to apply them to
                  real projects to gain practical experience.
                </motion.p>
                <motion.div
                  className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2.3 }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg border border-gray-600 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 2.4 + index * 0.1,
                      }}>
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Social Icons - Shown only on mobile */}
              <motion.div
                className="flex items-center justify-center gap-3 mt-6 sm:hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-600 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}>
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Logo Loop */}
          <div className="mt-6 md:mt-0">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={36}
              gap={30}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

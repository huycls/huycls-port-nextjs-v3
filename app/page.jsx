"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Menu from "./components/molecules/Menu";
import LoadingScreen from "./components/atoms/LoadingScreen";
import HeroSection from "./components/organisms/HeroSection";
import GooeyNav from "./components/molecules/GooeyNav";
import LightRays from "./components/molecules/LightRay";
import Projects from "./components/templates/Projects";
import HomeSection from "./components/templates/Home";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setCurrentSection(hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "#home":
        return <HomeSection />;
      case "#projects":
        return <Projects />;
      case "#works":
        return (
          <section
            id="works"
            className="py-20">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center text-white">
                Works
              </h1>
            </div>
          </section>
        );
      case "#contact":
        return (
          <section
            id="contact"
            className="py-20">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center text-white">
                Contact
              </h1>
            </div>
          </section>
        );
      default:
        return <HomeSection />;
    }
  };

  const sectionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <LoadingScreen />
      <>
        <Menu
          currentSection={currentSection}
          onSectionChange={handleSectionChange}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full h-full">
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </>
    </>
  );
}

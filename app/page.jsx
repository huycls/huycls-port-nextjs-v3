"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Menu from "./components/molecules/Menu";
import LoadingScreen from "./components/atoms/LoadingScreen";
import HeroSection from "./components/organisms/HeroSection";
import GooeyNav from "./components/molecules/GooeyNav";
import LightRays from "./components/molecules/LightRay";
import Projects from "./components/templates/Projects";
import Works from "./components/templates/Works";
import Contact from "./components/templates/Contact";
import HomeSection from "./components/templates/home";

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
        return <Works />;
      case "#contact":
        return <Contact />;
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Work experience data - có thể tách ra file riêng sau này
const workExperienceData = [
  {
    id: 1,
    period: "2022-Now",
    company: "Gleads",
    position: "Senior Frontend Engineer",
    roleSummary:
      "I owned frontend architecture for a scalable SaaS platform used by...",
    keyImpacts: [
      { text: "-35% load time", highlight: "-35%" },
      { text: "Faster release cycle", highlight: "Faster" },
    ],
    workingStyle: ["Product-driven", "UI-focused"],
  },
  {
    id: 2,
    period: "2021-2022",
    company: "Thanh Tin Tech",
    position: "Frontend Engineer",
    roleSummary:
      "Built and maintained multiple client-facing applications with focus on performance...",
    keyImpacts: [
      { text: "Built dashboard from scratch", highlight: "scratch" },
      { text: "Improved test coverage", highlight: "Improved" },
    ],
    workingStyle: ["Team-oriented", "Agile"],
  },
];

const WorkItem = ({ work, isActive, onClick }) => {
  return (
    <motion.div
      className={`flex items-center gap-2 cursor-pointer group px-3 lg:px-4 py-2 rounded-lg border transition-all duration-300 shrink-0 lg:shrink lg:w-full ${
        isActive
          ? "border-amber-400 bg-amber-400/10"
          : "border-gray-700 hover:border-gray-500"
      }`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}>
      {/* Bullet point */}
      <motion.span
        className={`w-2 h-2 rounded-full flex-none transition-colors duration-300 ${
          isActive ? "bg-amber-400" : "bg-rose-400"
        }`}
        animate={{ scale: isActive ? 1.2 : 1 }}
      />

      {/* Work info */}
      <div className="flex flex-col min-w-0">
        <span
          className={`font-mono text-xs sm:text-sm transition-colors duration-300 ${
            isActive ? "text-amber-400" : "text-cyan-400"
          }`}>
          {work.period}
        </span>
        <span
          className={`text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap lg:whitespace-normal ${
            isActive ? "text-white" : "text-gray-300 group-hover:text-white"
          }`}>
          {work.company}
        </span>
      </div>
    </motion.div>
  );
};

const WorkDetails = ({ work }) => {
  return (
    <motion.div
      key={work.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full flex flex-col space-y-6">
      {/* Position Title */}
      <div className="border-l-2 border-gray-700 pl-4">
        <h3 className="text-white font-medium text-lg">{work.position}</h3>
      </div>

      {/* Role Summary */}
      <div className="border-l-2 border-gray-700 pl-4">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Role Summary
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          I <span className="text-rose-400">owned</span> frontend architecture
          for a scalable SaaS platform used by...
        </p>
      </div>

      {/* Key Impacts */}
      <div className="border-l-2 border-gray-700 pl-4">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
          Key Impacts
        </p>
        <ul className="space-y-2">
          {work.keyImpacts.map((impact, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-2 text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}>
              <span className="text-gray-500">•</span>
              <span className="text-white">
                {impact.text.split(impact.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-cyan-400">{impact.highlight}</span>
                    )}
                  </span>
                ))}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Working Style */}
      <div className="border-l-2 border-gray-700 pl-4">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Working Style
        </p>
        <p className="text-white text-sm">
          {work.workingStyle.map((style, idx) => (
            <span key={idx}>
              <span className="text-rose-400">{style}</span>
              {idx < work.workingStyle.length - 1 && (
                <span className="text-gray-500"> • </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeWork, setActiveWork] = useState(workExperienceData[0]);

  return (
    <section id="works" className="w-full h-full py-6 px-4">
      <div className="container mx-auto h-full flex flex-col">
        {/* Header */}
        <motion.h2
          className="font-mono text-2xl tracking-widest mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <span className="text-amber-400">WORK</span>
          <span className="text-white"> EXPERIENCE</span>
        </motion.h2>

        {/* Mobile: Vertical layout, Desktop: Two columns */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-8 min-h-0">
          {/* Work Tabs - Horizontal on mobile, Vertical on desktop */}
          <motion.div
            className="shrink-0 lg:w-48 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto scrollbar-thin pb-2 lg:pb-0 lg:pr-6 lg:border-r lg:border-dashed lg:border-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex lg:flex-col gap-3 lg:gap-2">
              {workExperienceData.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}>
                  <WorkItem
                    work={work}
                    isActive={activeWork.id === work.id}
                    onClick={() => setActiveWork(work)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Details */}
          <motion.div
            className="flex-1 border border-dashed border-gray-700 rounded-lg p-4 sm:p-6 overflow-y-auto scrollbar-thin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <AnimatePresence mode="wait">
              <WorkDetails work={activeWork} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { RainbowButton } from "../../atoms/RainbowButton";

// Component for scrollable image on hover
const ScrollableImage = ({ src, alt, containerHeight = 200 }) => {
  const imageRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setScrollAmount(0);
    setIsHovered(false);
    setImageLoaded(false);
  }, [src]);

  // Calculate scroll amount after image loads
  const handleImageLoad = () => {
    setImageLoaded(true);
    if (imageRef.current) {
      const imgHeight = imageRef.current.offsetHeight;
      const overflow = imgHeight - containerHeight;
      setScrollAmount(overflow > 0 ? overflow : 0);
    }
  };

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{ height: containerHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <motion.img
        key={src}
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-auto"
        onLoad={handleImageLoad}
        initial={{ y: 0 }}
        animate={{
          y: isHovered && imageLoaded && scrollAmount > 0 ? -scrollAmount : 0,
        }}
        transition={{
          duration:
            scrollAmount > 1500
              ? 10
              : scrollAmount > 500
              ? 3
              : scrollAmount > 300
              ? 2
              : 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Project data - có thể tách ra file riêng sau này
const projectsData = [
  {
    id: 1,
    name: "BBCIncorp",
    category: "Web, Payment Gateway, CRM, Portal",
    title: "BBCIncorp",
    description:
      "A website for a company that provides services to the public. Optimized for SEO and performance. Includes an onboarding process and a CRM system. Portal for clients to manage their accounts and projects.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Redux",
      "Docker",
      "AWS",
    ],
    year: "2024",
    image: "/assets/images/bbcprojects-1.png",
    link: "https://bbcincorp.com/offshore",
  },
  {
    id: 2,
    name: "Gleads Global",
    category: "Web, Payment Gateway",
    title: "Gleads Global",
    description:
      "A website for a company that provides services to the public. Optimized for SEO and performance",
    tech: ["React", "D3.js", "Node.js"],
    year: "2024",
    image: "/assets/images/gleadsprojects-1.png",
    link: "https://gleadsglobal.com/en",
  },
  {
    id: 3,
    name: "MotoX",
    category: "Web",
    title: "MotoX",
    description:
      "A wordpress website for a company that provides services to the public. Optimized for SEO and performance",
    tech: ["Wordpress", "Elementor", "Woocommerce"],
    year: "2023",
    image: "/assets/images/motoxprojects-1.png",
    link: "https://motox.vn/",
  },
  {
    id: 4,
    name: "Project D",
    category: "Mobile App",
    title: "Project D",
    description:
      "Cross-platform mobile application with seamless user experience and offline support.",
    tech: ["React Native", "Firebase", "Redux"],
    year: "2023",
    image: "/assets/images/project-placeholder.jpg",
    link: "#",
  },
  {
    id: 5,
    name: "Project E",
    category: "E-commerce",
    title: "Project E",
    description:
      "Full-featured e-commerce platform with payment integration and inventory management.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    year: "2022",
    image: "/assets/images/project-placeholder.jpg",
    link: "#",
  },
];

const ProjectItem = ({ project, isActive, onClick }) => {
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

      {/* Project info */}
      <div className="flex flex-col min-w-0">
        <span
          className={`font-medium text-sm transition-colors duration-300 ${
            isActive
              ? "text-amber-400"
              : "text-rose-400 group-hover:text-rose-300"
          }`}>
          {project.name}
        </span>
        <span className="text-gray-400 text-xs whitespace-nowrap lg:whitespace-normal lg:line-clamp-1">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};

const ProjectPreview = ({ project }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full flex flex-col overflow-y-scroll scrollbar-thin">
      <div className="flex-none relative border-2 border-dashed border-gray-600 rounded-lg mb-6 bg-black/20 overflow-hidden">
        <div className="absolute top-0 right-0 bg-white select-none text-gray-600 font-semibold p-1 rounded-sm text-xs z-10 drop-shadow-xl">
          Hover to see full website
        </div>
        {project.image ? (
          <ScrollableImage
            src={project.image}
            alt={project.name}
            containerHeight={300}
          />
        ) : (
          <div className="text-center text-gray-500 h-[200px] flex flex-col items-center justify-center">
            <p>[ Project Preview Area ]</p>
            <p className="text-sm mt-2">- Large mockup / screenshot</p>
            <p className="text-sm">- or abstract placeholder</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-gray-400 text-sm">Title: </span>
          <span className="text-white font-semibold text-lg">
            {project.title}
          </span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-400 text-sm">Tech:</span>
          <div className="flex items-center gap-2">
            {project.tech.map((tech, index) => (
              <span key={tech} className="text-cyan-400 text-sm">
                {tech}
                {index < project.tech.length - 1 && (
                  <span className="text-gray-500 ml-2">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-gray-400 text-sm">Year: </span>
          <span className="text-white text-sm">{project.year}</span>
        </div>

        <motion.a
          href={project.link}
          className="inline-flex mt-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <RainbowButton>View case study</RainbowButton>
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-4 right-4 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <FiArrowDown className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section id="projects" className="w-full h-full py-6 px-4">
      <div className="container mx-auto h-full flex flex-col">
        {/* Header */}
        <motion.h2
          className="text-amber-400 text-2xl font-mono font-semibold tracking-widest mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          PROJECTS
        </motion.h2>

        {/* Main Content */}
        {/* Mobile: Vertical layout, Desktop: Two columns */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-8 min-h-0">
          {/* Project Tabs - Horizontal on mobile, Vertical on desktop */}
          <motion.div
            className="shrink-0 lg:w-56 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto scrollbar-thin pb-2 lg:pb-0 lg:pr-6 lg:border-r lg:border-dashed lg:border-gray-700"
            initial={{ opacity: 0, y: -20, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex lg:flex-col gap-3 lg:gap-2">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}>
                  <ProjectItem
                    project={project}
                    isActive={activeProject.id === project.id}
                    onClick={() => setActiveProject(project)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Preview Area */}
          <motion.div
            className="flex-1 border border-dashed border-gray-700 rounded-lg p-4 sm:p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <AnimatePresence mode="wait">
              <ProjectPreview project={activeProject} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

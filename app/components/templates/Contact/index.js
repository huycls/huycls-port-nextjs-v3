"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FiCopy, FiDownload, FiCheck } from "react-icons/fi";

// Contact data - có thể tách ra file riêng sau này
const contactData = {
  email: "hoanghuy@email.com",
  linkedin: "linkedin.com/in/hoanghuy",
  github: "github.com/hoanghuy",
  cvUrl: "/assets/cv.pdf",
  location: "Vietnam",
};

const ContactCard = ({ label, value, index }) => {
  return (
    <motion.div
      className="border-l border-gray-700 pl-4 py-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}>
      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-white text-sm font-mono">{value}</p>
    </motion.div>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleDownloadCV = () => {
    // Tạo link download CV
    const link = document.createElement("a");
    link.href = contactData.cvUrl;
    link.download = "HuyNguyen_CV.pdf";
    link.click();
  };

  return (
    <section id="contact" className="w-full h-full py-6 px-4">
      <div className="container mx-auto h-full flex flex-col">
        {/* Header */}
        <motion.h2
          className="text-amber-400 text-sm font-mono tracking-widest mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          CONTACT
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-white text-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          Let's build something{" "}
          <span className="text-rose-400">meaningful</span> together.
        </motion.p>

        {/* Contact Info Box */}
        <motion.div
          className="border border-dashed border-gray-700 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="space-y-4">
            <ContactCard label="Email" value={contactData.email} index={0} />
            <ContactCard
              label="LinkedIn"
              value={contactData.linkedin}
              index={1}
            />
            <ContactCard label="GitHub" value={contactData.github} index={2} />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          {/* Copy Email Button */}
          <motion.button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-white border border-gray-600 px-4 py-2 rounded hover:bg-white/10 transition-colors duration-300 text-sm font-mono"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            {copied ? (
              <>
                <FiCheck className="w-4 h-4 text-green-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <span>[</span>
                <span>Copy email</span>
                <span>]</span>
              </>
            )}
          </motion.button>

          {/* Download CV Button */}
          <motion.button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 text-white border border-gray-600 px-4 py-2 rounded hover:bg-white/10 transition-colors duration-300 text-sm font-mono"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <span>[</span>
            <span>Download CV</span>
            <span>]</span>
          </motion.button>
        </motion.div>

        {/* Footer - Location */}
        <motion.p
          className="text-sm mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <span className="text-white">Based </span>
          <span className="text-cyan-400">in </span>
          <span className="text-rose-400">{contactData.location}</span>
          <span className="text-gray-500"> • </span>
          <span className="text-white">Available </span>
          <span className="text-cyan-400">for </span>
          <span className="text-white">remote work</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;


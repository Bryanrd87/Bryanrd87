import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const MainContent = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.div variants={item}>
        <About />
      </motion.div>
      <motion.div variants={item}>
        <Experience />
      </motion.div>
      <motion.div variants={item}>
        <Education />
      </motion.div>
    </motion.div>
  );
};

export default MainContent;

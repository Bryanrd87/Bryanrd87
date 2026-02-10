import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 glass border-b border-white/5"
    >
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            RAYDEL DANIEL <span className="text-blue-400">ABREU MACEO</span>
          </h1>
          <p className="text-lg text-slate-300 font-medium mt-1">
            Sr. Full Stack Developer
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 mt-1">
            <MapPin size={14} />
            <p className="text-sm">Spain</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
          <a href="tel:+34642857787" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={16} />
            <span>+34 642 85 77 87</span>
          </a>
          <a href="mailto:bryanrd87@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={16} />
            <span>bryanrd87@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rdabreu87/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500/20"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

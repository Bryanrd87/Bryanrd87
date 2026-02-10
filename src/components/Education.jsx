import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="glass-card rounded-2xl p-6 md:p-8 hover:bg-slate-800/50 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
          <GraduationCap size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">Education</h2>
      </div>
      
      <div className="group">
        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
          Computer Engineering (Ingeniero en Ciencias Informáticas)
        </h3>
        <p className="text-lg text-slate-300 mt-1">
          University of Computer Sciences
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
          <Calendar size={14} />
          <span>2006 - 2011</span>
        </div>
      </div>
    </section>
  );
};

export default Education;

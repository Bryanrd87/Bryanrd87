import React from "react";
import { User } from "lucide-react";

const About = () => {
  return (
    <section className="glass-card rounded-2xl p-6 md:p-8 hover:bg-slate-800/50 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <User size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">About Me</h2>
      </div>
      
      <div className="space-y-4 text-slate-300 leading-relaxed">
        <p>
          Senior .NET Developer with 14+ years shipping production software.
          Strong in .NET/C#, DDD, SOLID/TDD, and API integration;
          experienced delivering end-to-end features with Vue.js/TypeScript
          and MongoDB. Currently focused on building scalable systems
          with Event-Driven Architecture (EDA) and reliable async workflows.
        </p>
        <p className="font-semibold text-blue-400">
          Spain-based • ES/EN
        </p>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceItem = ({ role, company, period, description, techStack }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Timeline Line (Desktop) */}
    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-4"></div>
    
    <div className="md:ml-12 relative group">
      {/* Timeline Dot */}
      <div className="hidden md:block absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 z-10 group-hover:bg-blue-500 transition-colors duration-300"></div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {role} <span className="text-slate-500 font-normal">at</span> {company}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-slate-400 mt-1 mb-3">
          <Calendar size={14} />
          <span>{period}</span>
        </div>
        
        {description && (
          <p className="text-slate-300 mb-4 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
        
        {techStack && (
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
            <p className="text-sm text-slate-400 leading-relaxed">
              <strong className="text-blue-400">Technical Environment:</strong> {techStack}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section className="glass-card rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
          <Briefcase size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">Experience</h2>
      </div>
      
      <div className="space-y-2">
        <ExperienceItem 
          role="Senior Full-stack Developer"
          company="Tugi Tark"
          period="July 2024 - Present"
          description="Developed and maintained full-stack features using Vue.js, TypeScript, Tailwind CSS, and ASP.NET Web API, integrating REST services to deliver a responsive, high-performance platform across devices and browsers. Supported key product requirements including multi-language, client customization, and multi-theme capabilities. Collaborated in an Agile, cross-functional team, contributing through code reviews, mentoring, UX-driven improvements, and systematic debugging/performance optimization."
          techStack="Vue.js, TypeScript, Tailwind CSS, ASP.NET Web API, REST services."
        />

        <ExperienceItem 
          role="Senior Software Developer"
          company="Tokiota"
          period="April 2024 - July 2024"
          description="Delivered and supported a portfolio of internal applications using C# / VB.NET / ASP.NET, covering both new development and ongoing enhancements. Owned debugging and troubleshooting across environments, from reproducing issues to root-cause analysis and patch releases. Managed deployments on Azure, ensuring stable environments and predictable releases. Implemented and improved Azure DevOps CI/CD, standardizing build and deployment workflows."
          techStack="Visual Studio, SQL Server, C#, VB.NET, ASP.NET MVC/.NET Core, EF, REST, Azure, Azure DevOps, Git, JS/jQuery, Bootstrap, HTML/CSS, JSON/XML"
        />

        <ExperienceItem 
          role="Sr. Software Engineer"
          company="FieldRoutes, a ServiceTitan company"
          period="March 2022 - February 2024"
          description="Delivered and supported multiple applications across the .NET ecosystem (C#, VB.NET, .NET Framework, .NET Core), covering enhancements, maintenance, and defect fixes. Collaborated with PMs and stakeholders to manage scope and priorities, ensuring predictable delivery within timeline and budget constraints. Strengthened code quality through reviews and contributed to continuous improvement of the team’s development process. Performed root-cause analysis and troubleshooting to improve stability and reduce recurring issues."
          techStack="Visual Studio, SQL Server, C#, VB.NET, ASP.NET MVC, Razor, .NET Core, Entity Framework, JavaScript/jQuery, Angular, Bootstrap, HTML/CSS, JSON/XML, Git, SVN, Jira, RDL Designer, Docker, APIs/REST"
        />

        <ExperienceItem 
          role="Senior Software Developer"
          company="ServicePro a ServiceTitan Company"
          period="September 2017 - March 2022"
          description="Delivered and supported multiple applications across the .NET ecosystem (C#, VB.NET, .NET Framework, .NET Core), covering enhancements, maintenance, and defect fixes. Collaborated with PMs and stakeholders to manage scope and priorities, ensuring predictable delivery within timeline and budget constraints. Strengthened code quality through reviews and contributed to continuous improvement of the team’s development process. Performed root-cause analysis and troubleshooting to improve stability and reduce recurring issues."
          techStack="Visual Studio, SQL Server, C#, VB.NET, ASP.NET MVC, Razor, .NET Core, Entity Framework, JavaScript/jQuery, Angular, Bootstrap, HTML/CSS, JSON/XML, Git, SVN, Jira, RDL Designer, Docker, APIs/REST"
        />

        <ExperienceItem 
          role="Software Developer"
          company="Conectividad Global COGL Cía Ltda"
          period="June 2016 - September 2017"
          description="Developed and enhanced applications using C# and the .NET Framework, delivering features across the full development lifecycle. Contributed to architectural design discussions, applying design patterns and maintainability principles to improve structure and reuse. Diagnosed and resolved defects through systematic debugging and troubleshooting across environments. Participated in code reviews and supported continuous improvements to development standards and workflows."
          techStack="Visual Studio, SQL Server, C#, ASP.NET MVC, Razor, Entity Framework, JavaScript, jQuery, Bootstrap, HTML5, CSS3, JSON/XML, SVN"
        />

        <ExperienceItem 
          role="Software Developer"
          company="Biocubafarma"
          period="January 2012 - June 2015"
          description="Developed and maintained applications using C#, .NET Framework, and Centura. Monitored system behavior and performed tuning/optimization to meet evolving requirements and performance expectations. Diagnosed and resolved software defects through structured debugging and troubleshooting."
          techStack="Visual Studio, SQL Server, LINQ, Centura"
        />
      </div>
    </section>
  );
};

export default Experience;

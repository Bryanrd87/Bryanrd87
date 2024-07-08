// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="bg-white p-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-fancy font-bold mb-2">About Me</h2>
        <p className="text-gray-700 text-smaller">
          I am an experienced Full Stack .NET developer with over 12 years in
          the industry, specializing in the .NET framework and software design
          patterns. My expertise includes developing and maintaining a variety
          of software applications using C#, VB.NET, and .NET Core. I have a
          strong track record in debugging and troubleshooting software issues,
          ensuring high-quality software delivery on schedule and within budget.
        </p>
        <p className="text-gray-700 text-smaller">
          My professional journey includes significant roles at TOKIOTA,
          FieldRoutes (a ServiceTitan company), Conectividad Global COGL Cía
          Ltda., and Biocubafarma. I have leveraged technologies such as Visual
          Studio, SQL Server, MVC, Razor, Infragistics, Entity Framework, XML,
          JSON, jQuery, JavaScript, Bootstrap, CSS3, HTML5, Git, Azure Cloud,
          Azure DevOps, SVN, Jira, Docker, and APIs in various projects.
        </p>
        <p className="text-gray-700 text-smaller">
          I am well-versed in using Azure Cloud services for deployment and
          management of applications, and I utilize Azure DevOps for continuous
          integration and continuous deployment (CI/CD) pipelines. My approach
          to development is rooted in SOLID principles and Test-Driven
          Development (TDD), aiming to create scalable and maintainable software
          solutions.
        </p>
      </div>
    </section>
  );
};

export default About;

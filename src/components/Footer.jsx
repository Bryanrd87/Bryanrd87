import React from "react";

const Footer = () => {
  return (
    <footer className="glass border-t border-white/5 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-slate-200 font-medium">RAYDEL DANIEL ABREU MACEO</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

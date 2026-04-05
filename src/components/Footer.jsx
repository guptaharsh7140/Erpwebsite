import React from "react";

const footerCols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press", "Partners"],
  },
  {
    title: "Support",
    links: ["Documentation", "Help Center", "API Reference", "Status", "Contact"],
  },
];

const socials = ["🐦", "💼", "📘", "📷"];

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-sora text-xl font-bold text-white mb-4">
              Campusys<span className="text-accent">ERP</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Enterprise software that grows with you. Trusted by 500+ companies in 40+ countries.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 bg-white/8 hover:bg-white/16 rounded-xl flex items-center justify-center text-base transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h5 className="font-sora font-semibold text-white text-sm mb-5">{col.title}</h5>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/50 hover:text-white text-sm mb-3 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 NexaERP Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

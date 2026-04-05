import React from "react";

const features = [
  { icon: "☁️", title: "Cloud-Based System",     desc: "Access your business data from anywhere, on any device. Zero IT infrastructure required." },
  { icon: "📈", title: "Real-Time Analytics",    desc: "Live dashboards and reports that update instantly so decisions are always data-driven." },
  { icon: "🔒", title: "Enterprise Security",    desc: "Bank-grade encryption, role-based access, and SOC 2 compliance keep your data safe." },
  { icon: "🧩", title: "Customizable Modules",   desc: "Enable only what you need. Add modules as you grow without disrupting existing workflows." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">Features</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Built for the Modern Enterprise
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Powerful capabilities that set NexaERP apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-7 hover:bg-blue-100 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="font-sora font-semibold text-navy text-base mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

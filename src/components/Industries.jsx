import React from "react";

const industries = [
  { icon: "🏭", title: "Manufacturing", desc: "End-to-end production tracking, supply chain visibility, and quality control." },
  { icon: "🛒", title: "Retail",        desc: "Multi-channel inventory, POS integration, and customer loyalty management." },
  { icon: "🏥", title: "Healthcare",    desc: "Patient records, billing, compliance reporting, and staff scheduling." },
  { icon: "🎓", title: "Education",     desc: "Student management, fee collection, attendance, and academic reporting." },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-5 sm:px-8 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Industries</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Tailored for Your Sector
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            NexaERP adapts to the unique needs of diverse industries with specialized modules and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((i) => (
            <div
              key={i.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-5xl mb-5">{i.icon}</div>
              <h3 className="font-sora font-semibold text-white text-lg mb-3">{i.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

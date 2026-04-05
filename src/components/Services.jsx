import React from "react";

const services = [
  { icon: "📦", bg: "bg-blue-50",   title: "Inventory Management", desc: "Track stock in real-time, automate reorders, and eliminate shortfalls with intelligent inventory control." },
  { icon: "👥", bg: "bg-teal-50",   title: "HR Management",        desc: "Streamline hiring, onboarding, performance reviews, and employee records in one unified system." },
  { icon: "💰", bg: "bg-violet-50", title: "Accounting & Finance",  desc: "Automate bookkeeping, generate financial reports, and maintain compliance effortlessly." },
  { icon: "🤝", bg: "bg-orange-50", title: "CRM",                   desc: "Manage customer relationships, track leads, and close deals faster with a built-in CRM." },
  { icon: "💳", bg: "bg-pink-50",   title: "Payroll",               desc: "Process payroll accurately, handle taxes, and ensure on-time payments every cycle." },
  { icon: "📊", bg: "bg-green-50",  title: "Analytics & Reports",   desc: "Turn raw data into actionable intelligence with dashboards and custom reports." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 sm:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">Services</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            A complete suite of modules designed to cover every aspect of your business operations—seamlessly integrated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card relative bg-white rounded-2xl p-7 border border-slate-100 hover:border-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 overflow-hidden"
            >
              <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center text-2xl mb-5`}>
                {s.icon}
              </div>
              <h3 className="font-sora font-semibold text-navy text-lg mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

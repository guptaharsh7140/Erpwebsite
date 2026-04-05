import React from "react";

const testimonials = [
  {
    stars: 5,
    quote: "NexaERP transformed how we manage operations. Our efficiency jumped 40% in the first quarter alone.",
    name: "Priya Sharma",
    role: "COO, TechForge India",
    color: "#2563eb",
  },
  {
    stars: 5,
    quote: "The real-time dashboards alone are worth it. We finally have a single source of truth for the whole company.",
    name: "James Whitfield",
    role: "CFO, Meridian Retail",
    color: "#0891b2",
  },
  {
    stars: 5,
    quote: "Implementation was seamless. The support team held our hand every step of the way. Absolutely recommend.",
    name: "Aisha Mensah",
    role: "Director, CareFirst Health",
    color: "#7c3aed",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-5 sm:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Thousands of businesses trust NexaERP to power their operations every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-amber-400 text-base tracking-widest mb-4">
                {"★".repeat(t.stars)}
              </div>
              <blockquote className="text-slate-600 text-sm leading-relaxed italic mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-sora font-bold text-sm text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-sora font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

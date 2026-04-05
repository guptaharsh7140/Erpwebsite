import React from "react";

const stats = [
  { num: "$2.4M", lbl: "Revenue" },
  { num: "1,248", lbl: "Orders" },
  { num: "98%", lbl: "Uptime" },
];

const bars = [
  { label: "Revenue", pct: 84 },
  { label: "Orders", pct: 67 },
  { label: "Customers", pct: 91 },
  { label: "Efficiency", pct: 78 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center bg-gradient-to-br from-sky-50 via-blue-50 to-slate-50 px-5 sm:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot" />
            Trusted by 500+ companies worldwide
          </div>

          <h1 className="font-sora text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-navy mb-5">
            Smart <span className="text-brand">ERP Solutions</span> for Growing Businesses
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-9 max-w-lg">
            Streamline operations, boost productivity, and make data-driven decisions with our all-in-one enterprise platform built for the modern workforce.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-brand hover:bg-brand-dark text-white font-sora font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/30"
            >
              Get Free Demo
            </a>
            <a
              href="#about"
              className="bg-white text-brand border-2 border-brand font-sora font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-brand-pale hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-slate-200">
            {[["500+", "Clients"], ["40+", "Countries"], ["99.9%", "Uptime"]].map(([v, l]) => (
              <div key={l}>
                <div className="font-sora text-xl font-bold text-navy">{v}</div>
                <div className="text-xs text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Dashboard card */}
        <div className="hidden lg:block animate-float">
          <div className="bg-white rounded-2xl p-7 shadow-2xl shadow-slate-200 border border-slate-100">
            <div className="flex justify-between items-center mb-5">
              <span className="font-sora font-semibold text-navy text-base">Business Overview</span>
              <span className="text-xs text-brand bg-blue-50 px-3 py-1 rounded-full font-medium">● Live</span>
            </div>

            {bars.map(({ label, pct }) => (
              <div key={label} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold text-navy">{pct}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-3 mt-5">
              {stats.map(({ num, lbl }) => (
                <div key={lbl} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <div className="font-sora text-xl font-bold text-brand">{num}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

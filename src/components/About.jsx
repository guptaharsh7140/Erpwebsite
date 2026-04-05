import React from "react";

const pillars = [
  { title: "Our Mission", text: "Empower businesses with tools that eliminate complexity and accelerate growth." },
  { title: "Our Vision", text: "A world where every company operates at peak efficiency through smart software." },
  { title: "Our Values", text: "Transparency, innovation, and customer obsession in everything we build." },
  { title: "Our Promise", text: "24/7 support, continuous updates, and a platform that scales with you." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">About Us</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
            Powering Enterprise Growth Since 2012
          </h2>
          <p className="text-slate-500 leading-relaxed mb-5">
            NexaERP is a leading enterprise software company helping businesses transform their operations through intelligent automation and real-time data insights. We combine cutting-edge technology with deep industry expertise to deliver solutions that truly work.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            With over a decade of experience and clients across 40+ countries, we understand that every business is unique—which is why our platform adapts to you, not the other way around.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="bg-blue-50 border-l-4 border-brand rounded-lg p-5">
                <h4 className="font-sora font-semibold text-navy text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl h-96 flex items-center justify-center overflow-hidden">
          {/* Floating cards */}
          <div className="absolute top-6 left-6 bg-white rounded-xl px-5 py-4 shadow-lg border border-slate-100">
            <p className="text-xs text-slate-400 mb-1">Active Users</p>
            <p className="font-sora text-2xl font-bold text-brand">24,500+</p>
          </div>

          <div className="absolute bottom-6 right-6 bg-white rounded-xl px-5 py-4 shadow-lg border border-slate-100">
            <p className="text-xs text-slate-400 mb-1">Client Satisfaction</p>
            <p className="font-sora text-2xl font-bold text-brand">98.7%</p>
          </div>

          <div className="text-center opacity-20 select-none">
            <div className="font-sora text-7xl font-bold text-brand">ERP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

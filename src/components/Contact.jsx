import React, { useState } from "react";

const contactItems = [
  { icon: "📍", title: "Office Address", text: "12th Floor, Cyber Tower, Gurugram, Haryana 122018" },
  { icon: "📞", title: "Phone",          text: "+91 98765 43210" },
  { icon: "✉️", title: "Email",          text: "hello@nexaerp.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const submit = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">Contact</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Ready to transform your business? Our team is here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h3 className="font-sora font-semibold text-navy text-2xl mb-4">Get in Touch</h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              Fill out the form and one of our ERP specialists will reach out within 24 hours to schedule your personalized demo.
            </p>

            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-sora font-semibold text-navy text-sm">{item.title}</h5>
                  <p className="text-slate-500 text-sm mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-5">✅</div>
                <h3 className="font-sora font-bold text-navy text-2xl mb-3">Message Sent!</h3>
                <p className="text-slate-500">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div>
                {["name", "email"].map((field) => (
                  <div key={field} className="mb-5">
                    <label className="block text-sm font-medium text-navy mb-2 capitalize">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={form[field]}
                      onChange={handle}
                      placeholder={field === "name" ? "Your full name" : "you@company.com"}
                      className={`w-full px-4 py-3 border rounded-xl text-navy text-sm outline-none transition-colors ${
                        errors[field] ? "border-red-400" : "border-slate-200 focus:border-brand"
                      }`}
                    />
                    {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
                  </div>
                ))}

                <div className="mb-6">
                  <label className="block text-sm font-medium text-navy mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Tell us about your business needs..."
                    className={`w-full px-4 py-3 border rounded-xl text-navy text-sm outline-none transition-colors resize-none ${
                      errors.message ? "border-red-400" : "border-slate-200 focus:border-brand"
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={submit}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-sora font-semibold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 text-base"
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

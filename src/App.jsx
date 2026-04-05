import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-dm antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

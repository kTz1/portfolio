"use client";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";
//import { Testimonials } from "@/sections/Testimonials";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Tape />
      <Projects />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </div>
  );
}

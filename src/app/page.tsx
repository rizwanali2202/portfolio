"use client";

import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import AOS from  "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "@/app/components/About";



export default function Home() {
  useEffect(() =>{
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    
    });
    AOS.refresh()
  }, []);

  return (
   <main>
    <Hero />
    <Projects/>
    <Skills />
    <About/>
    <Contact/>
   </main>
  );
};
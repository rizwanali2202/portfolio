import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from "next/image"


const Hero = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,  // Animation duration      add animation  
      once: true,      // Animation happens only once
    });
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen "
     
    >
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Text */}
      <div className="container flex h-[calc(100vh-60px)]">
       
          <Image width={650} height={350} src="/profile.jpg" alt='heroImage' className='-m-20'/>
      

        {/* Centered Text */}
        <div className="flex flex-col justify-center items-center text-center h-screen ">
          {/* Main Heading: Welcome to my portfolio */}
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            Welcome to my portfolio
          </h1>

          {/* Name Text with letter colors applied dynamically */}
          <div className="text-4xl sm:text-5xl flex flex-col items-center">
            {/* "I'm" part */}
            <div className="name" data-aos="zoom-in-up">
            
              <span className="text-blue-500" data-aos-delay="200">I&apos;m </span>
              <span
           className="capitalize text-transparent bg-clip-text bg-gradient-to-t from-pink-400 to-blue-700"
            data-aos-delay="400"
           >
            Rizwan Ali
          </span>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;    
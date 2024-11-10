import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div id="about" className="container pt-32 flex flex-col items-center gap-y-2">
      <h2
        className="text-4xl  md:text-5xl bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500  bg-clip-text text-transparent "
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        About Me
      </h2>  
      <p
        className="text-white pt-4 "
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse.
      </p>
    </div>
  );
};

export default About;
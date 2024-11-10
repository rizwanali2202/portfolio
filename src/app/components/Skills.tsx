import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-20 items-center text-center md:text-left">
        
        {/* Heading Section */}
        <div data-aos="fade-up" data-aos-duration="1000" className="mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text border-b-2 border-pink-400 pb-4">
            Technologies I Work With
          </h2>
          <p className="text-white pt-2">
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col justify-center items-center">
          {/* First Row of Skills */}
          <div className="flex flex-wrap justify-center gap-8 text-white text-3xl sm:text-4xl">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">TypeScript</h2>
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">Next.js</h2>
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">React </h2>
          </div>

          {/* Second Row of Skills */}
          <div className="flex flex-wrap justify-center gap-8  mt-4 text-white text-3xl sm:text-4xl">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">Tailwindcss</h2>
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">CSS</h2>
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">HTML</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
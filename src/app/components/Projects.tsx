import React, { useEffect } from 'react';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Data for the projects
const data = [
  {
    id: 0,
    title: "Digital Calculator",
    desc: "A TypeScript, HTML & CSS project with animation for a digital calculator.",
    img: "project_01.jpg",
    tags: ["TypeScript", "CSS", "HTML"],
  },
  {
    id: 1,
    title: "Country Information Project",
    desc: "A Next.js, HTML & CSS project that displays countries' populations and capitals.",
    img: "project_02.jpg",
    tags: ["Next.js", "TypScript", "CSS", "HTML"],
  },
  {
    id: 2,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML & CSS, allowing users to showcase their skills dynamically.",
    img: "project_03.jpg",
    tags: ["Node.js", "CSS", "HTML", "TypeScript"],
  },
];

const Projects = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects" className="container pt-32">
      {/* Apply AOS to the title with animation */}
      <h1
        className="text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-4xl sm:text-5xl font-bold text-center mb-5 py-2"
        data-aos="fade-up"  // Use fade-up animation for the title
        data-aos-duration="1000" // Duration of the animation
        data-aos-delay="300" // Delay before the animation starts
      >
        My Projects
      </h1>
  
      {/* Project Cards */}
      <div className="grid gap-10 xl:gap-10 xl:gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
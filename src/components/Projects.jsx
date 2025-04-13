import React, {useRef, useState} from 'react';
import Heading from './Heading';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion';
import ScrollFadePop from './ScrollFadePop';
import ProjectModal from './ProjectModal';

const projects = [
  {
    ImgUrl: ['Personal Assistant Rover.png'],
    Title: 'Personal Assistant Rover',
    Discription: 'The robotic rover is a versatile vehicle that performs domestic and surveillance tasks, utilizing sensor modules, motor drivers, and microcontrollers for real-time decision-making.',
    technologies: 'Altium Designer, PCB Fabrication, Embedded Systems',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com/your-repo/peripheral-board',
  },
  {
    ImgUrl: ['Peripheral board.png'],
    Title: 'Peripheral Board',
    Discription: 'Created a functional peripheral board using Altium Designer, successfully fabricated PCBs and tested hardware, focusing on optimizing layout for microcontroller interfacing and peripheral integration.',
    technologies: 'Altium Designer, PCB Fabrication, Embedded Systems',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com/your-repo/peripheral-board',
  },
  {
    ImgUrl: ['Peripheral board.png', 'Personal Assistant Rover.png'],
    Title: 'Enhanced Peripheral Board',
    Discription: 'An improved version of the Peripheral Board project showcasing design iteration with multiple hardware configurations.',
    technologies: 'Altium Designer, PCB Fabrication, Embedded Systems',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com/your-repo/peripheral-board',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState (null);
  const containerRef = useRef (null);

  const scroll = direction => {
    const container = containerRef.current;
    const scrollAmount = 600;
    if (container) {
      container.scrollBy ({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="project"
      className="px-5 sm:px-10 py-16 md:py-24 flex flex-col gap-16"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <Heading heading="projects" />
        <div className="flex gap-4">
          {[
            {icon: ArrowLeft, dir: 'left'},
            {icon: ArrowRight, dir: 'right'},
          ].map (({icon: Icon, dir}) => (
            <button
              key={dir}
              onClick={() => scroll (dir)}
              className="bg-[#1C2B2B] p-3 rounded-full hover:shadow-[0_0_12px_rgb(109_131_123)] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
            >
              <Icon color="#B2C8BB" />
            </button>
          ))}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {projects.map ((project, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[300px] sm:w-[360px]"
          >
            <ScrollFadePop delay={index * 0.2}>
              <ProjectCard
                ImgUrl={project.ImgUrl[0]}
                Title={project.Title}
                Discription={project.Discription}
                handleShowMore={() => setSelectedProject (project)}
              />
            </ScrollFadePop>
          </div>
        ))}
      </motion.div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject (null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;

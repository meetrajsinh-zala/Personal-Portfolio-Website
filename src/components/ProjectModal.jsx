import React, {useState} from 'react';
import {X, Github, ChevronLeft, ChevronRight} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

const ProjectModal = ({isOpen, onClose, project}) => {
  const [currentImg, setCurrentImg] = useState (0);

  if (!isOpen || !project) return null;

  const hasMultipleImages =
    Array.isArray (project.ImgUrl) && project.ImgUrl.length > 1;
  const currentImage = hasMultipleImages
    ? project.ImgUrl[currentImg]
    : project.ImgUrl;

  const handlePrev = () =>
    setCurrentImg (prev => (prev === 0 ? project.ImgUrl.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentImg (prev => (prev === project.ImgUrl.length - 1 ? 0 : prev + 1));

  return (
    <AnimatePresence>
      <motion.div
        key="modal-bg"
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <motion.div
          key="modal-content"
          initial={{opacity: 0, y: 50, scale: 0.95}}
          animate={{opacity: 1, y: 0, scale: 1}}
          exit={{opacity: 0, y: 50, scale: 0.95}}
          transition={{duration: 0.3}}
          className="bg-[rgba(170,179,186,0.7)] dark:bg-[#1C2B2B] text-[rgba(17,28,17,0.8)] dark:text-[#B2C8BB] p-8 rounded-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh] hide-scrollbar shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 hover:scale-110 transition-transform duration-200 cursor-pointer"
            aria-label="Close"
          >
            <X className=" text-[rgba(17,23,17)] dark:text-[#B2C8BB]" />
          </button>

          <h2 className="text-3xl font-bold mb-6 border-b border-[#2E4444] pb-2">
            {project.Title}
          </h2>

          {project.ImgUrl &&
            <div className="mb-6">
              {hasMultipleImages
                ? <div className="relative w-full max-h-[300px] overflow-hidden rounded-lg">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={currentImage}
                        alt={`${project.Title} Screenshot ${currentImg + 1}`}
                        className="object-contain w-full h-[300px] rounded-lg"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -50}}
                        transition={{duration: 0.4}}
                      />
                    </AnimatePresence>

                    <motion.button
                      onClick={handlePrev}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                      className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#2E4444] text-white p-2 rounded-full shadow-md hover:bg-[#3A5B5B] transition"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft size={20} />
                    </motion.button>

                    <motion.button
                      onClick={handleNext}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                      className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#2E4444] text-white p-2 rounded-full shadow-md hover:bg-[#3A5B5B] transition"
                      aria-label="Next Image"
                    >
                      <ChevronRight size={20} />
                    </motion.button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.ImgUrl.map ((_, idx) => (
                        <span
                          key={idx}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentImg ? 'bg-[#B2C8BB]' : 'bg-[#4A6666]'}`}
                        />
                      ))}
                    </div>
                  </div>
                : <img
                    src={currentImage}
                    alt={project.Title}
                    className="rounded-lg mb-6 object-contain w-full max-h-72"
                  />}
            </div>}

          <p className="mb-6 leading-relaxed text-[rgba(17,23,17,0.8)] dark:text-[#C6DAD3] text-base">
            {project.Discription}
          </p>

          {project.technologies &&
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.split (',').map ((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#AAB3BA] dark:bg-[#2E4444] text-[rgba(17,23,17)] dark:text-[#D1E7DD] px-3 py-1 rounded-full text-sm"
                  >
                    {tech.trim ()}
                  </span>
                ))}
              </div>
            </div>}

          {project.video &&
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Demo</h3>
              <div className="aspect-video rounded overflow-hidden shadow-lg">
                <iframe
                  src={project.video}
                  title="Project Demo"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>}

          {project.github &&
            <div className="mt-6 flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#AAB3BA] dark:bg-[#2E4444] text-[rgba(17,23,17,08)]  dark:text-[#D1E7DD] rounded-lg dark:hover:bg-[#3A5B5B] hover:bg-[rgba(17,23,17,08)] hover:text-[#AAB3BA] transition duration-200"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

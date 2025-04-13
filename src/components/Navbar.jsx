import React, {useState, useEffect} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const Navbar = () => {
  const navLinks = ['About', 'Skills', 'Project', 'Education', 'Contact'];
  const [isOpen, setIsOpen] = useState (false);
  const [scrolled, setScrolled] = useState (false);

  const {scrollY} = useScroll ();
  const navbarBackground = useTransform (
    scrollY,
    [0, 50],
    ['rgba(14, 28, 30, 0)', 'rgba(14, 28, 30, 0.9)']
  );

  useEffect (() => {
    const onScroll = () => setScrolled (window.scrollY > 20);
    window.addEventListener ('scroll', onScroll);
    return () => window.removeEventListener ('scroll', onScroll);
  }, []);

  const scrollToSection = id => {
    setIsOpen (false);
    const section = document.getElementById (id);
    if (section) {
      window.scrollTo ({
        top: section.getBoundingClientRect ().top + window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 ${scrolled ? 'py-3 shadow-lg' : 'py-4'}`}
      style={{
        backgroundColor: navbarBackground,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <motion.h1
          className="font-JetBrains text-2xl sm:text-3xl font-extrabold text-[#6D837B] select-none hover:text-shadow-[0_0_10px_rgb(77_102_95)] transition-all"
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', stiffness: 400, damping: 10}}
        >
          John Doe
        </motion.h1>

        <div className="hidden md:flex gap-6 font-Inter text-[#B2C8BB]">
          {navLinks.map (link => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase ()}`}
              onClick={e => {
                e.preventDefault ();
                scrollToSection (link.toLowerCase ());
              }}
              className="px-3 py-1 rounded-2xl hover:bg-[#111C1D] hover:shadow-[0_0_12px_rgb(109_131_123)] transition-all duration-300"
              whileHover={{scale: 1.1}}
              transition={{type: 'spring', stiffness: 400, damping: 17}}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <motion.div className="md:hidden z-50" whileTap={{scale: 0.95}}>
          <button
            onClick={() => setIsOpen (!isOpen)}
            className="w-8 h-8 relative flex items-center justify-center"
          >
            <span
              className={`absolute h-[2px] w-6 bg-[#B2C8BB] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 top-[13px]' : 'top-[8px]'}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-[#B2C8BB] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-[14px]'}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-[#B2C8BB] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 top-[13px]' : 'top-[20px]'}`}
            />
          </button>
        </motion.div>

        <motion.div
          className={`md:hidden absolute top-full right-4 mt-2 w-52 bg-[#0e1c1ecc] backdrop-blur-md border border-[#233a3c] rounded-xl px-4 py-4 font-Inter text-[#B2C8BB] shadow-lg ${isOpen ? '' : 'pointer-events-none'}`}
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.95,
            y: isOpen ? 0 : -8,
          }}
          transition={{duration: 0.2, ease: 'easeInOut'}}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map (link => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase ()}`}
                onClick={e => {
                  e.preventDefault ();
                  scrollToSection (link.toLowerCase ());
                }}
                className="px-3 py-2 rounded-xl hover:bg-[#111C1D] transition-all duration-300"
                whileHover={{backgroundColor: '#111C1D', x: 5}}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;

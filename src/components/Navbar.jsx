import {useState, useEffect} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {Sun, Moon} from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    'About',
    'Skills',
    'Project',
    'Experience',
    'Education',
    'Contact',
  ];
  const [isOpen, setIsOpen] = useState (false);
  const [scrolled, setScrolled] = useState (false);
  const [theme, setTheme] = useState (localStorage.getItem ('theme'));

  const {scrollY} = useScroll ();

  useEffect (() => {
    const stored = localStorage.getItem ('theme');
    setTheme (stored === 'dark' ? 'dark' : 'light');
  }, []);

  useEffect (() => {
    const onScroll = () => setScrolled (window.scrollY > 20);
    window.addEventListener ('scroll', onScroll);
    return () => window.removeEventListener ('scroll', onScroll);
  }, []);

  const navbarBackground = useTransform (
    scrollY,
    [0, 50],
    theme === 'dark'
      ? ['rgba(14, 28, 30, 0)', 'rgba(14, 28, 30, 0.9)']
      : ['rgba(204, 211, 218, 0)', 'rgba(204, 211, 218, 0.9)']
  );

  useEffect (() => {
    const stored = localStorage.getItem ('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add ('dark');
    } else {
      document.documentElement.classList.remove ('dark');
    }
  }, []);

  useEffect (() => {
    const observer = new MutationObserver (() => {
      const isDark = document.documentElement.classList.contains ('dark');
      setTheme (isDark ? 'dark' : 'light');
    });
    observer.observe (document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect ();
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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme (newTheme);
    localStorage.setItem ('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add ('dark');
    } else {
      document.documentElement.classList.remove ('dark');
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
          className="font-JetBrains text-2xl sm:text-3xl font-extrabold text-[#2A4B49] dark:text-[#6D837B] select-none hover:text-shadow-[0_0_10px_rgb(42,75,73,0.4)] dark:hover:text-shadow-[0_0_10px_rgb(77_102_95)] transition-all"
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', stiffness: 400, damping: 10}}
        >
          John Doe
        </motion.h1>

        <div className="hidden md:flex items-center gap-6 font-Inter text-[rgba(17, 28, 17, 0.8)] dark:text-[#B2C8BB]">
          {navLinks.map (link => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase ()}`}
              onClick={e => {
                e.preventDefault ();
                scrollToSection (link.toLowerCase ());
              }}
              className="px-3 py-1 rounded-2xl hover:bg-[rgba(170,179,186,0.5)] hover:shadow-[0_0_12px_rgba(17,28,17,0.3)] dark:hover:bg-[#111C1D] dark:hover:shadow-[0_0_12px_rgb(109_131_123)] transition-all duration-300"
              whileHover={{scale: 1.1}}
              transition={{type: 'spring', stiffness: 400, damping: 17}}
            >
              {link}
            </motion.a>
          ))}

          <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(170,179,186,0.5)] dark:bg-[#111C1D] shadow-[0_0_8px_rgba(17,28,17,0.2)] dark:shadow-[0_0_8px_rgba(109,131,123,0.3)] transition-all duration-300"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: 'spring', stiffness: 400, damping: 17}}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{
                rotate: theme === 'dark' ? 180 : 0,
                opacity: theme === 'dark' ? 0 : 1,
                scale: theme === 'dark' ? 0 : 1,
              }}
              transition={{duration: 0.3}}
              className="absolute"
            >
              <Sun className="w-5 h-5 text-[#2A4B49]" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                rotate: theme === 'light' ? -180 : 0,
                opacity: theme === 'light' ? 0 : 1,
                scale: theme === 'light' ? 0 : 1,
              }}
              transition={{duration: 0.3}}
              className="absolute"
            >
              <Moon className="w-5 h-5 text-[#B2C8BB]" />
            </motion.div>
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(170,179,186,0.5)] dark:bg-[#111C1D] shadow-[0_0_8px_rgba(17,28,17,0.2)] dark:shadow-[0_0_8px_rgba(109,131,123,0.3)] transition-all duration-300"
            whileTap={{scale: 0.9}}
            transition={{type: 'spring', stiffness: 400, damping: 17}}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{
                rotate: theme === 'dark' ? 180 : 0,
                opacity: theme === 'dark' ? 0 : 1,
                scale: theme === 'dark' ? 0 : 1,
              }}
              transition={{duration: 0.3}}
              className="absolute"
            >
              <Sun className="w-4 h-4 text-[#2A4B49]" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                rotate: theme === 'light' ? -180 : 0,
                opacity: theme === 'light' ? 0 : 1,
                scale: theme === 'light' ? 0 : 1,
              }}
              transition={{duration: 0.3}}
              className="absolute"
            >
              <Moon className="w-4 h-4 text-[#B2C8BB]" />
            </motion.div>
          </motion.button>

          <motion.div className="z-50" whileTap={{scale: 0.95}}>
            <button
              onClick={() => setIsOpen (!isOpen)}
              className="w-8 h-8 relative flex items-center justify-center"
            >
              <span
                className={`absolute h-[2px] w-6 bg-[rgba(17,23,17,0.8)] dark:bg-[#B2C8BB] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 top-[13px]' : 'top-[8px]'}`}
              />
              <span
                className={`absolute h-[2px] w-6 bg-[rgba(17,23,17,0.8)] dark:bg-[#B2C8BB] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-[14px]'}`}
              />
              <span
                className={`absolute h-[2px] w-6 bg-[rgba(17,23,17,0.8)] dark:bg-[#B2C8BB] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 top-[13px]' : 'top-[20px]'}`}
              />
            </button>
          </motion.div>
        </div>

        <motion.div
          className={`md:hidden absolute top-full right-4 mt-2 w-52 bg-[rgba(170,179,186,0.5)] border-[rgba(17,23,17,0.3)] dark:bg-[#0e1c1ecc] backdrop-blur-md border dark:border-[#233a3c] rounded-xl px-4 py-4 font-Inter text-[rgba(17,23,17,0.8)] dark:text-[#B2C8BB] shadow-lg ${isOpen ? '' : 'pointer-events-none'}`}
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

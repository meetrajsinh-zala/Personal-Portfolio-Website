import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronUp} from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState (false);

  useEffect (() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible (true);
      } else {
        setIsVisible (false);
      }
    };

    window.addEventListener ('scroll', toggleVisibility);

    return () => window.removeEventListener ('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo ({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible &&
        <motion.button
          className="fixed bottom-6 right-6 bg-[#1C2D2F] text-[#B2C8BB] p-3 rounded-full shadow-lg hover:shadow-[0_0_12px_rgb(109_131_123)] z-40"
          onClick={scrollToTop}
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.5}}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          transition={{type: 'spring', stiffness: 400, damping: 15}}
        >
          <ChevronUp size={24} />
        </motion.button>}
    </AnimatePresence>
  );
};

export default BackToTop;

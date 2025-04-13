import React, {useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';
import {useEffect} from 'react';

const ScrollFadePop = ({children, delay = 0}) => {
  const ref = useRef ();
  const isInView = useInView (ref, {margin: '-50px'});
  const controls = useAnimation ();

  useEffect (
    () => {
      if (isInView) {
        controls.start ({
          opacity: 1,
          scale: 1,
          transition: {duration: 0.5, ease: 'easeOut', delay},
        });
      } else {
        controls.start ({
          opacity: 0,
          scale: 0.95,
          transition: {duration: 0.3, ease: 'easeIn'},
        });
      }
    },
    [isInView, controls, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, scale: 0.95}}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadePop;

import React, {useEffect, useState, useRef} from 'react';
import {motion} from 'framer-motion';

const BootLogs = ({log, index, currentLogIndex}) => {
  const [typedText, setTypedText] = useState ('');
  const frameRef = useRef (null);
  const charIndexRef = useRef (0);

  useEffect (
    () => {
      if (index !== currentLogIndex) return;

      const typeChar = () => {
        if (charIndexRef.current <= log.length) {
          setTypedText (log.slice (0, charIndexRef.current));
          charIndexRef.current += 1;
          frameRef.current = requestAnimationFrame (() => {
            setTimeout (typeChar, 30); // typing speed
          });
        } else {
          cancelAnimationFrame (frameRef.current);
        }
      };

      typeChar ();

      return () => {
        cancelAnimationFrame (frameRef.current);
        charIndexRef.current = 0;
      };
    },
    [currentLogIndex, index, log]
  );

  return (
    <motion.div
      className="flex items-start sm:items-center gap-2 sm:gap-4 md:gap-6"
      initial={{opacity: 0, y: 10}}
      animate={{opacity: index <= currentLogIndex ? 1 : 0, y: 0}}
      transition={{duration: 0.4}}
    >
      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 p-[2px] sm:p-[3px] rounded-xl outline outline-offset-[-1px] outline-[#b2c8bb] flex items-center justify-center">
        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#6d837b] rounded-full" />
      </div>

      <div className="text-[#b2c8bb] text-sm sm:text-base md:text-lg font-medium font-['Inter'] leading-snug md:leading-8 max-w-[90vw] sm:max-w-[480px] whitespace-pre-wrap break-words">
        {typedText}
        {index === currentLogIndex && <span className="animate-blink">|</span>}
      </div>
    </motion.div>
  );
};

export default BootLogs;

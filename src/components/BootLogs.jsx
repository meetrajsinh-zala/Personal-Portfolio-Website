import {useEffect, useState, useRef} from 'react';
import {motion} from 'framer-motion';

const BootLogs = ({log, index, currentLogIndex}) => {
  const [typedText, setTypedText] = useState ('');
  const [isComplete, setIsComplete] = useState (false);
  const charIndexRef = useRef (0);
  const animationFrameRef = useRef (null);
  const lastUpdateTimeRef = useRef (0);

  const typingSpeed = 30;

  useEffect (
    () => {
      if (index !== currentLogIndex || isComplete) return;

      charIndexRef.current = 0;
      setTypedText ('');
      setIsComplete (false);

      const typeNextChar = timestamp => {
        if (timestamp - lastUpdateTimeRef.current < typingSpeed) {
          animationFrameRef.current = requestAnimationFrame (typeNextChar);
          return;
        }

        lastUpdateTimeRef.current = timestamp;

        if (charIndexRef.current < log.length) {
          setTypedText (log.slice (0, charIndexRef.current + 1));
          charIndexRef.current += 1;
          animationFrameRef.current = requestAnimationFrame (typeNextChar);
        } else {
          setIsComplete (true);
        }
      };

      animationFrameRef.current = requestAnimationFrame (typeNextChar);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame (animationFrameRef.current);
        }
      };
    },
    [currentLogIndex, index, log, isComplete]
  );

  return (
    <motion.div
      className="flex items-start sm:items-center gap-2 sm:gap-4 md:gap-6"
      initial={{opacity: 0, y: 10}}
      animate={{opacity: index <= currentLogIndex ? 1 : 0, y: 0}}
      transition={{duration: 0.4, ease: 'easeOut'}}
    >
      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 p-[2px] sm:p-[3px] rounded-xl outline outline-offset-[-1px] outline-[rgba(17,23,17,0.8)] dark:outline-[#b2c8bb] flex items-center justify-center">
        <div className="w-2 h-2 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#2a4b49] dark:bg-[#6d837b] rounded-full" />
      </div>

      <div className=" text-[rgba(17,23,17,0.8)] dark:text-[#b2c8bb] text-sm sm:text-base md:text-lg font-medium font-['Inter'] leading-snug md:leading-8 max-w-[90vw] sm:max-w-[480px] whitespace-pre-wrap break-words">
        {typedText}
        {index === currentLogIndex &&
          !isComplete &&
          <span className="animate-blink">|</span>}
      </div>
    </motion.div>
  );
};

export default BootLogs;

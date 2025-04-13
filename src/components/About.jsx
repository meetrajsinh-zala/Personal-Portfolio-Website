import React, {useEffect, useRef, useState} from 'react';
import Heading from './Heading';
import BootLogs from './BootLogs';
import {useInView} from 'framer-motion';

const logs = [
  'Initializing system: John, Embedded Systems Developer',
  'Loading experience... 2+ years of hands-on development',
  'Booting microcontroller modules: STM32, PIC, AVR',
  'Loading languages: Embedded C, C++, Python, Assembly',
  'Configuring peripherals: ADC, UART, I2C, SPI, SysTick',
  'Executing firmware: Debugging expert @Embedkari',
  'Loading tools: STM32CubeIDE, Keil, Proteus, Altium Designer',
  'Activating advanced modules: Embedded Linux, RTOS',
  'Fetching credentials: PG Diploma | B.E',
  'Finalizing... Always learning, always building',
];

const About = () => {
  const sectionRef = useRef (null);
  const isInView = useInView (sectionRef, {once: true, margin: '-100px'});
  const [currentLogIndex, setCurrentLogIndex] = useState (-1);

  useEffect (
    () => {
      if (!isInView || currentLogIndex >= logs.length) return;

      const delay = currentLogIndex === -1
        ? 500
        : logs[currentLogIndex]?.length * 30 + 600;

      const timer = setTimeout (() => {
        setCurrentLogIndex (prev => prev + 1);
      }, delay);

      return () => clearTimeout (timer);
    },
    [isInView, currentLogIndex]
  );

  return (
    <div
      ref={sectionRef}
      id="about"
      className="px-5 sm:px-10 py-16 sm:py-24 text-amber-50 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
    >
      <div className="w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
        <img
          src="John Doe.png"
          alt="John Doe"
          className="w-64 sm:w-72 md:w-80 lg:w-[504px] h-auto object-contain drop-shadow-[0_4px_24px_rgba(178,200,187,0.2)]"
        />
      </div>

      <div className="max-w-2xl flex flex-col gap-12 order-2 lg:order-1">
        <Heading heading="About Me" />
        <div className="flex flex-col gap-6 px-4 sm:px-10">
          {logs
            .slice (0, currentLogIndex + 1)
            .map ((log, index) => (
              <BootLogs
                key={index}
                log={log}
                index={index}
                currentLogIndex={currentLogIndex}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;

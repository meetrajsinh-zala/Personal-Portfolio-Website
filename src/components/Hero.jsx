import React, {useCallback} from 'react';
import Navbar from './Navbar';
import Tag from './Tag';
import ScrollFadePop from './ScrollFadePop';

const Hero = () => {
  const handleResumeClick = useCallback (() => {
    window.open ('/John Doe Resume.pdf', '_blank');
  }, []);

  return (
    <div className="min-h-screen dark:bg-[url('/Hero%20Section.png')] bg-cover bg-center px-4 sm:px-6 md:px-10 select-none">
      <Navbar />

      <div className="pt-16 flex flex-col justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-4xl flex flex-col gap-8 px-4 text-center">

          <ScrollFadePop delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-7">
              <Tag text="Embedded Systems Engineer" />
              <Tag text="Microcontroller Programmer" />
              <Tag text="RTOS Enthusiast" />
            </div>
          </ScrollFadePop>

          <ScrollFadePop delay={0.2}>
            <h1 className="font-JetBrains text-2xl sm:text-4xl md:text-5xl font-bold text-[#2A4B49] dark:text-[#6D837B] leading-snug">
              Hi, I’m John Doe <br />
              I build smart systems that talk to the real world.
            </h1>
          </ScrollFadePop>

          <ScrollFadePop delay={0.3}>
            <p className="text-[rgba(17,23,17,0.6)] dark:text-[#B2C8BB] font-Inter font-medium text-base sm:text-lg md:text-2xl leading-relaxed">
              From debugging microcontrollers to building real-time solutions, I bring over 2 years of hands-on experience in embedded development using STM32, PIC, AVR, Embedded C, and more.
            </p>
          </ScrollFadePop>

          <ScrollFadePop delay={0.4}>
            <div className="flex justify-center">
              <button
                onClick={handleResumeClick}
                className="text-[rgba(17,23,17,0.8)] dark:text-[#B2C8BB] border-2 border-[rgba(17,23,17,0.6)] dark:border-[#B2C8BB] text-base sm:text-lg font-bold font-Inter px-6 py-2 rounded-xl transition-all duration-300 ease-in-out dark:hover:shadow-[0_0_12px_rgb(109_131_123)] hover:shadow-[0_0_12px_rgba(17,23,17,0.3)] hover:scale-105"
              >
                View Resume
              </button>
            </div>
          </ScrollFadePop>
        </div>
      </div>
    </div>
  );
};

export default Hero;

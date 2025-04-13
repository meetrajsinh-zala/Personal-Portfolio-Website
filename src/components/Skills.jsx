import React from 'react';
import Heading from './Heading';
import Tag from './Tag';
import ScrollFadePop from './ScrollFadePop';

const skillCategories = [
  {
    title: 'Micro-Controllers',
    delay: 0.2,
    skills: [
      '8051 Microcontroller',
      '8052',
      'Atmel AVR',
      'Microchip PIC',
      'ARM Cortex-M',
    ],
  },
  {
    title: 'Programming',
    delay: 0.3,
    skills: ['C Programming', 'Embedded C', 'Bare-metal Programming'],
  },
  {
    title: 'Hardware & Design',
    delay: 0.4,
    skills: ['PCB Design', 'Altium Designer', 'Soldering'],
  },
  {
    title: 'Other Skills',
    delay: 0.5,
    skills: ['Embedded System', 'Embedded Linux', 'Management'],
  },
];

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center gap-16 px-5 sm:px-10 py-16"
      id="skills"
    >
      <ScrollFadePop delay={0.1}>
        <Heading heading="Skills" />
      </ScrollFadePop>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-7xl">
        {skillCategories.map (({title, delay, skills}, idx) => (
          <ScrollFadePop key={idx} delay={delay}>
            <div className="flex flex-col gap-6">
              <h2 className="text-[#B2C8BB] text-2xl sm:text-3xl font-JetBrains font-bold">
                {title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {skills.map ((skill, i) => <Tag key={i} text={skill} />)}
              </div>
            </div>
          </ScrollFadePop>
        ))}
      </div>
    </div>
  );
};

export default Skills;

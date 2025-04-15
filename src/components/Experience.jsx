import Heading from './Heading';
import ScrollFadePop from './ScrollFadePop';

export default function WorkExperience () {
  const experiences = [
    {
      role: 'Senior Embedded Systems Engineer',
      company: 'TechInnovate Solutions',
      period: '2021 - Present',
      description: 'Leading development of mission-critical embedded systems for industrial automation. Designing and implementing firmware using STM32 microcontrollers, optimizing performance and power consumption.',
      achievements: [
        'Reduced boot time by 40% through code optimization',
        'Implemented robust communication protocols for IoT connectivity',
        'Led a team of 4 engineers to deliver projects ahead of schedule',
      ],
    },
    {
      role: 'Embedded Software Developer',
      company: 'SmartSys Technologies',
      period: '2018 - 2021',
      description: 'Developed firmware for consumer electronics products using C/C++ on ARM Cortex-M platforms. Collaborated with hardware engineers to integrate and test embedded solutions.',
      achievements: [
        'Created modular firmware architecture adopted across product lines',
        'Implemented real-time data processing algorithms for sensor fusion',
        'Reduced memory footprint by 30% through code refactoring',
      ],
    },
    {
      role: 'Hardware Design Intern',
      company: 'MicroElectronics Ltd',
      period: '2017 - 2018',
      description: 'Assisted in designing PCB layouts and prototyping embedded systems. Gained hands-on experience with Altium Designer and hardware debugging tools.',
      achievements: [
        'Contributed to the design of a wireless sensor network prototype',
        'Developed test fixtures for automated hardware validation',
        'Documented design processes improving team workflow',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 select-none" id="experience">
      <div className="flex flex-col gap-12">
        <Heading heading={'WORK EXPERIENCE'} />

        <div className="space-y-14">
          {experiences.map ((exp, index) => (
            <ScrollFadePop key={index} delay={index * 0.2}>
              {' '}
              <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10">
                  <div className="space-y-2">
                    <h3 className="font-JetBrains text-lg md:text-xl text-[rgba(17,23,17,0.8)] dark:text-[#B2C8BB] font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-[rgba(17,23,17,0.8)] dark:text-[#B2C8BB] font-JetBrains">
                      {exp.company}
                    </p>
                    <p className="text-[rgba(42,75,73,0.8)] dark:text-[#6D837B] text-sm font-Inter">
                      {exp.period}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[rgba(17,23,17,0.8)] dark:text-[#B2C8BB] leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-3 pl-4 list-disc markder:text-[rgba(17,23,17,0.8)] dark:marker:text-[#B2C8BB] text-[rgba(42,75,73,0.8)] dark:text-[#6D837B]">
                      {exp.achievements.map ((achievement, i) => (
                        <li key={i} className="text-sm md:text-base">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index !== experiences.length - 1 &&
                  <hr className="border-t border-[rgba(17,23,17,0.5)] dark:border-[#6D837B]/30 mt-6" />}
              </div>
            </ScrollFadePop>
          ))}
        </div>
      </div>
    </section>
  );
}

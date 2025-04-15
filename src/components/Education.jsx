import React from 'react';
import {GraduationCap, Building2} from 'lucide-react';
import Heading from './Heading';
import ScrollFadePop from './ScrollFadePop';

const educationData = [
  {
    title: 'Post Graduate Diploma',
    field: 'Embedded Systems Development',
    institute: 'Carnegie Mellon University',
    year: '2018 - 2020',
  },
  {
    title: 'Bachelor’s In Engineering',
    field: 'Electronics and Communication',
    institute: 'Gujarat Technology University, Ahmedabad | India',
    year: '2011 - 2015',
  },
];

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col gap-20 px-5 sm:px-10 py-16 sm:py-24 text-[rgba(17,23,17,0.8)] dark:text-[#B2C8BB] font-['JetBrains_Mono'] select-none"
    >
      <Heading heading="Education" />

      <div className="flex flex-col gap-8">
        {educationData.map (({title, field, institute, year}, index) => (
          <ScrollFadePop key={index} delay={index * 0.2}>
            <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-10 rounded-2xl bg-[rgba(170,179,186,0.5)] dark:bg-[#1C2B2B] border border-[rgba(17,23,17,0.5)]">
              <div className="flex flex-col gap-3">
                <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                  <GraduationCap
                    className="text-[rgba(17,23,17,0.8)] dark:text-[#6D837B]"
                    aria-hidden="true"
                  />
                  {title}
                </h3>

                <p className="text-sm md:text-base font-medium">{field}</p>

                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Building2
                    className="text-[rgba(17,23,17,0.8)] dark:text-[#6D837B]"
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{institute}</span>
                </div>
              </div>

              <div className="text-sm md:text-base text-right md:text-left font-medium md:font-semibold min-w-[110px] self-start md:self-center">
                {year}
              </div>
            </div>
          </ScrollFadePop>
        ))}
      </div>
    </div>
  );
};

export default Education;

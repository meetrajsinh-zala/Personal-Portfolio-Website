import React from 'react';

const Heading = ({heading}) => {
  return (
    <h1 className="font-JetBrains 
                 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                 dark:text-[#6D837B] text-[#2A4B49] 
                 dark:text-shadow-[0_0_20px_rgba(77,102,96,0.5)]
                 text-shadow-[0_0_20px_rgba(42,75,73,0.4)] 
                 uppercase 
                 tracking-wider 
                 text-center sm:text-left 
                 px-4 sm:px-0">
      &gt; {heading} &lt;
    </h1>
  );
};

export default Heading;

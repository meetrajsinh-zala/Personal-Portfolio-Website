import React from 'react';

const Heading = ({heading}) => {
  return (
    <h1 className="font-JetBrains text-3xl sm:text-4xl md:text-5xl text-[#6D837B] text-shadow-[0_0_12px_rgb(77_102_96)] uppercase tracking-wide text-center sm:text-left">
      &gt; {heading} &lt;
    </h1>
  );
};

export default Heading;

import React from 'react';

const Tag = React.memo (({text, className = ''}) => {
  return (
    <div
      className={`bg-[rgba(170,179,186,0.8)] border border-[rgba(17,23,17,0.1)] text-[rgba(17,28,17,0.80)] dark:bg-[#111c1d93] dark:text-[#B2C8BB] text-[12px] px-3 py-2 rounded-3xl 
                  font-Inter font-medium uppercase text-center 
                  shadow-[0_0_12px_rgba(17,28,17,0.2)] dark:shadow-[0_0_12px_rgb(109_131_123)] inline-block ${className}`}
      role="status"
      aria-label={`Tag: ${text}`}
    >
      {text}
    </div>
  );
});

export default Tag;

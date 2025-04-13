import React from 'react';

const Tag = React.memo (({text, className = ''}) => {
  return (
    <div
      className={`bg-[#111c1d93] text-[#B2C8BB] text-[12px] px-3 py-2 rounded-3xl 
                  font-Inter font-medium uppercase text-center 
                  shadow-[0_0_12px_rgb(109_131_123)] inline-block ${className}`}
      role="status"
      aria-label={`Tag: ${text}`}
    >
      {text}
    </div>
  );
});

export default Tag;

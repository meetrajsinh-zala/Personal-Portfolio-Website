import React from 'react';

const Footer = () => {
  return (
    <footer className="font-JetBrains font-bold text-center p-4 md:p-6 lg:p-10">
      <div className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#B2C8BB]">
        © {new Date ().getFullYear ()} John Doe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

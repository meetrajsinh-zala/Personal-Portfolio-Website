import React from 'react';

const ProjectCard = ({ImgUrl, Title, Discription, handleShowMore}) => {
  return (
    <div className="group relative w-full max-w-[400px] sm:h-[496px] h-auto flex flex-col items-center bg-[rgba(109,131,123,0.2)] rounded-bl-xl rounded-br-xl rounded-tl-3xl rounded-tr-3xl hover:scale-95 transition-all duration-300 hover:shadow-[0_0_12px_rgb(109_131_123)] mx-auto overflow-hidden">
      <button
        onClick={handleShowMore}
        className="absolute top-4 right-4 bg-[#2a4141] text-[#B2C8BB] text-xs sm:text-sm px-3 py-1 rounded-full
             opacity-100 scale-100
             sm:opacity-0 sm:scale-90 sm:group-hover:opacity-100 sm:group-hover:scale-100
             transition-all duration-300 cursor-pointer"
      >
        Show More
      </button>

      <img
        src={ImgUrl}
        alt={Title}
        className="w-[200px] h-[200px] object-cover mt-4 rounded-lg"
      />

      <div className="flex flex-col gap-4 sm:gap-9 bg-[rgba(109,131,123,0.1)] w-full h-full rounded-t-3xl rounded-b-xl p-4 sm:p-[15px]">
        <h3 className="text-[#B2C8BB] font-JetBrains text-lg sm:text-xl font-bold">
          {Title}
        </h3>
        <p className="text-[#B2C8BB] font-Inter font-medium text-base sm:text-lg">
          {Discription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

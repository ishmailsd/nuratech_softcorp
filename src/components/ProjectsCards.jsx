import React from 'react';

const ProjectsCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[70vw] md:w-[50vw]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 mt-2">
        <h3 className="text-lg text-black mb-2 font-semibold">{title}</h3>
        <p className="text-gray-600 ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;

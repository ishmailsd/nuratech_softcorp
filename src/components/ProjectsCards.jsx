import React from 'react';

const ProjectsCard = ({ image, title, description }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden w-[70vw] md:w-[50vw]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 mt-2">
        <h3 className="text-lg text-gray-100 mb-2 font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;

import React from 'react';
interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, desc, img, tags }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600 p-6 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
     {/* Image*/}
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img src={img} alt={title}  className="w-full h-80 object-cover rounded-lg transform transition duration-500 hover:scale-110" />
      </div>

      {/* Title and Description */}
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white">{desc}</p>

      {/* Tags */}
      <div className="mt-4 flex space-x-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-black text-white px-3 py-1 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
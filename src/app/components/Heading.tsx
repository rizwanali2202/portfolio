import React from 'react';

interface PropsType {
  title: string;
  className?: string;  // Optional prop for custom styles
}

const Heading: React.FC<PropsType> = ({ title, className = '' }) => {
  return (
    <div className="text-center text-4xl pb-8">
      {/* Apply dynamic className if provided */}
      <p className={`border-b-4 inline-block pb-2 ${className}`}>
        {title}
      </p>
    </div>
  );
};

export default Heading;
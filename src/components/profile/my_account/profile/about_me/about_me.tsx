import React from 'react';

interface AboutMeProps {
  description?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ description }) => {
  if (!description) return null;
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">About Me</h3>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{description}</p>
    </div>
  );
};

export default AboutMe;
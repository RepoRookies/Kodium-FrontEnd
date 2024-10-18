import React from 'react';
import TitleSection from './Sections/TitleSection';
import ProblemSet from './Sections/ProblemSet';

const Problems: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-8">
      <TitleSection />
      <ProblemSet />
    </div>
  ); 
};

export default Problems;

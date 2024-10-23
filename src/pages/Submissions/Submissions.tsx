import React from 'react';
import TitleSection from './Sections/TitleSection';
import SubmissionSet from './Sections/SubmissionSet';

const Submissions: React.FC = () => {
  
  return (
    <div className="flex flex-col justify-center gap-4 p-8">
      <TitleSection />
      <SubmissionSet />
    </div>
  );
};

export default Submissions;

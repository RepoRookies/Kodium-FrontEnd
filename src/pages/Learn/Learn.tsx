import React from 'react';
import TopicSet from './Sections/TopicSet';
import TitleSection from '../Learn/Sections/TitleSection';

const Learn: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-8">
      <TitleSection />
      <TopicSet />
    </div>
  );
};

export default Learn;

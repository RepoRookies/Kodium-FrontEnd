import React from 'react';
import MainSection from './Sections/MainSection.tsx';
import TopicSection from './Sections/TopicSection.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-row justify-between w-full p-8">
      <MainSection />
      <TopicSection />
    </div>
  );
};

export default Home;

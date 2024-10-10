import React from 'react';
import WelcomeSection from './WelcomeSection';
import FeaturesSecton from './FeaturesSecton';

const MainSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <WelcomeSection />
      <FeaturesSecton />
    </div>
  );
};

export default MainSection;

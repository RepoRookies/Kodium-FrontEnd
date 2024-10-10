import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-between pl-8">
      <div className="text-xl text-primary-foreground/85 font-bold">
        Welcome to <span className="text-3xl text-gold tracking-wide">Kodium</span>
      </div>
    </div>
  );
};

export default WelcomeSection;

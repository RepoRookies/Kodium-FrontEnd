import React from 'react';

interface Feature {
  logo: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-wrap gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-xs p-6 rounded-lg bg-primary/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.logo}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-primary-foreground/80 text-center font-regular">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesGrid from './../../../src/components/Features/Features.tsx';

const mockFeatures = [
  {
    logo: <div data-testid="logo-1">Logo 1</div>,
    title: 'Feature 1',
    description: 'Description for feature 1',
  },
  {
    logo: <div data-testid="logo-2">Logo 2</div>,
    title: 'Feature 2',
    description: 'Description for feature 2',
  },
  {
    logo: <div data-testid="logo-3">Logo 3</div>,
    title: 'Feature 3',
    description: 'Description for feature 3',
  },
];

describe('FeaturesGrid Component', () => {
  it('renders without crashing', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check that the FeaturesGrid container is in the document
    const container = screen.getByRole('region');
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of feature items', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check that each feature item is rendered
    const featureItems = screen.getAllByRole('heading');
    expect(featureItems.length).toBe(mockFeatures.length);
  });

  it('renders the correct titles for each feature', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check each title
    mockFeatures.forEach((feature) => {
      const titleElement = screen.getByText(feature.title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('renders the correct descriptions for each feature', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check each description
    mockFeatures.forEach((feature) => {
      const descriptionElement = screen.getByText(feature.description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  it('renders the correct logos for each feature', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check each logo
    mockFeatures.forEach((feature, index) => {
      const logoElement = screen.getByTestId(`logo-${index + 1}`);
      expect(logoElement).toBeInTheDocument();
    });
  });

  it('renders an empty state if no features are provided', () => {
    render(<FeaturesGrid features={[]} />);

    // Check that the empty state message is displayed
    const noFeatureMessage = screen.queryByText(/no features available/i);
    expect(noFeatureMessage).toBeNull();
  });

  it('handles a large number of features correctly', () => {
    // Generate a large number of mock features
    const largeFeatureList = Array.from({ length: 100 }, (_, index) => ({
      logo: <div data-testid={`logo-${index + 1}`}>Logo {index + 1}</div>,
      title: `Feature ${index + 1}`,
      description: `Description for feature ${index + 1}`,
    }));

    render(<FeaturesGrid features={largeFeatureList} />);

    // Check that the number of rendered features matches the large input
    const featureItems = screen.getAllByRole('heading');
    expect(featureItems.length).toBe(largeFeatureList.length);
  });

  it('renders feature cards with correct structure', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check that each feature card has a logo, title, and description
    mockFeatures.forEach((feature, index) => {
      const logoElement = screen.getByTestId(`logo-${index + 1}`);
      const titleElement = screen.getByText(feature.title);
      const descriptionElement = screen.getByText(feature.description);

      expect(logoElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  it('renders feature cards with correct class names', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check the class name for the feature grid container
    const container = screen.getByRole('region');
    expect(container).toHaveClass('max-w-4xl');

    // Check class names of feature items
    mockFeatures.forEach((_, index) => {
      const featureCard = screen.getByTestId(`logo-${index + 1}`).closest('div');
      expect(featureCard).toHaveClass('flex flex-col items-center max-w-xs p-6 rounded-lg');
    });
  });

  it('applies hover effect on feature cards', () => {
    render(<FeaturesGrid features={mockFeatures} />);

    // Check if feature cards have the hover classes
    mockFeatures.forEach((_, index) => {
      const featureCard = screen.getByTestId(`logo-${index + 1}`).closest('div');
      expect(featureCard).toHaveClass('hover:shadow-xl');
    });
  });
});

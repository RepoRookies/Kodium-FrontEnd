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
    title: 'Feature 2', // Change title to ensure uniqueness
    description: 'Description for feature 2',
  },
];

describe('FeaturesGrid Component', () => {
  it('renders with features', () => {
    render(<FeaturesGrid features={mockFeatures} />);
    
    // Check that the unique feature titles are displayed
    const featureTitles = screen.getAllByRole('heading', { level: 3 }); // Use role to get specific headings
    expect(featureTitles).toHaveLength(mockFeatures.length); // Check if the number of headings matches mockFeatures
  });

  it('renders without features', () => {
    render(<FeaturesGrid features={[]} />);
    
    // Check that no feature titles are displayed
    expect(screen.queryByText(/feature/i)).toBeNull(); // No features should display
  });
});

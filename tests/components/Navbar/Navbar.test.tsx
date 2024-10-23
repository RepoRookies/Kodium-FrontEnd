import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../../src/components/NavBar/NavBar.tsx';

const renderWithRouter = (ui: React.ReactNode) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('NavBar Component', () => {
  beforeEach(() => {
    renderWithRouter(<NavBar />);
  });

  it('renders without crashing and shows logo', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByAltText('Kodium @IIITK')).toBeInTheDocument();
  });

  it('renders navigation elements and labels', () => {
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0); // Just check if there are any links

    const navLabels = ['Home', 'Learn', 'Problems', 'Contest'];
    navLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('displays correct routes on navigation', () => {
    const learnLink = screen.getByText('Learn');
    fireEvent.click(learnLink);
    expect(window.location.pathname).toMatch(/\/learn/); // Check that it matches the expected path
  });
});

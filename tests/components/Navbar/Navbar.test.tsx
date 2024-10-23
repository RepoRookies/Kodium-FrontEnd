import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../../src/components/NavBar/NavBar.tsx';

const renderWithRouter = (ui: React.ReactNode) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('NavBar Component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<NavBar />);

    // Check if the NavBar is in the document
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  it('renders the logo with correct alt text', () => {
    renderWithRouter(<NavBar />);

    // Check if the logo is rendered correctly
    const logo = screen.getByAltText('Kodium @IIITK');
    expect(logo).toBeInTheDocument();
  });

  it('renders the correct number of navigation elements', () => {
    renderWithRouter(<NavBar />);

    // Check if all navigation elements are rendered
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBe(5); // 4 menu items + 1 login link or profile
  });

  it('renders correct labels for navigation elements', () => {
    renderWithRouter(<NavBar />);

    // Check if each navigation element label is rendered
    const navLabels = ['Home', 'Learn', 'Problems', 'Contest'];
    navLabels.forEach((label) => {
      const navElement = screen.getByText(label);
      expect(navElement).toBeInTheDocument();
    });
  });

  it('sets active class on the correct navigation element', () => {
    renderWithRouter(<NavBar />);

    // Click on 'Learn' to set it as active
    const learnLink = screen.getByText('Learn');
    fireEvent.click(learnLink);

    // Check if 'Learn' is set as active
    expect(learnLink.closest('a')).toHaveAttribute('aria-current', 'page');
  });

  it('navigates to the correct route when clicking a navigation element', () => {
    renderWithRouter(<NavBar />);

    // Simulate clicking on 'Problems'
    const problemsLink = screen.getByText('Problems');
    fireEvent.click(problemsLink);

    // Check if 'Problems' link redirects correctly
    expect(problemsLink.closest('a')).toHaveAttribute('href', '/problems');
  });

  it('shows the profile when the user is logged in', () => {
    renderWithRouter(<NavBar />);

    // Check if the Profile component is visible
    const profileComponent = screen.getByText('Kodium Admin');
    expect(profileComponent).toBeInTheDocument();
  });

  it('shows the login button when the user is not logged in', () => {
    // Mocking isLoggedIn to be false
    jest.spyOn(React, 'useState').mockReturnValueOnce([false, jest.fn()]);

    renderWithRouter(<NavBar />);

    // Check if the login button is rendered
    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  it('navigates to login when clicking login button', () => {
    // Mocking isLoggedIn to be false
    jest.spyOn(React, 'useState').mockReturnValueOnce([false, jest.fn()]);

    renderWithRouter(<NavBar />);

    // Simulate clicking on the login button
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);

    // Check if it redirects to login
    expect(loginButton.closest('a')).toHaveAttribute('href', '/login');
  });

  it('renders with correct class names', () => {
    renderWithRouter(<NavBar />);

    // Check if the main NavBar container has the correct class
    const navBarContainer = screen.getByRole('navigation');
    expect(navBarContainer).toHaveClass(
      'sticky flex flex-row gap-8 justify-between items-center z-10 top-0 w-full px-4 py-2 bg-primary text-primary-foreground'
    );
  });

  it('changes active state when clicking different navigation items', () => {
    renderWithRouter(<NavBar />);

    // Click on 'Home' link
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(homeLink.closest('a')).toHaveAttribute('aria-current', 'page');

    // Click on 'Contest' link
    const contestLink = screen.getByText('Contest');
    fireEvent.click(contestLink);
    expect(contestLink.closest('a')).toHaveAttribute('aria-current', 'page');
  });

  it('renders navigation items with the correct color', () => {
    renderWithRouter(<NavBar />);

    // Check if each nav element has the correct color class
    const navElements = ['Home', 'Learn', 'Problems', 'Contest'];
    navElements.forEach((label) => {
      const navElement = screen.getByText(label);
      expect(navElement.closest('a')).toHaveClass('text-primary-foreground');
    });
  });

  it('renders the profile component when user is logged in', () => {
    renderWithRouter(<NavBar />);

    // Check if the Profile component is rendered
    const profileElement = screen.getByText('Kodium Admin');
    expect(profileElement).toBeInTheDocument();
  });

  it('applies hover effect on navigation elements', () => {
    renderWithRouter(<NavBar />);

    // Check hover effect class on navigation elements
    const homeLink = screen.getByText('Home');
    expect(homeLink.closest('a')).toHaveClass('hover:text-secondary');
  });

  it('displays different routes correctly in the URL after clicking on nav items', () => {
    renderWithRouter(<NavBar />);

    // Simulate clicking on 'Learn' link
    const learnLink = screen.getByText('Learn');
    fireEvent.click(learnLink);

    // Expect the URL to be /learn
    expect(window.location.pathname).toBe('/learn');
  });
});

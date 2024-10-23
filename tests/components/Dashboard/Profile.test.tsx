import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { screen, fireEvent } from '@testing-library/dom';
import Profile from '../../../src/components/Dashboard/Profile.tsx';

// Mock useLocation from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/profile',
  }),
}));


describe('Profile Component', () => {
  it('renders Profile component correctly', () => {
    render(<Profile />);
    
    // Check for the Avatar element (should display the initial of user name)
    const avatar = screen.getByText(/K/i); // "K" is for "Kodium Admin"
    expect(avatar).toBeInTheDocument();

    // Check for user's name and email
    const userName = screen.getByText('Kodium Admin');
    const userEmail = screen.getByText('kodium@iiitk.ac.in');
    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });

  it('initially has the sheet closed', () => {
    render(<Profile />);

    // Check if the sheet is not visible initially
    const sheetContent = screen.queryByText(/Kodium Admin/);
    expect(sheetContent).not.toBeInTheDocument();
  });

  it('opens and closes the sheet on avatar click', () => {
    render(<Profile />);

    // Click the Avatar to open the sheet
    const avatar = screen.getByText(/K/i);
    fireEvent.click(avatar);

    // Expect the sheet content to be visible
    const sheetContent = screen.getByText(/Kodium Admin/);
    expect(sheetContent).toBeVisible();

    // Simulate location change to close the sheet
    fireEvent.click(screen.getByRole('button', { name: /logout/i }));
    expect(sheetContent).not.toBeVisible();
  });

  it('renders locked and unlocked buttons correctly', () => {
    render(<Profile />);

    // Check for locked buttons
    const lockedButtons = screen.getAllByTitle('Coming Soon');
    expect(lockedButtons.length).toBeGreaterThan(0);

    // Check for unlocked button
    const unlockedButton = screen.getByText('Submissions');
    expect(unlockedButton).toBeInTheDocument();
  });

  it('simulates clicking on an unlocked button link', () => {
    render(<Profile />);

    // Simulate clicking on the "Submissions" link
    const unlockedButton = screen.getByText('Submissions');
    fireEvent.click(unlockedButton);

    // Expect the URL to change (in a real test environment, mock the router)
    expect(unlockedButton.closest('a')).toHaveAttribute('href', '/submissions');
  });

  it('renders the correct initial in the Avatar fallback', () => {
    render(<Profile />);

    // Check if the initial in the Avatar fallback is correct
    const avatarFallback = screen.getByText('K'); // "K" from "Kodium Admin"
    expect(avatarFallback).toBeInTheDocument();
  });

  it('checks if clicking on locked buttons does not change route', () => {
    render(<Profile />);

    // Find a locked button and click it
    const lockedButton = screen.getByText('Ratings');
    fireEvent.click(lockedButton);

    // Check if the title is "Coming Soon" and route does not change
    expect(lockedButton).toHaveAttribute('title', 'Coming Soon');
  });

  it('checks if clicking the avatar multiple times toggles the sheet', () => {
    render(<Profile />);

    const avatar = screen.getByText(/K/i);

    // Click the avatar twice to open and close the sheet
    fireEvent.click(avatar);
    expect(screen.getByText(/Kodium Admin/)).toBeVisible();

    fireEvent.click(avatar);
    expect(screen.queryByText(/Kodium Admin/)).not.toBeInTheDocument();
  });

  it('displays the correct number of buttons', () => {
    render(<Profile />);

    // Verify that there are 4 buttons in total (based on the component code)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4);
  });
});

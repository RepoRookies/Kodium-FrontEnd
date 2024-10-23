import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavLinkEffect from '../../../src/components/NavBar/NavLinkEffect.tsx';

describe('NavLinkEffect Component', () => {
  it('renders without crashing and displays correct children', () => {
    render(<NavLinkEffect>Test Link</NavLinkEffect>);

    // Check if the component is in the document
    const navLink = screen.getByText('Test Link');
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveTextContent('Test Link');
  });

  it('handles active state correctly', () => {
    render(<NavLinkEffect isActive={true}>Active Link</NavLinkEffect>);
    const activeNavLink = screen.getByText('Active Link');
    expect(activeNavLink).toHaveClass('after:opacity-100');

    render(<NavLinkEffect isActive={false}>Inactive Link</NavLinkEffect>);
    const inactiveNavLink = screen.getByText('Inactive Link');
    expect(inactiveNavLink).toHaveClass('text-background/70');
  });

  it('renders with custom props and special characters', () => {
    render(
      <NavLinkEffect data-testid="custom-link" aria-label="Custom Link">
        !@#$%^&*()
      </NavLinkEffect>
    );

    // Check custom props
    const navLink = screen.getByLabelText('Custom Link');
    expect(navLink).toHaveAttribute('data-testid', 'custom-link');

    // Check special characters
    expect(navLink).toHaveTextContent('!@#$%^&*()');
  });

  it('renders long text and dynamic classes', () => {
    const longText = 'This is a very long link text that should render correctly.';
    const { rerender } = render(<NavLinkEffect color="navy">{longText}</NavLinkEffect>);

    // Check if long text is rendered correctly
    const navLink = screen.getByText(longText);
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveClass('after:bg-navy');

    // Rerender with a different color
    rerender(<NavLinkEffect color="sky">{longText}</NavLinkEffect>);
    expect(navLink).toHaveClass('after:bg-sky');
  });

  it('renders nested elements correctly', () => {
    render(
      <NavLinkEffect>
        NavLink <span>with element</span>
      </NavLinkEffect>
    );

    // Check if text and elements are rendered together
    expect(screen.getByText('NavLink')).toBeInTheDocument();
    expect(screen.getByText('with element')).toBeInTheDocument();
  });
});

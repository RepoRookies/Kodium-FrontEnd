import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '../../../src/components/ui/badge.tsx';

describe('Badge', () => {
  it('renders Badge component with default variant', () => {
    const { container } = render(<Badge data-testid="badge">Default Badge</Badge>);
    const badgeElement = container.querySelector('[data-testid="badge"]');

    // Check if badge is rendered
    expect(badgeElement).toBeInTheDocument();

    // Check for default variant class
    expect(badgeElement).toHaveClass('bg-primary');
    expect(badgeElement).toHaveTextContent('Default Badge');
  });

  it('renders Badge with secondary variant', () => {
    const { container } = render(
      <Badge variant="secondary" data-testid="badge">Secondary Badge</Badge>
    );
    const badgeElement = container.querySelector('[data-testid="badge"]');

    // Check if badge is rendered
    expect(badgeElement).toBeInTheDocument();

    // Check for secondary variant class
    expect(badgeElement).toHaveClass('bg-secondary');
    expect(badgeElement).toHaveTextContent('Secondary Badge');
  });

  it('renders Badge with destructive variant', () => {
    const { container } = render(
      <Badge variant="destructive" data-testid="badge">Destructive Badge</Badge>
    );
    const badgeElement = container.querySelector('[data-testid="badge"]');

    // Check if badge is rendered
    expect(badgeElement).toBeInTheDocument();

    // Check for destructive variant class
    expect(badgeElement).toHaveClass('bg-destructive');
    expect(badgeElement).toHaveTextContent('Destructive Badge');
  });

  it('renders Badge with outline variant', () => {
    const { container } = render(
      <Badge variant="outline" data-testid="badge">Outline Badge</Badge>
    );
    const badgeElement = container.querySelector('[data-testid="badge"]');

    // Check if badge is rendered
    expect(badgeElement).toBeInTheDocument();

    // Check for outline variant class
    expect(badgeElement).toHaveClass('text-foreground');
    expect(badgeElement).toHaveTextContent('Outline Badge');
  });

  it('renders Badge with gold variant', () => {
    const { container } = render(
      <Badge variant="gold" data-testid="badge">Gold Badge</Badge>
    );
    const badgeElement = container.querySelector('[data-testid="badge"]');

    // Check if badge is rendered
    expect(badgeElement).toBeInTheDocument();

    // Check for gold variant class
    expect(badgeElement).toHaveClass('bg-primary', 'hover:bg-gold');
    expect(badgeElement).toHaveTextContent('Gold Badge');
  });

  it('applies custom className to Badge', () => {
    const { container } = render(
      <Badge className="custom-class" data-testid="badge">Custom Class Badge</Badge>
    );
    const badgeElement = container.querySelector('[data-testid="badge"]');

    // Check if badge is rendered
    expect(badgeElement).toBeInTheDocument();

    // Check if custom class is applied
    expect(badgeElement).toHaveClass('custom-class');
    expect(badgeElement).toHaveTextContent('Custom Class Badge');
  });
});

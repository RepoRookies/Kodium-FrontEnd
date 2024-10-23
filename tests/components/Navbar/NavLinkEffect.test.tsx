import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavLinkEffect from '../../../src/components/NavBar/NavLinkEffect.tsx';

describe('NavLinkEffect Component', () => {
  it('renders without crashing', () => {
    render(<NavLinkEffect>Test Link</NavLinkEffect>);

    // Check if the component is in the document
    const navLink = screen.getByText('Test Link');
    expect(navLink).toBeInTheDocument();
  });

  it('renders the correct children', () => {
    render(<NavLinkEffect>Link Text</NavLinkEffect>);

    // Check if the correct children text is rendered
    const navLink = screen.getByText('Link Text');
    expect(navLink).toHaveTextContent('Link Text');
  });

  it('applies the default class names', () => {
    render(<NavLinkEffect>Default Link</NavLinkEffect>);

    // Check if default class names are applied
    const navLink = screen.getByText('Default Link');
    expect(navLink).toHaveClass(
      'relative font-medium after:absolute after:left-0 after:-bottom-2 after:w-full after:h-0.5 after:opacity-0 after:bg-accent text-background/70 hover:after:opacity-100 hover:after:bg-background'
    );
  });

  it('applies the correct color variant classes', () => {
    const colors = [
      'default',
      'primary',
      'secondary',
      'destructive',
      'success',
      'navy',
      'sky',
      'gold',
      'silver',
    ];

    colors.forEach((color) => {
      render(<NavLinkEffect color={color}>{color} Link</NavLinkEffect>);
      const navLink = screen.getByText(`${color} Link`);

      // Check if the correct color class is applied
      expect(navLink).toHaveClass(`after:bg-${color}`);
    });
  });

  it('applies the active variant class when isActive is true', () => {
    render(<NavLinkEffect isActive={true}>Active Link</NavLinkEffect>);

    // Check if the active class is applied
    const navLink = screen.getByText('Active Link');
    expect(navLink).toHaveClass('after:opacity-100');
  });

  it('applies the inactive variant class when isActive is false', () => {
    render(<NavLinkEffect isActive={false}>Inactive Link</NavLinkEffect>);

    // Check if the inactive class is applied
    const navLink = screen.getByText('Inactive Link');
    expect(navLink).toHaveClass('text-background/70');
  });

  it('applies hover styles on inactive links', () => {
    render(<NavLinkEffect>Hover Link</NavLinkEffect>);

    // Check if hover styles are applied to inactive links
    const navLink = screen.getByText('Hover Link');
    expect(navLink).toHaveClass('hover:after:opacity-100 hover:after:bg-background');
  });

  it('renders with different color and active combination', () => {
    render(
      <NavLinkEffect color="gold" isActive={true}>
        Active Gold Link
      </NavLinkEffect>
    );

    // Check if the correct classes for gold and active are applied
    const navLink = screen.getByText('Active Gold Link');
    expect(navLink).toHaveClass('after:bg-gold after:opacity-100');
  });

  it('handles empty children gracefully', () => {
    render(<NavLinkEffect>{null}</NavLinkEffect>);

    // Check if the component does not render any text
    const navLink = screen.queryByText('');
    expect(navLink).toBeNull();
  });

  it('renders with custom props', () => {
    render(
      <NavLinkEffect data-testid="custom-link" aria-label="Custom Link">
        Custom Link
      </NavLinkEffect>
    );

    // Check if custom props are applied
    const navLink = screen.getByLabelText('Custom Link');
    expect(navLink).toHaveAttribute('data-testid', 'custom-link');
  });

  it('renders special characters in children', () => {
    render(<NavLinkEffect>!@#$%^&*()</NavLinkEffect>);

    // Check if special characters are rendered correctly
    const navLink = screen.getByText('!@#$%^&*()');
    expect(navLink).toBeInTheDocument();
  });

  it('renders long text in children', () => {
    const longText = 'This is a very long link text that should render correctly.';
    render(<NavLinkEffect>{longText}</NavLinkEffect>);

    // Check if long text is rendered correctly
    const navLink = screen.getByText(longText);
    expect(navLink).toBeInTheDocument();
  });

  it('applies dynamic class changes when rerendered', () => {
    const { rerender } = render(
      <NavLinkEffect color="navy">Dynamic Link</NavLinkEffect>
    );

    // Check initial class
    const navLink = screen.getByText('Dynamic Link');
    expect(navLink).toHaveClass('after:bg-navy');

    // Rerender with a different color
    rerender(<NavLinkEffect color="sky">Dynamic Link</NavLinkEffect>);
    expect(navLink).toHaveClass('after:bg-sky');
  });

  it('renders with different types of child nodes', () => {
    render(
      <NavLinkEffect>
        <strong>Bold Text</strong>
        <em>Italic Text</em>
      </NavLinkEffect>
    );

    // Check if bold and italic text are rendered correctly
    const boldText = screen.getByText('Bold Text');
    const italicText = screen.getByText('Italic Text');
    expect(boldText).toBeInTheDocument();
    expect(italicText).toBeInTheDocument();
  });

  it('renders span element as the root tag', () => {
    render(<NavLinkEffect>Span Test Link</NavLinkEffect>);

    // Check if the component renders as a <span> element
    const navLink = screen.getByText('Span Test Link');
    expect(navLink.tagName).toBe('SPAN');
  });

  it('renders with a combination of text and elements as children', () => {
    render(
      <NavLinkEffect>
        NavLink <span>with element</span>
      </NavLinkEffect>
    );

    // Check if text and elements are rendered together
    const textElement = screen.getByText('NavLink');
    const childElement = screen.getByText('with element');
    expect(textElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });
});

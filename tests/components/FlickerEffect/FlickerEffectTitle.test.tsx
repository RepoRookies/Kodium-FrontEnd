import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlickerTitle from '../../../src/components/FlickerEffect/FlickerEffectTitle.tsx';

describe('FlickerTitle Component', () => {
  it('renders without crashing', () => {
    render(<FlickerTitle>Test Flicker Title</FlickerTitle>);

    // Check if the component is in the document
    const flickerTitle = screen.getByText('Test Flicker Title');
    expect(flickerTitle).toBeInTheDocument();
  });

  it('renders the correct children', () => {
    render(<FlickerTitle>Flicker Title Text</FlickerTitle>);

    // Check if the correct children text is rendered
    const flickerTitle = screen.getByText('Flicker Title Text');
    expect(flickerTitle).toHaveTextContent('Flicker Title Text');
  });

  it('applies default class names', () => {
    render(<FlickerTitle>Flicker Title</FlickerTitle>);

    // Check if the default classes are applied
    const flickerTitle = screen.getByText('Flicker Title');
    expect(flickerTitle).toHaveClass(
      'inline-flex gap-2 animate-flicker text-primary-foreground text-2xl font-bold cursor-default'
    );
  });

  it('applies additional class names when provided', () => {
    render(<FlickerTitle className="extra-class">Flicker Title</FlickerTitle>);

    // Check if additional classes are applied along with default classes
    const flickerTitle = screen.getByText('Flicker Title');
    expect(flickerTitle).toHaveClass('extra-class');
  });

  it('renders children elements correctly', () => {
    render(
      <FlickerTitle>
        <span>Child Element 1</span>
        <span>Child Element 2</span>
      </FlickerTitle>
    );

    // Check if child elements are rendered correctly
    const child1 = screen.getByText('Child Element 1');
    const child2 = screen.getByText('Child Element 2');
    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    render(<FlickerTitle>{null}</FlickerTitle>);

    // Check if the component does not render any content
    const flickerTitle = screen.queryByText(/./); // Use regex to match any non-empty text
    expect(flickerTitle).not.toBeInTheDocument(); // Expect flickerTitle to be null
  });

  it('renders with the correct tag (span)', () => {
    render(<FlickerTitle>Flicker Title</FlickerTitle>);

    // Check if the component renders as a <span> element
    const flickerTitle = screen.getByText('Flicker Title');
    expect(flickerTitle.tagName).toBe('SPAN');
  });

  it('renders special characters in children', () => {
    render(<FlickerTitle>!@#$%^&*()</FlickerTitle>);

    // Check if special characters are rendered correctly
    const flickerTitle = screen.getByText('!@#$%^&*()');
    expect(flickerTitle).toBeInTheDocument();
  });

  it('renders long text in children', () => {
    const longText = 'This is a very long flicker title that should render correctly without any issues.';
    render(<FlickerTitle>{longText}</FlickerTitle>);

    // Check if long text is rendered correctly
    const flickerTitle = screen.getByText(longText);
    expect(flickerTitle).toBeInTheDocument();
  });
});

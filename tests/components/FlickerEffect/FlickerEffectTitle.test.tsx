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

    // Check if the component does not render any text
    const flickerTitle = screen.queryByText('');
    expect(flickerTitle).toBeNull();
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

  it('does not render when no children are provided', () => {
    render(<FlickerTitle>{null}</FlickerTitle>);

    // Check if the component does not render any content
    const flickerTitle = screen.queryByText('');
    expect(flickerTitle).toBeNull();
  });

  it('renders with a combination of text and elements as children', () => {
    render(
      <FlickerTitle>
        Flicker Title <span>with element</span>
      </FlickerTitle>
    );

    // Check if text and elements are rendered together
    const textElement = screen.getByText('Flicker Title');
    const childElement = screen.getByText('with element');
    expect(textElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });

  it('applies dynamic class name changes', () => {
    const { rerender } = render(
      <FlickerTitle className="initial-class">Flicker Title</FlickerTitle>
    );

    // Check initial class
    const flickerTitle = screen.getByText('Flicker Title');
    expect(flickerTitle).toHaveClass('initial-class');

    // Rerender with a new class
    rerender(<FlickerTitle className="updated-class">Flicker Title</FlickerTitle>);
    expect(flickerTitle).toHaveClass('updated-class');
  });

  it('does not crash with null children', () => {
    render(<FlickerTitle>{null}</FlickerTitle>);

    // Check that the component does not crash and is not rendered
    const flickerTitle = screen.queryByText('');
    expect(flickerTitle).toBeNull();
  });

  it('applies animation class correctly', () => {
    render(<FlickerTitle>Animated Flicker Title</FlickerTitle>);

    // Check if the animation class is applied
    const flickerTitle = screen.getByText('Animated Flicker Title');
    expect(flickerTitle).toHaveClass('animate-flicker');
  });

  it('renders with different types of child nodes', () => {
    render(
      <FlickerTitle>
        <strong>Bold Text</strong>
        <em>Italic Text</em>
      </FlickerTitle>
    );

    // Check if bold and italic text is rendered correctly
    const boldText = screen.getByText('Bold Text');
    const italicText = screen.getByText('Italic Text');
    expect(boldText).toBeInTheDocument();
    expect(italicText).toBeInTheDocument();
  });
});

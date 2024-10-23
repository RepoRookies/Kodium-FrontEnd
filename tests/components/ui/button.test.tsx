import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../../src/components/ui/button.tsx';

describe('Button', () => {
  it('renders Button component with default variant and size', () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const buttonElement = getByRole('button');

    // Check if button is rendered
    expect(buttonElement).toBeInTheDocument();

    // Check for default variant class
    expect(buttonElement).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90');
    
    // Check for default size class
    expect(buttonElement).toHaveClass('h-10 px-4 py-2');
    
    // Check button text
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('renders Button with success variant', () => {
    const { getByRole } = render(<Button variant="success">Success</Button>);
    const buttonElement = getByRole('button');

    // Check if button is rendered
    expect(buttonElement).toBeInTheDocument();

    // Check for success variant class
    expect(buttonElement).toHaveClass('bg-success text-success-foreground hover:bg-success/90');

    // Check button text
    expect(buttonElement).toHaveTextContent('Success');
  });

  it('renders Button with ghost variant', () => {
    const { getByRole } = render(<Button variant="ghost">Ghost</Button>);
    const buttonElement = getByRole('button');

    // Check if button is rendered
    expect(buttonElement).toBeInTheDocument();

    // Check for ghost variant class
    expect(buttonElement).toHaveClass('hover:bg-accent hover:text-accent-foreground');

    // Check button text
    expect(buttonElement).toHaveTextContent('Ghost');
  });

  it('renders Button with large size', () => {
    const { getByRole } = render(<Button size="lg">Large Button</Button>);
    const buttonElement = getByRole('button');

    // Check if button is rendered
    expect(buttonElement).toBeInTheDocument();

    // Check for large size class
    expect(buttonElement).toHaveClass('h-11 rounded-md px-8');
  });

  it('renders Button with icon size', () => {
    const { getByRole } = render(<Button size="icon">🔍</Button>);
    const buttonElement = getByRole('button');

    // Check if button is rendered
    expect(buttonElement).toBeInTheDocument();

    // Check for icon size class
    expect(buttonElement).toHaveClass('h-10 w-10 pb-0.5');
    
    // Check button content
    expect(buttonElement).toHaveTextContent('🔍');
  });

  it('renders Button as a child component when asChild is true', () => {
    const { getByText } = render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const linkElement = getByText('Link Button');

    // Check if link is rendered
    expect(linkElement).toBeInTheDocument();

    // Check if it is rendered as <a> instead of <button>
    expect(linkElement.tagName).toBe('A');

    // Check href attribute
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('applies custom className to Button', () => {
    const { getByRole } = render(
      <Button className="custom-class">Custom Button</Button>
    );
    const buttonElement = getByRole('button');

    // Check if button is rendered
    expect(buttonElement).toBeInTheDocument();

    // Check if custom class is applied
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('handles click event', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = getByRole('button');

    // Simulate click event
    fireEvent.click(buttonElement);

    // Check if click handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

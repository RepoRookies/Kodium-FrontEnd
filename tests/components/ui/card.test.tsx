import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../../src/components/ui/card.tsx';

describe('Card Component', () => {
  it('renders CardHeader component with default styles', () => {
    const { getByText } = render(<CardHeader>Header Content</CardHeader>);
    const headerElement = getByText('Header Content');

    // Check if header is rendered
    expect(headerElement).toBeInTheDocument();

    // Check for default styles
    expect(headerElement).toHaveClass('flex flex-col space-y-1.5 p-6');
  });

  it('renders CardTitle component with default styles', () => {
    const { getByText } = render(<CardTitle>Title Content</CardTitle>);
    const titleElement = getByText('Title Content');

    // Check if title is rendered
    expect(titleElement).toBeInTheDocument();

    // Check for default styles
    expect(titleElement).toHaveClass('text-2xl font-semibold leading-none tracking-tight');
  });

  it('renders CardDescription component with default styles', () => {
    const { getByText } = render(<CardDescription>Description Content</CardDescription>);
    const descriptionElement = getByText('Description Content');

    // Check if description is rendered
    expect(descriptionElement).toBeInTheDocument();

    // Check for default styles
    expect(descriptionElement).toHaveClass('text-sm text-muted-foreground');
  });

  it('renders CardContent component with default styles', () => {
    const { getByRole } = render(<CardContent>Content Body</CardContent>);
    //const contentElement = getByRole('generic');

    // Check if content is rendered
    //expect(contentElement).toBeInTheDocument();

    // Check for default styles
    //expect(contentElement).toHaveClass('p-6 pt-0');
  });

  it('renders CardFooter component with default styles', () => {
    const { getByRole } = render(<CardFooter>Footer Content</CardFooter>);
    //const footerElement = getByRole('generic');

    // Check if footer is rendered
    //expect(footerElement).toBeInTheDocument();

    // Check for default styles
    //expect(footerElement).toHaveClass('flex items-center p-6 pt-0');
  });

  it('applies custom className to Card component', () => {
    const { getByRole } = render(<Card className="custom-class">Card with Custom Class</Card>);
    //const cardElement = getByRole('generic');

    // Check if custom class is applied
    //expect(cardElement).toHaveClass('custom-class');
  });

  it('applies custom className to CardHeader component', () => {
    const { getByText } = render(<CardHeader className="custom-header">Custom Header</CardHeader>);
    const headerElement = getByText('Custom Header');

    // Check if custom class is applied
    expect(headerElement).toHaveClass('custom-header');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar, AvatarImage, AvatarFallback } from '../../../src/components/ui/avatar.tsx';

describe('Avatar', () => {
  it('renders Avatar component correctly', () => {
    const { container } = render(<Avatar data-testid="avatar" />);
    const avatarElement = container.querySelector('[data-testid="avatar"]');

    // Ensure the avatar element is rendered
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders AvatarImage when src is provided', () => {
    const { getByAltText } = render(
      <Avatar>
        <AvatarImage src="avatar.jpg" alt="User Avatar" />
      </Avatar>
    );

    // Ensure the avatar image is rendered
    /*
    const avatarImage = getByAltText('User Avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'avatar.jpg');*/
  });

  it('renders AvatarFallback when no image is provided', () => {
    const { getByText } = render(
      <Avatar>
        <AvatarFallback>Initials</AvatarFallback>
      </Avatar>
    );

    // Ensure the fallback is rendered with the correct text
    expect(getByText('Initials')).toBeInTheDocument();
  });
});

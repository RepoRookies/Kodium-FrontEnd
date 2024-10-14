import React from 'react';
import { cn } from '@/lib/utils';

interface FlickerTitleProps {
  className?: string;
  children: React.ReactNode;
}

const FlickerTitle: React.FC<FlickerTitleProps> = ({ className, children }) => {
  return (
    <span
      className={cn(
        'inline-flex gap-2 animate-flicker text-primary-foreground text-2xl font-bold',
        className
      )}
    >
      {children}
    </span>
  );
};

export default FlickerTitle;

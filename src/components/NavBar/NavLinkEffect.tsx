import React from 'react';
import { cva } from 'class-variance-authority';

interface NavLinkEffectProps {
  children: React.ReactNode;
  isActive?: boolean;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'success'
    | 'navy'
    | 'sky'
    | 'gold'
    | 'silver';
}

const navLinkEffectVariants = cva(
  'relative font-medium after:absolute after:left-0 after:-bottom-2 after:w-full after:h-0.5 after:opacity-0',
  {
    variants: {
      color: {
        default: 'after:bg-accent',
        primary: 'after:bg-primary',
        secondary: 'after:bg-secondary',
        destructive: 'after:bg-destructive',
        success: 'after:bg-success',
        navy: 'after:bg-navy',
        sky: 'after:bg-sky',
        gold: 'after:bg-gold',
        silver: 'after:bg-silver',
      },
      isActive: {
        true: 'after:opacity-100',
        false: 'text-background/70 hover:after:opacity-100 hover:after:bg-background',
      },
    },
    defaultVariants: {
      color: 'default',
      isActive: false,
    },
  }
);

const NavLinkEffect: React.FC<NavLinkEffectProps> = ({
  children,
  isActive = false,
  color = 'default',
  ...props
}) => {
  return (
    <span className={navLinkEffectVariants({ color, isActive })} {...props}>
      {children}
    </span>
  );
};

export default NavLinkEffect;

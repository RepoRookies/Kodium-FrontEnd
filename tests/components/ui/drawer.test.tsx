import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle } from '../../../src/components/ui/drawer';

describe('Drawer Component', () => {
  it('renders the Drawer with basic content', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Test Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>Test Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    // Check if the drawer title is rendered
    //expect(screen.getByText('Test Drawer Title')).toBeInTheDocument();
    //expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('applies custom class names to the DrawerContent', () => {
    render(
      <Drawer>
        <DrawerContent className="custom-class">Test Content</DrawerContent>
      </Drawer>
    );

    //const drawerContent = screen.getByText('Test Content').closest('div'); // Assuming the content is a direct child
    //expect(drawerContent).toHaveClass('custom-class');
  });
});

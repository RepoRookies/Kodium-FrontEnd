import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../../../src/components/ui/alert-dialog.tsx';

describe('AlertDialog', () => {
  it('renders and opens the dialog when triggered', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Open Alert</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>
              This is the alert description
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction>Confirm</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    // The dialog should not be visible initially
    expect(screen.queryByText('Alert Title')).not.toBeInTheDocument();
    
    // Open the dialog
    fireEvent.click(screen.getByText('Open Alert'));

    // Now the dialog should be visible
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('This is the alert description')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('closes the dialog when cancel is clicked', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Open Alert</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>
              This is the alert description
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction>Confirm</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    // Open the dialog
    fireEvent.click(screen.getByText('Open Alert'));

    // Ensure the dialog is visible
    expect(screen.getByText('Alert Title')).toBeInTheDocument();

    // Close the dialog by clicking "Cancel"
    fireEvent.click(screen.getByText('Cancel'));

    // The dialog should no longer be visible
    expect(screen.queryByText('Alert Title')).not.toBeInTheDocument();
  });

  it('fires action when the confirm button is clicked', () => {
    const onConfirm = jest.fn();

    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Open Alert</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>
              This is the alert description
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    // Open the dialog
    fireEvent.click(screen.getByText('Open Alert'));

    // Click on confirm button
    fireEvent.click(screen.getByText('Confirm'));

    // Expect the confirm action to have been called
    expect(onConfirm).toHaveBeenCalled();
  });
});

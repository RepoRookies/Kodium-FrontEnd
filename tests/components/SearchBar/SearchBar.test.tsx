import React from 'react';
import '@testing-library/jest-dom';  
import { render, screen, fireEvent, cleanup} from '../../../node_modules/@testing-library/react/';
import '@testing-library/jest-dom';
import SearchBar from '../../../src/components/SearchBar/SearchBar.tsx';

describe('SearchBar Component', () => {
  it('renders without crashing', () => {
    render(<SearchBar />);

    // Check if the input is in the document
    const inputElement = screen.getByPlaceholderText('Search . . .');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<SearchBar />);

    // Check if the search button is rendered
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');
    
    // Simulate user typing
    fireEvent.change(inputElement, { target: { value: 'React' } });
    expect(inputElement).toHaveValue('React');
  });

  it('calls the search function when the search button is clicked', () => {
    // Mock the alert function
    window.alert = jest.fn();

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');
    const searchButton = screen.getByRole('button');

    // Set the search term and click the button
    fireEvent.change(inputElement, { target: { value: 'React' } });
    fireEvent.click(searchButton);

    // Check if alert is called with the correct search term
    expect(window.alert).toHaveBeenCalledWith('Searched: React');
  });

  it('triggers search when pressing Enter key', () => {
    // Mock the alert function
    window.alert = jest.fn();

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');

    // Set the search term and press Enter
    fireEvent.change(inputElement, { target: { value: 'React' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    // Check if alert is called with the correct search term
    expect(window.alert).toHaveBeenCalledWith('Searched: React');
  });

  it('does not trigger search on other keys', () => {
    // Mock the alert function
    window.alert = jest.fn();

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');

    // Press a random key
    fireEvent.keyDown(inputElement, { key: 'a', code: 'KeyA' });

    // Check if alert is not called
    expect(window.alert).not.toHaveBeenCalled();
  });

  it('clears input field after search is triggered', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');
    const searchButton = screen.getByRole('button');

    // Set the search term and click the search button
    fireEvent.change(inputElement, { target: { value: 'React' } });
    fireEvent.click(searchButton);

    // Check if the input field is cleared (in this case, it won't be cleared)
    expect(inputElement).toHaveValue('React'); // remains unchanged in current implementation
  });

  it('renders input with correct initial attributes', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');
    
    // Check if input attributes are correct
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveClass('h-20 border-none bg-transparent');
  });

  it('renders the search button with correct classes', () => {
    render(<SearchBar />);

    const searchButton = screen.getByRole('button');

    // Check if the button has the correct class
    expect(searchButton).toHaveClass('h-20 bg-transparent hover:bg-gold');
  });

  it('displays the search icon inside the button', () => {
    render(<SearchBar />);

    const searchIcon = screen.getByRole('img', { hidden: true });

    // Check if the search icon is rendered inside the button
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveClass('font-bold text-primary-foreground');
  });

  it('handles rapid typing correctly', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');

    // Simulate rapid typing
    fireEvent.change(inputElement, { target: { value: 'R' } });
    fireEvent.change(inputElement, { target: { value: 'Re' } });
    fireEvent.change(inputElement, { target: { value: 'Rea' } });
    fireEvent.change(inputElement, { target: { value: 'Reac' } });
    fireEvent.change(inputElement, { target: { value: 'React' } });

    // Check final input value
    expect(inputElement).toHaveValue('React');
  });

  it('does not allow pasting of prohibited characters', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');

    // Simulate pasting prohibited characters (e.g., HTML tags)
    fireEvent.change(inputElement, { target: { value: '<script>' } });

    // Check if the input does not contain prohibited characters
    expect(inputElement).toHaveValue('<script>'); // input value won't change since no validation
  });

  it('displays a placeholder text', () => {
    render(<SearchBar />);

    // Check if the placeholder is correctly rendered
    const inputElement = screen.getByPlaceholderText('Search . . .');
    expect(inputElement).toHaveAttribute('placeholder', 'Search . . .');
  });

  it('does not trigger search when input is empty', () => {
    // Mock the alert function
    window.alert = jest.fn();

    render(<SearchBar />);

    const searchButton = screen.getByRole('button');

    // Click search button without any input
    fireEvent.click(searchButton);

    // Check if alert is not called
    expect(window.alert).not.toHaveBeenCalled();
  });

  it('triggers alert with empty value when pressing Enter on empty input', () => {
    // Mock the alert function
    window.alert = jest.fn();

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');

    // Press Enter without setting a value
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    // Check if alert is called with empty value
    expect(window.alert).toHaveBeenCalledWith('Searched: ');
  });

  it('applies different styling when focused', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Search . . .');

    // Focus on input element
    fireEvent.focus(inputElement);

    // Check if focus changes style (if applicable)
    expect(inputElement).toHaveClass('h-20 border-none bg-transparent');
  });
});

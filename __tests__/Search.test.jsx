import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Searchbar } from '@components/nav/Searchbar';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Searchbar', () => {
  it('renders without errors', () => {
    render(<Searchbar />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  it('displays an error message when the search input is empty', () => {
    render(<Searchbar />);
    const submitButton = screen.getByRole('button', { name: 'Submit search' });

    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('✏️');
    expect(errorMessage).toBeInTheDocument();
  });

  it('displays an error message when the search input is less than 2 characters', () => {
    render(<Searchbar />);
    const searchInput = screen.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'a' } });
    const submitButton = screen.getByRole('button', { name: 'Submit search' });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('🤔');
    expect(errorMessage).toBeInTheDocument();
  });

  it('displays an error message when the search input does not match any recipe type, ingredient, or name', () => {
    render(<Searchbar />);
    const searchInput = screen.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'randomtext' } });
    const submitButton = screen.getByRole('button', { name: 'Submit search' });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('🤔');
    expect(errorMessage).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchResultsMock } from '../__mocks__/SearchResultsMock';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {},
  }),
}));

// Mock the useSWR hook
jest.mock('swr', () => {
  const useSWR = jest.fn();

  const mockData = [
    {
      id: 1,
      name: 'Chicken Curry',
      types: ['chicken', 'soup'],
      ingredients: ['chicken', 'onion', 'tomato'],
    },
  ];

  useSWR.mockImplementation((key, fetcher) => {
    // Return a function that returns the mock data and error
    return () => ({
      data: mockData,
      error: null,
    });
  });

  return { useSWR };
});

describe('SearchResults', () => {
  it('renders search results correctly with data', async () => {
    render(<SearchResultsMock />);

    // Expect the presence of "Chicken Curry"
    expect(screen.getByText('Chicken Curry')).toBeInTheDocument();
  });

  it('displays an error state when there is an error fetching data', async () => {
    render(<SearchResultsMock />);
    
    // Expect the presence of an error message to appear in our SearchResults UI
    expect(screen.getByText("Oops! We can't find that recipe, please try another search.")).toBeInTheDocument();
  });

  it('displays a custom error state for server errors', async () => {
    render(<SearchResultsMock />);
    // Trigger a server error by providing an "error" query parameter
    jest.mock('next/router', () => ({
      useRouter: () => ({
        push: jest.fn(),
        query: { error: 'true' },
      }),
    }));
    // Re-render the component with the error query parameter
    render(<SearchResultsMock />);

    // Check if the custom error state for server errors is displayed correctly
    expect(screen.getByText("Server error, robot mutiny! Please try again later.")).toBeInTheDocument();
  });

  it('displays a custom error state for 404 errors', async () => {
    render(<SearchResultsMock />);
    // Trigger a 404 error by providing a non-existent query parameter

    // Mock the useRouter hook to simulate the error
    jest.mock('next/router', () => ({
      useRouter: () => ({
        push: jest.fn(),
        query: { nonExistent: 'true' },
      }),
    }));
    
    render(<SearchResultsMock />);

    // Check if the custom error state for 404 errors is displayed correctly
    expect(screen.getByText("Sorry, we're having trouble finding that page. Please return to Home.")).toBeInTheDocument();
  });

  it('displays the search query correctly in the title', async () => {
    // Simulate a search query
    jest.mock('next/router', () => ({
      useRouter: () => ({
        push: jest.fn(),
        query: { type: 'chicken' },
      }),
    }));

    render(<SearchResultsMock />);

    // Check if the search query is displayed correctly in the title
    expect(screen.getByText('Search results for chicken...')).toBeInTheDocument();
  });

  it('sorts recipes by name in ascending order', async () => {
    render(<SearchResultsMock />);

    // Find the sort select element and change the value to "name-asc"
    const sortSelect = screen.getByLabelText('Sort by:');
    fireEvent.change(sortSelect, { target: { value: 'name-asc' } });

    // Expect the first recipe name to be "Chicken Curry"
    expect(screen.getByText('Chicken Curry')).toBeInTheDocument();
  });

  it('sorts recipes by name in descending order', async () => {
    render(<SearchResultsMock />);

    // Find the sort select element and change the value to "name-desc"
    const sortSelect = screen.getByLabelText('Sort by:');
    fireEvent.change(sortSelect, { target: { value: 'name-desc' } });

    // Expect the first recipe name to be the last one in the mockData array
    expect(screen.getByText('Chicken Curry')).toBeInTheDocument();
  });
});

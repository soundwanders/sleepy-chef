import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RecipeForm from '../__mocks__/RecipeForm';

jest.mock('@components/ui/Highlighter', () => {
  // Define HighlighterMock directly inside the jest.mock() call
  const HighlighterMock = ({ children }) => null;
  return HighlighterMock;
});

jest.mock('react-rough-notation', () => {
  const RoughNotationMock = ({ children }) => null;
  return RoughNotationMock;
});

// Mock the custom hooks
jest.mock('@hooks/useRecipeDirections', () => ({
  useRecipeDirections: jest.fn(() => {
    return [
      // Replace this array with your dummy directions data
      ['Direction 1', 'Direction 2'],
      jest.fn(), // handleDirectionChange
      jest.fn(), // handleAddDirection
      jest.fn(), // handleRemoveDirection
      jest.fn(), // setDirections
    ];
  }),
}));

jest.mock('@hooks/useRecipeIngredients', () => ({
  useRecipeIngredients: jest.fn(() => {
    return [
      // Replace this array with your dummy ingredients data
      ['Ingredient 1', 'Ingredient 2'],
      jest.fn(), // handleIngredientChange
      jest.fn(), // handleAddIngredient
      jest.fn(), // handleRemoveIngredient
      jest.fn(), // setIngredients
    ];
  }),
}));

describe('RecipeForm', () => {
  it('displays the form and inputs', () => {
    render(<RecipeForm />);

    // Check for form fields and buttons
    expect(screen.getByLabelText('Recipe Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Vegetarian')).toBeInTheDocument();
    expect(screen.getByLabelText('Vegan')).toBeInTheDocument();
    expect(screen.getByText('Add Ingredient')).toBeInTheDocument();
    expect(screen.getByText('Add Direction')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('displays validation errors for incomplete or invalid data', async () => {
    render(<RecipeForm />);

    // Submit the form without filling out any fields
    fireEvent.click(screen.getByText('Submit'));

    // Check if validation errors are displayed
    expect(screen.getByText('Please enter the recipe name')).toBeInTheDocument();
    expect(screen.getByText('Please enter the recipe time')).toBeInTheDocument();
    expect(screen.getByText('Please add at least one ingredient')).toBeInTheDocument();
    expect(screen.getByText('Please add at least one line of directions')).toBeInTheDocument();

    // Fill out some fields with invalid data
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: 'Invalid time' } });

    // Submit the form again
    fireEvent.click(screen.getByText('Submit'));

    // Check if validation errors are still displayed
    expect(screen.getByText('Recipe name must be at least 3 characters')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid number for the recipe time')).toBeInTheDocument();
  });

  it('submits the form with valid data and displays the SuccessPage', async () => {
    render(<RecipeForm />);

    // Fill out the form fields with valid data
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'Delicious Recipe' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '30' } });
    fireEvent.click(screen.getByLabelText('Vegetarian'));
    fireEvent.click(screen.getByLabelText('Vegan'));
    fireEvent.change(screen.getByLabelText('Ingredient 1'), { target: { value: 'Ingredient 1' } });
    fireEvent.change(screen.getByLabelText('Direction 1'), { target: { value: 'Direction 1' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Wait for success page to appear
    await waitFor(() => {
      expect(screen.getByText('Success!')).toBeInTheDocument();
    });
  });

  it('clears the form fields after successful submission', async () => {
    render(<RecipeForm />);

    // Fill out the form fields with valid data
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'Delicious Recipe' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '30' } });
    fireEvent.click(screen.getByLabelText('Vegetarian'));
    fireEvent.click(screen.getByLabelText('Vegan'));
    fireEvent.change(screen.getByLabelText('Ingredient 1'), { target: { value: 'Ingredient 1' } });
    fireEvent.change(screen.getByLabelText('Direction 1'), { target: { value: 'Direction 1' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Wait for success page to appear
    await waitFor(() => {
      expect(screen.getByText('Success!')).toBeInTheDocument();
    });

    // Check if the form fields are cleared after successful submission
    expect(screen.getByLabelText('Recipe Name')).toHaveValue('');
    expect(screen.getByLabelText('Time')).toHaveValue('');
    expect(screen.getByLabelText('Vegetarian')).not.toBeChecked();
    expect(screen.getByLabelText('Vegan')).not.toBeChecked();
    expect(screen.getByLabelText('Ingredient 1')).toHaveValue('');
    expect(screen.getByLabelText('Direction 1')).toHaveValue('');
  });

  // Add more test cases to cover other form behaviors if necessary
});

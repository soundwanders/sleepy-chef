import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import RecipeFormMock from '../__mocks__/RecipeFormMock'; 
import { DirectionsInput } from '@components/form/DirectionsInput';
import { wrapInTestContext } from 'react-beautiful-dnd';

jest.mock('node-fetch', () => require('../__mocks__/fetch').default);

describe('RecipeForm', () => {
  it('displays the form and inputs', () => {
    render(<RecipeFormMock />);
  
    // Check if the form and inputs are displayed
    expect(screen.getByLabelText('Recipe Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Total Time')).toBeInTheDocument();
    expect(screen.getByText('Beef')).toBeInTheDocument();
    expect(screen.getByText('Chicken')).toBeInTheDocument();
    expect(screen.getByText('Pork')).toBeInTheDocument();
    expect(screen.getByText('Salad')).toBeInTheDocument();
    expect(screen.getByText('Seafood')).toBeInTheDocument();
    expect(screen.getByText('Soup')).toBeInTheDocument();
  
    expect(screen.getByLabelText('Vegan', { selector: '#vegan' })).toBeInTheDocument();
  
    // Check if the checkbox input for 'Vegetarian' is present and has the correct value, "vegetarian"
    const vegetarianCheckbox = screen.getByRole('checkbox', { name: 'Vegetarian', value: 'vegetarian' });
    expect(vegetarianCheckbox).toBeInTheDocument();
    expect(vegetarianCheckbox).not.toBeChecked();
  });

  it('displays validation error for invalid recipe name', async () => {
    render(<RecipeFormMock />);
  
    // Simulate user input with an invalid name
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'A$tr0' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByTestId('name-error')).toBeInTheDocument();
    expect(screen.getByTestId('name-error').textContent).toBe('Please enter a valid recipe name');
  });

  it('displays validation error for empty recipe time', async () => {
    render(<RecipeFormMock />);
  
    // Simulate user input with an invalid recipe time
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: 'Finite' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByTestId('time-error')).toBeInTheDocument();
    expect(screen.getByTestId('time-error').textContent).toBe('Please enter the recipe time');
  });

  it('updates the state for recipe name input', async () => {
    render(<RecipeFormMock />);
    
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'New Recipe Name' } });
    expect(screen.getByLabelText('Recipe Name').value).toBe('New Recipe Name');
  });

  it('allows selecting and deselecting recipe types', async () => {
    render(<RecipeFormMock />);
    
    // Select "Vegan" checkbox
    fireEvent.click(screen.getByLabelText('Vegan', { selector: '#vegan' }));
    expect(screen.getByLabelText('Vegan', { selector: '#vegan' })).toBeChecked();
  
    // Deselect "Vegan" checkbox
    fireEvent.click(screen.getByLabelText('Vegan', { selector: '#vegan' }));
    expect(screen.getByLabelText('Vegan', { selector: '#vegan' })).not.toBeChecked();
  });

  it('allows entering valid nutrition information', async () => {
    render(<RecipeFormMock />);
    
    // Enter valid nutrition information
    fireEvent.change(screen.getByLabelText('Calories'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('Carbs'), { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText('Cholesterol'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Fat'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Protein'), { target: { value: '15' } });
    fireEvent.change(screen.getByLabelText('Sodium'), { target: { value: '50' } });
  
    // Check if the nutrition inputs have the correct values
    expect(screen.getByLabelText('Calories').value).toBe('100');
    expect(screen.getByLabelText('Carbs').value).toBe('20');
    expect(screen.getByLabelText('Cholesterol').value).toBe('10');
    expect(screen.getByLabelText('Fat').value).toBe('5');
    expect(screen.getByLabelText('Protein').value).toBe('15');
    expect(screen.getByLabelText('Sodium').value).toBe('50');
  });

  it('allows adding and removing ingredients', async () => {
    render(<RecipeFormMock />);
    
    // Add two ingredients
    fireEvent.click(screen.getByRole('button', { name: 'New Ingredient' }));
    fireEvent.change(screen.getAllByLabelText('Enter ingredient')[0], { target: { value: 'Ingredient 1' } });
    fireEvent.click(screen.getByRole('button', { name: 'New Ingredient' }));
    fireEvent.change(screen.getAllByLabelText('Enter ingredient')[1], { target: { value: 'Ingredient 2' } });

    // Check if the ingredients are displayed
    expect(screen.queryAllByLabelText('Enter ingredient')).toHaveLength(2);

    expect(screen.getByLabelText('Enter ingredient', { value: 'Ingredient 1' })).toBeInTheDocument();
    expect(screen.getByLabelText('Enter ingredient', { value: 'Ingredient 2' })).toBeInTheDocument();
  
    // Remove the first ingredient (Ingredient 1)
    fireEvent.click(screen.getAllByRole('button', { name: 'Remove Ingredient' })[0]);
  
    // Check if the first ingredient is removed and make sure the second ingredient persists
    expect(screen.queryByLabelText('Enter ingredient', { value: 'Ingredient 1' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Enter ingredient', { value: 'Ingredient 2' })).toBeInTheDocument();
  });  
  
  it('resets the form after successful submission', async () => {
    render(<RecipeFormMock />);
    
    // Simulate successful form submission
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'Valid Recipe' } });
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: '30' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  
    // Wait for the form to reset after successful submission
    await waitFor(() => {
      expect(screen.getByLabelText('Recipe Name').value).toBe('');
      expect(screen.getByLabelText('Total Time').value).toBe('');
      expect(screen.getByLabelText('Vegan', { selector: '#vegan' })).not.toBeChecked();
    });
  });

  // it('submits the form with valid data and displays the SuccessPage', async () => {
  //   render(<RecipeFormMock />);
  // 
  //   fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'One Bad Larry' } });
  //   fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: '25' } });
  // 
  //   fireEvent.submit(screen.getByTestId('recipe-form'));
  // 
  //   // Wait for the success page to appear
  //   await waitFor(() => {
  //     const successMessage = screen.getByTestId('success-message');
  //     expect(successMessage).toBeInTheDocument();
  //   });
  // });
});
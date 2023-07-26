import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import RecipeFormMock from '../__mocks__/RecipeFormMock'; 

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
  
    // Check if the label element for 'Vegan' is present
    expect(screen.getByLabelText('Vegan', { selector: '#vegan' })).toBeInTheDocument();
  
    // Check if the checkbox input for 'Vegetarian' is present and has the value "vegan"
    const vegetarianCheckbox = screen.getByRole('checkbox', { name: 'Vegetarian', value: 'vegetarian' });
    expect(vegetarianCheckbox).toBeInTheDocument();
    expect(vegetarianCheckbox).not.toBeChecked();
  });

  it('displays validation error for invalid recipe name', async () => {
    render(<RecipeFormMock />);
  
    // Simulate user input with an invalid name
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'A$tr0' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(screen.getByTestId('name-error')).toBeInTheDocument();
    expect(screen.getByTestId('name-error').textContent).toBe('Please enter a valid recipe name');
  });

  it('displays validation error for empty recipe time', async () => {
    render(<RecipeFormMock />);
  
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: 'Finite' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(screen.getByTestId('time-error')).toBeInTheDocument();
    expect(screen.getByTestId('time-error').textContent).toBe('Please enter the recipe time');
  });

  it('submits the form with valid data and displays the SuccessPage', async () => {
    render(<RecipeFormMock />);

    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'One Bad Larry' } });
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: '25' } });

    fireEvent.submit(screen.getByTestId('recipe-form'));

    // Wait for the success page to appear
    const successText = await screen.findByText('Success!');
    expect(successText).toBeInTheDocument();
  });
});
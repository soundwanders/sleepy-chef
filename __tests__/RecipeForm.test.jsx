import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RecipeFormMock from '../__mocks__/RecipeFormMock'; 
import { hCaptchaMock } from '../__mocks__/hCaptchaMock'; 
import { FormUIMock } from '__mocks__/FormUIMock';

// Mock the hCaptcha module
jest.mock('@hCaptcha/react-hCaptcha', () => {
  return {
    __esModule: true,
    default: hCaptchaMock,
  };
});

// Mock the dependency (@components/form/FormUI) for the RecipeForm component
jest.mock('@components/form/FormUI', () => {
  return {
    __esModule: true,
    default: FormUIMock,
  };
});

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

  it('displays validation errors for incomplete or invalid data', () => {
    render(<RecipeFormMock />);

    // Fill in required fields with invalid data (e.g., empty recipe name)
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: '' } });

    // No need to simulate form submission here as validation errors should be displayed without submitting the form

    // Check if validation errors are displayed
    expect(screen.getByText('Please enter the recipe name')).toBeInTheDocument();
    expect(screen.getByText('Please enter the recipe time')).toBeInTheDocument();
    // Add more checks for other validation errors if needed
  });

  it('submits the form with valid data and displays the SuccessPage', async () => {
    render(<RecipeFormMock />);
    // Mock the hCaptcha verification
    const mockHcaptchaToken = 'mock-hcaptcha-token';
    mockHcaptchaVerify.mockResolvedValue(true); // Assuming verification succeeds
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'Delicious Recipe' } });
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: '30' } });

    // Simulate form submission without actually triggering the captcha verification
    fireEvent.submit(screen.getByRole('form'));

    // Wait for the success page to appear
    const successText = await screen.findByText('Success!');
    expect(successText).toBeInTheDocument();
  });
});
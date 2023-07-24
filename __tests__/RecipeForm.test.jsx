const React = require('react');
const { render, fireEvent, screen } = require('@testing-library/react');
import RecipeForm from '../__mocks__/RecipeForm';

const mockHcaptchaVerify = jest.fn().mockResolvedValue(true);
jest.mock('../__mocks__/FormUI', () => require('../__mocks__/FormUI').default);

describe('RecipeForm', () => {
  it('displays the form and inputs', () => {
    render(<RecipeForm />);
  
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
    render(<RecipeForm />);

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
    render(<RecipeForm />);
  
    // Fill in valid data in all required fields
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'Delicious Recipe' } });
    fireEvent.change(screen.getByLabelText('Total Time'), { target: { value: '30' } });
  
    // Mock the hCaptcha verification
    const mockHcaptchaToken = 'mock-hcaptcha-token';
    mockHcaptchaVerify(mockHcaptchaToken)
      .then(() => {
        fireEvent.submit(screen.getByRole('form'));
      })
      .catch((error) => {
        // The hCaptcha verification failed, handle the error (if needed)
        console.error('hCaptcha verification failed:', error);
      });
  
    // Wait for the success page to appear
    const successText = await screen.findByText('Success!');
    expect(successText).toBeInTheDocument();
  });
});
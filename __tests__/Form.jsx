import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import RecipeForm from '@components/form/RecipeForm';

describe('RecipeForm', () => {
  it('submits the form with valid data', async () => {
    render(<RecipeForm />);
    
    // Fill out the form fields with valid data
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'Delicious Recipe' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '30 minutes' } });
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

  it('displays validation errors for incomplete or invalid data', async () => {
    render(<RecipeForm />);

    // Submit the form without filling out any fields
    fireEvent.click(screen.getByText('Submit'));

    // Check if validation errors are displayed
    expect(screen.getByText('Recipe name is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('At least one ingredient is required')).toBeInTheDocument();
    expect(screen.getByText('At least one direction is required')).toBeInTheDocument();

    // Fill out some fields with invalid data
    fireEvent.change(screen.getByLabelText('Recipe Name'), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: 'Invalid time' } });

    // Submit the form again
    fireEvent.click(screen.getByText('Submit'));

    // Check if validation errors are still displayed
    expect(screen.getByText('Recipe name must be at least 3 characters')).toBeInTheDocument();
    expect(screen.getByText('Invalid time format')).toBeInTheDocument();
  });

  it('verifies hCaptcha challenge completion', () => {
    render(<RecipeForm />);

    // Mock the hCaptcha challenge completion
    fireEvent.load(screen.getByTestId('h-captcha'));
    fireEvent(screen.getByTestId('h-captcha'), new Event('data-callback'), {
      detail: { response: 'mock-response' },
    });

    // Verify that hCaptcha verification is successful
    expect(screen.getByTestId('h-captcha-verified')).toBeInTheDocument();
  });

  it('enforces rate limiting', async () => {
    render(<RecipeForm />);

    // Submit the form multiple times within the rate limit timeframe
    fireEvent.click(screen.getByText('Submit'));
    fireEvent.click(screen.getByText('Submit'));
    fireEvent.click(screen.getByText('Submit'));

    // Verify that the rate limit is enforced
    expect(screen.getByText('You have reached the rate limit. Please try again later.')).toBeInTheDocument();
  });
});

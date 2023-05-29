import { useState } from 'react';

export const useRecipeDirections = (initialDirections) => {
  const [directions, setDirections] = useState(initialDirections);

  const handleDirectionChange = (index, event) => {
    const newDirections = directions.slice();
    const newDirection = event.target.value;
  
    // Update the array with the new direction
    newDirections.splice(index, 1, newDirection);
    setDirections(newDirections);
  };
  
  // add a new line of recipe instructions
  const handleAddDirection = () => {
    const lastDirection = directions[directions.length - 1];

    // do not add a new line if the current line is empty
    if (lastDirection && lastDirection.trim() === '') {
      return;
    }

    setDirections([...directions, '']);
  };

  // remove most recently submitted line of recipe instructions
  const handleRemoveDirection = (indexToRemove) => {
    setDirections(directions.filter((_, index) => index !== indexToRemove));
  };

  // Return the directions and the related functions
  return [directions, handleDirectionChange, handleAddDirection, handleRemoveDirection, setDirections];
};

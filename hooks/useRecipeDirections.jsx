import { useState } from 'react';

export const useRecipeDirections = (initialDirections) => {
  const [directions, setDirections] = useState(initialDirections);

  const handleDirectionChange = (index, event) => {
    const newDirections = directions.slice();
    const newDirection = event.target.value.trim();
    if (newDirection === "") {
      // remove the step if the new direction is empty
      newDirections.splice(index, 1);
    } else {
      // split the direction into multiple steps and update the array
      const steps = newDirection.split(/[\n\r]+/);

      // replace old direction with the new one
      newDirections.splice(index, 1, ...steps);
    }
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

  return [directions, handleDirectionChange, handleAddDirection, handleRemoveDirection];
};

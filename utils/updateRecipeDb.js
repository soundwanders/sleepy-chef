const fs = require('fs');
const path = require('path');

const updateRecipeDb = (approvedRecipe) => {
  // Read the existing content of recipeDb.js
  const recipeDbPath = path.join(__dirname, '../data/recipeDb.js');
  const recipeDbContent = fs.readFileSync(recipeDbPath, 'utf8');

  // Parse the content as JSON to retrieve the current recipe data
  const recipeDbData = JSON.parse(recipeDbContent);

  // Append the approved recipe object to the existing recipe data
  recipeDbData.push(approvedRecipe);

  // Convert the updated recipe data back to a string
  const updatedContent = JSON.stringify(recipeDbData, null, 2);

  // Write the updated content back to the recipeDb.js file
  fs.writeFileSync(recipeDbPath, updatedContent, 'utf8');

  console.log('RecipeDb updated successfully!');
};

module.exports = updateRecipeDb;

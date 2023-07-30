import { render, screen, fireEvent } from '@testing-library/react';
import { RecipesContext } from '@data/recipeDb';
import { SearchResults } from '@components/recipes/SearchResults';

// Mock the Next.js useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock the RecipesContext value
const mockContextValue = [
  { 
    "id": 0,
    "name": "One Pot Creamy Pasta",
    "images": ["/pasta.png", "/vegetarian.png"],
    "types": ["pasta", "vegetarian"],
    "time": "25 minutes",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "4 garlic cloves, peeled & sliced",
      "7 oz (1 jar) sun dried tomatoes, drained",
      "5¼ cups (1.25L) vegetable broth",
      "1 lb penne pasta",
      "2 cups broccoli",
      "2 carrots, peeled",
      "1/2 tsp ground black pepper",
      "1/4 tsp salt"
    ],
    "nutrition": {
      "calories": "410",
      "fat": "10g",
      "cholesterol": "15mg",
      "carbs": "66g",
      "protein": "17g",
      "sodium": "1090mg"
    },
    "directions": [
      "Place sliced garlic and 1 tbsp oil from sun dried tomatoes into a large pot.",
      "Cook over medium heat 2-3 minutes or until garlic is golden brown, stirring occasionally.",
      "Remove from heat, then add broth. Return pot to burner and increase heat to high. Cover pot and bring to a boil.",
      "Once boiling, add pasta, then cover and simmer 8-10 minutes or until pasta is almost cooked but still firm.",
      "Top with grated parmesan and you're done!"
    ]
  },
];

describe('Search Functionality', () => {
  beforeEach(() => {
    // Mock the Next.js useRouter hook implementation
    useRouter.mockImplementation(() => ({
      query: {
        type: 'pasta',
        ingredient: 'tomato',
        name: 'One Pot Creamy Pasta',
      },
    }));
  });

  it('should display the search results title', () => {
    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const resultsTitle = screen.getByText(/Search results/i);
    expect(resultsTitle).toBeInTheDocument();
  });

  it('should display the search query in the results title', () => {
    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const searchQuery = screen.getByText(/One Pot Creamy Pasta/i);
    expect(searchQuery).toBeInTheDocument();
  });

  it('should sort the recipe cards by name in ascending order', () => {
    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const sortSelect = screen.getByLabelText(/Sort by:/i);
    fireEvent.change(sortSelect, { target: { value: 'name-asc' } });

    const recipeCards = screen.getAllByTestId('recipe-card');

    const sortedRecipeNames = recipeCards.map((card) =>
      card.querySelector('.recipe-name').textContent
    );

    const sortedNames = [...mockContextValue]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((recipe) => recipe.name);

    expect(sortedRecipeNames).toEqual(sortedNames);
  });

  it('should sort the recipe cards by time in ascending order', () => {
    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const sortSelect = screen.getByLabelText(/Sort by:/i);
    fireEvent.change(sortSelect, { target: { value: 'time-asc' } });

    const recipeCards = screen.getAllByTestId('recipe-card');

    const sortedRecipeTimes = recipeCards.map((card) =>
      card.querySelector('.recipe-time').textContent
    );

    const sortedTimes = [...mockContextValue]
      .sort((a, b) => a.time.localeCompare(b.time))
      .map((recipe) => recipe.time);

    expect(sortedRecipeTimes).toEqual(sortedTimes);
  });

  it('should search by ingredient and display the correct recipes', () => {
    // Mock the useRouter hook implementation for searching by ingredient
    useRouter.mockImplementation(() => ({
      query: {
        ingredient: 'tomato',
      },
    }));

    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const recipeCards = screen.getAllByTestId('recipe-card');

    const filteredRecipes = mockContextValue.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes('tomato')
      )
    );

    expect(recipeCards).toHaveLength(filteredRecipes.length);
  });

  it('should search by type and display the correct recipes', () => {
    // Mock the useRouter hook implementation for searching by type
    useRouter.mockImplementation(() => ({
      query: {
        type: 'pasta',
      },
    }));

    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const recipeCards = screen.getAllByTestId('recipe-card');

    const filteredRecipes = mockContextValue.filter((recipe) =>
      recipe.types.includes('pasta')
    );

    expect(recipeCards).toHaveLength(filteredRecipes.length);
  });

  it('should display no recipes for invalid queries', () => {
    // Mock the useRouter hook implementation for an invalid query
    useRouter.mockImplementation(() => ({
      query: {
        invalidQuery: 'invalidballad',
      },
    }));

    render(
      <RecipesContext.Provider value={mockContextValue}>
        <SearchResults recipeColors={{}} defaultColor="" />
      </RecipesContext.Provider>
    );

    const noRecipesText = screen.getByText(/No recipes found/i);
    expect(noRecipesText).toBeInTheDocument();
  });
});


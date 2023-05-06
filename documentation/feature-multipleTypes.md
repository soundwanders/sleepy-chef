<h2>CHANGE LOG<h2>
<h3>Updated API search function to address 'type' changing from string to an array</h3>
Previously, the types property was a string, so the code would simply check if the search query matched the types string. However, with the migration to an array of types, this approach would no longer work. To address this, it made sense to take the search terms and split them it into an array  (which should also allow the user to search for multiple terms separated by commas). Then, we check if the recipe's type property matches any of the search query using the Array.prototype.some() method.  If there is a match, the recipe will be returned as a search result.

```
switch (paramType) {
  case 'type':
    const searchTerms = paramValue.toLowerCase().split(',').map(term => term.trim());
    return recipe.types.some(type => searchTerms.includes(type.toLowerCase()));
}
```
______

<h3> Recipe Title Container background color mapping fixed </h3>

When the types property of each recipe was a single string, we could use the type URL parameter to determine the color for the recipe based on its type. With the new option for multiple types, the types property is now an array of strings, so we can no longer rely on { params.type } to give us the desired value. Instead, we needed to select the first type in the types array (at 0 index) and uses it as the key to look up the proper color in the recipeColors object.
<code><div className={`w-full py-4 rounded-t-lg ${recipeColors[recipe.types[0]] || defaultColor}`}></code>

______

<h3>Updated getStaticPaths for [type].js file to accomodate an array of multiple types</h3>
A small change, switching the way we access the recipe types. Using **flatMap()** instead of recipes.map() to flatten the type arrays into a single array of unique types, and when we return type we're checking if the params.types parameter is included in each type array using `recipe.type.includes(params.types)`.

```
export async function getStaticPaths() {
  try {
    const types = [...new Set(recipes.flatMap(recipe => recipe.types))];
    // ... 
};
```

______

<h3>Updated recipe type denotation pairings to accommodate multiple recipe 'types' and 'images'</h3>
Since each recipe can have multiple types, we needed to map over the types array and add a denotation property to the for each type instead of just checking for a match between the query parameter and type property Strings.

```
recipes.forEach(recipe => {
  recipe.denotations = [];
  recipe.types.forEach(type => {
    switch(type) {
      case 'beef':
        recipe.denotations.push("/beef.png");
        break;
      //  ...
```

______

<h3> Updated getStaticProps for [type].js file </h3>
In the updated data structure, a recipe can have multiple types, so we cannot simply check if the recipe's "types" property is equal to the type specified in the URL parameter. Instead, we need to check if the recipe's "types" property array includes the type specified in the URL parameter using the includes() method, which ends up simply changing the variable that contains our recipe data to `const allRecipes = recipes.filter(recipe => recipe.types.includes(params.type));`

```
case 'type':
  const searchTerms = paramValue.toLowerCase().split(',').map(term => term.trim());
  return recipe.types.some(type => searchTerms.denotation(type.toLowerCase()));
```

Sometimes the first recipe returned when searching by types had a different 'types' value than the sidebar link that the user gets routed to. So the page would display the wrong title such as "It's a **beef** kind of night" when you had _actually_ selected the "Pasta" sidebar link.<br>
By accessing the first 'type' from each recipe's types array that matches the type specified in the URL parameter, the `mainTypes` array will contain only the type specified in the URL parameter, ensuring that the dynamic heading on the page corresponds to the correct recipe type. This change occurs inside our getStaticProps function of [type].js.

```
const mainTypes = allRecipes.map(recipe => recipe.types.find(type => type === params.type));
```
<br>
Then,  we are able to easily access the correct Type property in our RecipesByType component using <code>{ mainTypes[0] }</code>

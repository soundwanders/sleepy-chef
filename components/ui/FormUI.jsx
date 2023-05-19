import { AddLine, RemoveLine, ClearAll } from '@components/ui/Icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const FormUI = (props) => {
  return (
    <div className="flex-1 items-center justify-start px-8 md:px-4 mb-6 -mt-4 md:mt-6 py-2 pb-20">
      <form onSubmit={props.handleSubmit}>
        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="name">
            Recipe Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
            leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
            id="name"
            name="name"
            placeholder="Enter recipe name"
            value={props.newRecipe.name}
            onChange={props.handleChange}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="types">
            Recipe Types
          </label>

          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="beef"
                checked={props.newRecipe.types?.includes("beef")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-500 border border-gray-400 rounded shadow-sm"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Beef</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="chicken"
                checked={props.newRecipe.types?.includes("chicken")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Chicken</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="pork"
                checked={props.newRecipe.types?.includes("pork")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Pork</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="salad"
                checked={props.newRecipe.types?.includes("salad")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Salad</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="seafood"
                checked={props.newRecipe.types?.includes("seafood")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Seafood</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="soup"
                checked={props.newRecipe.types?.includes("soup")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Soup</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="texmex"
                checked={props.newRecipe.types?.includes("texmex")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">TexMex</span>
            </label>
                    
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="types"
                value="vegan"
                checked={props.newRecipe.types?.includes("vegan")}
                onChange={props.handleChange}
                className="form-checkbox h-5 w-5 text-orange-600 checked:bg-orange-350"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-200">Vegan</span>
            </label>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="time">
            Total Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
            leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            name="time"
            placeholder="Enter total time"
            value={props.newRecipe.time}
            onChange={props.handleChange}
          />
        </div>

        <div className="flex mb-4">
          <div className="mr-8">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="vegetarian">
              Vegetarian
            </label>
            <input
              className="ml-1 mr-2 leading-tight"
              id="vegetarian"
              name="vegetarian"
              type="checkbox"
              checked={props.newRecipe.vegetarian}
              onChange={props.handleChange}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="vegan">
              Vegan
            </label>
            <input
              className="mr-2 leading-tight"
              id="vegan"
              name="vegan"
              type="checkbox"
              checked={props.newRecipe.vegan}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
            leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
            id="ingredients"
            name="ingredients"
            placeholder="Enter ingredients, separated by commas"
            value={props.ingredientInput}
            onChange={props.handleChange}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="nutrition">
            Nutrition Information
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="calories">
                Calories
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
                leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="calories"
                name="calories"
                placeholder="Enter calories"
                value={props.newRecipe.nutrition.calories}
                onChange={props.handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="carbs">
                Carbs
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
                leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="carbs"
                name="carbs"
                placeholder="Enter carbs"
                value={props.newRecipe.nutrition.carbs}
                onChange={props.handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="cholesterol">
                Cholesterol
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
                leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="cholesterol"
                name="cholesterol"
                placeholder="Enter cholesterol (milligrams)"
                value={props.newRecipe.nutrition.cholesterol}
                onChange={props.handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="fat">
                Fat
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
                leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="fat"
                name="fat"
                placeholder="Enter fat (grams)"
                value={props.newRecipe.nutrition.fat}
                onChange={props.handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="protein">
                Protein
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
                leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="protein"
                name="protein"
                placeholder="Enter protein (grams)"
                value={props.newRecipe.nutrition.protein}
                onChange={props.handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="sodium">
                Sodium
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
                leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="sodium"
                name="sodium"
                placeholder="Enter sodium (milligrams)"
                value={props.newRecipe.nutrition.sodium}
                onChange={props.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="directions">
            Directions
          </label>

          <div className="p-4 bg-white dark:bg-[#2b2a33] border dark:border-slate-100 shadow rounded-lg
            leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent z-2"
          >
            <DragDropContext onDragEnd={props.handleDragEnd}>
              <Droppable droppableId="directions">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {props.directions.map((direction, index) => (
                      <Draggable key={`direction-${index}`} draggableId={`direction-${index}`} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="flex mb-2">
                              <div className="w-10">
                                <span className="inline-flex items-center justify-center w-4 h-4 p-2 mt-9 mx-1 rounded-full 
                                  border border-slate-700 dark:border-slate-100 bg-transparent text-slate-900 dark:text-white text-[10px]"
                                >
                                  {index + 1}
                                </span>
                              </div>
                              <div className="flex-1 pt-6">
                                <input
                                  className="shadow appearance-none rounded-lg dark:border dark:border-slate-100 w-full h-auto py-2 px-4 text-gray-700 dark:text-gray-200 
                                  leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                                  name={`directions-${index}`}
                                  value={direction}
                                  onChange={(event) => props.handleDirectionChange(index, event)}
                                  onKeyDown={props.handleEnterKey}
                                  placeholder="Add a step"
                                  {...provided.dragHandleProps}
                                />
                              </div>
                              <div className="w-10 mx-2 flex justify-end p-2">
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center mt-6 mr-1 rounded-full
                                  hover:text-red-500 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                                  onClick={() => props.handleRemoveDirection(index)}
                                >
                                  <span className="sr-only">Remove Line</span>
                                  <RemoveLine />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <div className="flex items-center mt-2 ml-10 p-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2 mr-4 
                  hover:text-green-500 dark:hover:text-green-300 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                  onClick={props.handleAddDirection}
                >
                  <span className="sr-only">New Line</span>
                  <AddLine />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2 px-4 
                  hover:text-orange-500 dark:hover:text-yellow-200 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                  onClick={props.handleClearDirections}
                >
                  <span className="sr-only">Clear Directions</span>
                  <ClearAll />
                </button>
              </div>
            </DragDropContext>
          </div>
        </div>

        <button className="rounded-xl py-1 px-4 border border-slate-600 dark:border-slate-100" type="submit">Submit</button>
        
      </form>
    </div>
  )
};
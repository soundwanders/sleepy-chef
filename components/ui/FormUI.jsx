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
            type="text"
            placeholder="Enter recipe name"
            value={props.recipe.name}
            onChange={props.handleChange}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="types">
            Recipe Types
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
            leading-tight focus:outline-none focus:shadow-outline"
            id="types"
            name="types"
            multiple
            value={props.recipe.types || []}
            onChange={props.handleChange}
          >
            <option value="">Select Type</option>
            <option 
              value="beef" 
              className={props.recipe.types?.includes("beef") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Beef
            </option>
            <option 
              value="chicken" 
              className={props.recipe.types?.includes("chicken") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Chicken
            </option>
            <option 
              value="pork" 
              className={props.recipe.types?.includes("pork") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Pork
            </option>
            <option 
              value="salad" 
              className={props.recipe.types?.includes("salad") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Salad
            </option>
            <option 
              value="seafood" 
              className={props.recipe.types?.includes("seafood") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Seafood
            </option>
            <option 
              value="soup" 
              className={props.recipe.types?.includes("soup") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Soup
            </option>
            <option 
              value="texmex" 
              className={props.recipe.types?.includes("texmex") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              TexMex
            </option>
            <option 
              value="vegan" 
              className={props.recipe.types?.includes("vegan") ? "selected focus:bg-orange-100 dark:focus:bg-slate-800 bg-orange-100 dark:bg-slate-800" : ""}
            >
              Vegan
            </option>
          </select>
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
            type="text"
            placeholder="Enter total time"
            value={props.recipe.time}
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
              checked={props.recipe.vegetarian}
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
              checked={props.recipe.vegan}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
            leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
            id="ingredients"
            name="ingredients"
            placeholder="Enter ingredients, separated by commas"
            value={props.recipe.ingredients}
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
                type="text"
                placeholder="Enter calories"
                value={props.recipe.nutrition.calories}
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
                value={props.recipe.nutrition.carbs}
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
                value={props.recipe.nutrition.cholesterol}
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
                type="text"
                placeholder="Enter fat (grams)"
                value={props.recipe.nutrition.fat}
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
                value={props.recipe.nutrition.protein}
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
                value={props.recipe.nutrition.sodium}
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
                                <span className="inline-flex items-center justify-center w-4 h-4 p-2 mt-9 ml-2 rounded-full 
                                  border border-slate-700 dark:border-slate-100 bg-transparent text-slate-900 dark:text-white text-[10px]"
                                >
                                  {index + 1}
                                </span>
                              </div>
                              <div className="flex-1 ml-2 pt-6">
                                <input
                                  className="shadow appearance-none rounded-lg dark:border dark:border-slate-100 w-full h-auto py-2 px-4 text-gray-700 dark:text-gray-200 
                                  leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                                  type="text"
                                  name={`directions-${index}`}
                                  value={direction}
                                  onChange={(event) => props.handleDirectionChange(index, event)}
                                  onKeyDown={props.handleKeyDown}
                                  placeholder="Add a step"
                                  {...provided.dragHandleProps}
                                />
                              </div>
                              <div className="w-10 ml-2 flex justify-end p-2">
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center mt-6 mr-2 rounded-full
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
                  hover:text-green-400 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                  onClick={props.handleAddDirection}
                >
                  <span className="sr-only">New Line</span>
                  <AddLine />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2 px-4 
                  hover:text-red-400 dark:hover:text-red-300 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
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
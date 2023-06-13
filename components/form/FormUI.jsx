import React from 'react';
import { CheckboxOption } from '@components/form/CheckboxOption';
import { NutritionInput } from './NutritionInput';
import { DirectionsInput } from './DirectionsInput';
import { AddLine, ClearAll, RemoveLine } from '@components/ui/Icons';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export const FormUI = (props) => {
  return (
    <div className="flex-1 items-center justify-start px-8 md:px-4 mb-6 -mt-4 md:mt-6 py-2 pb-20">
      <form onSubmit={props.handleSubmit}>
        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold mb-3" htmlFor="name">
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
          {props.errors && props.errors.name && <small className="error">{props.errors.name}</small>}
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold mb-3" htmlFor="types">
            Recipe Types
          </label>

          <div className="flex flex-wrap gap-4">
            <CheckboxOption
              name="types"
              value="beef"
              checked={props.newRecipe.types?.includes("beef")}
              onChange={props.handleChange}
              label="Beef"
            />

            <CheckboxOption
              name="types"
              value="chicken"
              checked={props.newRecipe.types?.includes("chicken")}
              onChange={props.handleChange}
              label="Chicken"
            />

            <CheckboxOption
              name="types"
              value="pork"
              checked={props.newRecipe.types?.includes("pork")}
              onChange={props.handleChange}
              label="Pork"
            />

            <CheckboxOption
              name="types"
              value="salad"
              checked={props.newRecipe.types?.includes("salad")}
              onChange={props.handleChange}
              label="Salad"
            />

            <CheckboxOption
              name="types"
              value="seafood"
              checked={props.newRecipe.types?.includes("seafood")}
              onChange={props.handleChange}
              label="Seafood"
            />

            <CheckboxOption
              name="types"
              value="soup"
              checked={props.newRecipe.types?.includes("soup")}
              onChange={props.handleChange}
              label="Soup"
            />

            <CheckboxOption
              name="types"
              value="texmex"
              checked={props.newRecipe.types?.includes("texmex")}
              onChange={props.handleChange}
              label="TexMex"
            />
                    
            <CheckboxOption
              name="types"
              value="vegan"
              checked={props.newRecipe.types?.includes("vegan")}
              onChange={props.handleChange}
              label="Vegan"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold mb-3" htmlFor="time">
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
          {props.errors && props.errors.time && <small className="error">{props.errors.time}</small>}
        </div>

        <div className="flex mb-4">
          <div className="mr-8">
            <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold mb-3" htmlFor="vegetarian">
              Vegetarian
            </label>
            <input
              className="ml-1 mr-5 md:h-5 md:w-5 leading-tight"
              id="vegetarian"
              name="vegetarian"
              type="checkbox"
              checked={props.newRecipe.vegetarian}
              onChange={props.handleChange}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold mb-3" htmlFor="vegan">
              Vegan
            </label>
            <input
              className="mr-2 md:h-5 md:w-5 leading-tight"
              id="vegan"
              name="vegan"
              type="checkbox"
              checked={props.newRecipe.vegan}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 mt-6 text-lg font-bold mb-3" htmlFor="ingredients">
            Ingredients
          </label>
          {props.ingredients.map((ingredient, index) => (
            <div key={index} className="flex mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 my-1 text-gray-700 dark:text-gray-200 
                  leading-tight focus:outline-none"
                name={`ingredients[${index}]`}
                placeholder="Enter ingredient"
                value={ingredient}
                onChange={(event) => props.handleIngredientChange(index, event)}
              />
              {props.errors && props.errors.ingredients && <small className="error">{props.errors.ingredients}</small>}
              <button
                type="button"
                className="ml-3 rounded-full text-red-400 hover:text-red-500 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"          
                onClick={() => props.handleRemoveIngredient(index)}
              >
                <span className="sr-only">Remove Line</span>
                <RemoveLine />
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 p-1 shadow rounded-lg bg-orange-200 text-slate-800 hover:bg-orange-300
              focus:outline-none focus:bg-orange-300 focus:translate-y-[1px]"
            onClick={() => props.handleAddIngredient()}
          >
            <span className="sr-only">New Line</span>
            <AddLine />
          </button>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold mb-3" htmlFor="nutrition">
            Nutrition Information
          </label>
          <div className="grid grid-cols-2 gap-4">
              <NutritionInput
                label="Calories"
                id="calories"
                name="calories"
                placeholder="Enter calories"
                value={props.newRecipe.nutrition.calories}
                onChange={props.handleChange}
                errors={props.errors}
              />

              <NutritionInput
                label="Carbs"
                id="carbs"
                name="carbs"
                placeholder="Enter carbs"
                value={props.newRecipe.nutrition.carbs}
                onChange={props.handleChange}
                errors={props.errors}
              />

              <NutritionInput
                label="Cholesterol"
                id="cholesterol"
                name="cholesterol"
                placeholder="Enter cholesterol (milligrams)"
                value={props.newRecipe.nutrition.cholesterol}
                onChange={props.handleChange}
                errors={props.errors}
              />

              <NutritionInput
                label="Fat"
                id="fat"
                name="fat"
                placeholder="Enter fat (grams)"
                value={props.newRecipe.nutrition.fat}
                onChange={props.handleChange}
                errors={props.errors}
              />

              <NutritionInput
                label="Protein"
                id="protein"
                name="protein"
                placeholder="Enter protein (grams)"
                value={props.newRecipe.nutrition.protein}
                onChange={props.handleChange}
                errors={props.errors}
              />

              <NutritionInput
                label="Sodium"
                id="sodium"
                name="sodium"
                placeholder="Enter sodium (milligrams)"
                value={props.newRecipe.nutrition.sodium}
                onChange={props.handleChange}
                errors={props.errors}
              />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 dark:text-gray-200 text-lg font-bold my-2 mb-3" htmlFor="directions">
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
                      <DirectionsInput
                        key={`direction-${index}`}
                        index={index}
                        direction={direction}
                        handleDirectionChange={props.handleDirectionChange}
                        handleRemoveDirection={props.handleRemoveDirection}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <div className="flex items-center mt-2 ml-10 p-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2 mr-4 hover:text-green-500 
                  dark:hover:text-green-300 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                  onClick={props.handleAddDirection}
                >
                  <span className="sr-only">New Line</span>
                  <AddLine />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2 px-4 hover:text-orange-500 
                    dark:hover:text-orange-300 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                  onClick={props.handleClearDirections}
                >
                  <span className="sr-only">Clear Directions</span>
                  <ClearAll />
                </button>
              </div>
            </DragDropContext>
          </div>
          {props.errors && props.errors.direction && <small className="error">{props.errors.directions}</small>}
        </div>

        <HCaptcha
          sitekey={process.env.RECAPTCHA_SITEKEY}
          onVerify={props.handleCaptchaVerify}
          onExpire={props.handleCaptchaExpire}
        />

        <button 
          className="rounded-xl py-[5px] px-4 border border-slate-600 dark:border-slate-100 active:translate-y-[1px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
};

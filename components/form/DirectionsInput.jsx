import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { RemoveLine } from '@components/ui/Icons';

export const DirectionsInput = (props) => {
  return (
    <Draggable draggableId={`direction-${props.index}`} index={props.index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <div className="flex mb-2" {...provided.dragHandleProps}>
            <div className="w-10">
              <span className="inline-flex items-center justify-center w-4 h-4 p-2 mt-9 mx-1 rounded-full 
                border border-slate-700 dark:border-slate-100 bg-transparent text-slate-900 dark:text-white text-[10px]"
              >
                {props.index + 1}
              </span>
            </div>
            <div className="flex-1 pt-6">
              <input
                className="shadow appearance-none rounded-lg dark:border dark:border-slate-100 w-full h-auto py-2 px-4 text-gray-700 dark:text-gray-200 
                  leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                name={`directions-${props.index}`}
                value={props.direction}
                aria-label="Enter direction"
                onChange={(event) => props.handleDirectionChange(props.index, event)}
                onKeyUp={props.handleDirectionKeys}
                placeholder="Add a step"
              />
            </div>
            <div className="w-10 mx-2 flex justify-end p-2">
              <button
                type="button"
                className="inline-flex items-center justify-center mt-6 mr-1 rounded-full
                  hover:text-red-500 focus:outline-none focus:bg-transparent focus:translate-y-[1px]"
                onClick={() => props.handleRemoveDirection(props.index)}
              >
                <span className="sr-only">Remove Line</span>
                <RemoveLine />
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
};

// import App from "../../App"

//  Create Todo App  using useReducer 
// how to create todo App using Reducer

import React, { useReducer } from "react";

// Reducer function to handle state transitions based on actions

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
       ...state,
        items: [...state.items, action.payload]
      };
    case "DELETE_ITEM":
      return {
       ...state,
        items: state.items.filter(item => item.id!== action.payload)
      };
    default:
      return state;
  }
};

export default function TodoList() {
    // Initial state with an array of items
    const initialState = {
      items: [
        { id: 1, text: "Learn React" },
        { id: 2, text: "Build a project" }
      ]
    };
    // useReducer returns the current state and a dispatch function to dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {state.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: { id: 3, text: "Deploy the project" } })}>
          Add Item
        </button>
        <button onClick={() => dispatch({ type: "DELETE_ITEM", payload: 2 })}>
          Delete Item
        </button>
      </div>
    );
  }




    



  




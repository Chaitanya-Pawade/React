// //! 5 Create a counter using useReducer (primitive) ,
// //!   implement a simple counter with increment and decrement actions.

import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
export default function Assign5() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "Increment" });
  };
  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <>
      <h2>Counter using useReducer</h2>
      <div>
        <p>count: {state.count}</p>
        <button onClick={increment}>Increment</button><br/><br/>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}


// import React, { useReducer, useState } from "react";

// // Reducer function to handle state transitions based on actions
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     case "DELETE_ITEM":
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// export default function TodoList() {
//   // Initial state with an array of items
//   const initialState = {
//     items: [
//       { id: 1, text: "Learn React" },
//       { id: 2, text: "Build a project" },
//       { id: 3, text: "Deploy the project" }
//     ]
//   };

//   // useReducer returns the current state and a dispatch function to dispatch actions
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [newItemText, setNewItemText] = useState("");

//   // Action function to add a new item
//   const addItem = () => {
//     if (newItemText.trim() !== "") {
//       const newItem = {
//         id: Date.now(),
//         text: newItemText
//       };
//       dispatch({ type: "ADD_ITEM", payload: newItem });
//       setNewItemText("");
//     }
//   };

//   // Action function to delete an item
//   const deleteItem = (id) => {
//     dispatch({ type: "DELETE_ITEM", payload: id });
//   };

//   return (
//     <>
//       <h2>Todo List using useReducer</h2>
//       <div>
//         <input
//           type="text"
//           value={newItemText}
//           onChange={(e) => setNewItemText(e.target.value)}
//           placeholder="Enter new item"
//         />
//         <button onClick={addItem}>Add Item</button>
//       </div>
//       <ul>
//         {state.items.map((item) => (
//           <li key={item.id}>
//             {item.text}
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

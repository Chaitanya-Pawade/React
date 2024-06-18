import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
import { renderToReadableStream } from "react-dom/server";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "Increment": {
      return state + 1;
    }
    case "Decrement": {
      return state - 1;
    }
    case "Reset": {
      return initialState;
    }
  }
};

//   if (action.type === "Increment") {

//     return state + 1;
//   } else {
//     return state - 1;
//   }

// };

export default function UseReducer() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h2>Increment and Decrement using UseReducer </h2>
        <br />
        <h3>{counter}</h3>
        <div className="btnStylePosition">
          <button onClick={() => dispatch({ type: "Increment" })}>
            Increment
          </button>
          <br />
          <br />
          <button onClick={() => dispatch({ type: "Decrement" })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        </div>
      </div>
    </>
  );
}

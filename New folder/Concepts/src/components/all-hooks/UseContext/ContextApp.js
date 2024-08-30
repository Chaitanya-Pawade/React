import React, { useReducer } from "react";
import { useContext } from "react";

export const ReducerContext = React.createContext();

const initialState = 0;
const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialState;
    default:
      return count;
  }
};

function ContextApp() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>1.reducer and context</h2>
      <ReducerContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h3> Counter value : {count}</h3>
        <ComponentB />
        <ComponentD />
        <ComponentE />
      </ReducerContext.Provider>
    </>
  );
}
function ComponentB() {
  const counterContext = useContext(ReducerContext);
  // const {countState, countDispatch} = useContext(ReducerContext);

  return (
    <div>
      ComponentB = count : {counterContext.countState}
      <button onClick={() => counterContext.countDispatch("increment")}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={() => counterContext.countDispatch("decrement")}>
        {" "}
        Decrement{" "}
      </button>
      <button onClick={() => counterContext.countDispatch("reset")}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

function ComponentD() {
  const counterContext = useContext(ReducerContext);

  return (
    <div>
      ComponentD = count : {counterContext.countState}
      <button onClick={() => counterContext.countDispatch("increment")}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={() => counterContext.countDispatch("decrement")}>
        {" "}
        Decrement{" "}
      </button>
      <button onClick={() => counterContext.countDispatch("reset")}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

function ComponentE() {
  const counterContext = useContext(ReducerContext);

  return (
    <div>
      ComponentE = count : {counterContext.countState}
      <button onClick={() => counterContext.countDispatch("increment")}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={() => counterContext.countDispatch("decrement")}>
        {" "}
        Decrement{" "}
      </button>
      <button onClick={() => counterContext.countDispatch("reset")}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}
export default ContextApp;

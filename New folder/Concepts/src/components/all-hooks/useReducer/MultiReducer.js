import { useReducer } from "react";
const intialState = { run: 0 };
function reduce(state, action) {
  switch (action.type) {
    case "I":
      return { run: state.run + 1 };
    case "D":
      return { run: state.run - 1 };
    case "R":
      return { intialState };
    default:
      return state;
  }
}

function MultiReducer() {
  const [run1, dispatch1] = useReducer(reduce, intialState);
  const [run2, dispatch2] = useReducer(reduce, intialState);

  return (
    <>
      <h3>3 MultiReducer</h3>
      <p>Player1:{run1.run}</p>
      <button onClick={() => dispatch1({ type: "I" })}>increase</button>
      <button onClick={() => dispatch1({ type: "D" })}>decrease</button>
      <button onClick={() => dispatch1({ type: "R" })}>reset</button>
      <p>Player2:{run2.run}</p>
      <button onClick={() => dispatch2({ type: "I" })}>increase</button>
      <button onClick={() => dispatch2({ type: "D" })}>decrease</button>
      <button onClick={() => dispatch2({ type: "R" })}>reset</button>
    </>
  );
}

export default MultiReducer;

import { useReducer } from "react";
const intialState = 0;
function reducer(state, action) {
  switch (action) {
    case "I":
      return state + 1;
    case "D":
      return state - 1;
    case "R":
      return intialState;
  }
}
function SimpleReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h3> 1 simple reducer</h3>
      <p>counter :{count}</p>
      <button onClick={() => dispatch("I")}>increase</button>
      <button onClick={() => dispatch("D")}>decrease</button>
      <button onClick={() => dispatch("R")}>reset</button>
    </div>
  );
}

export default SimpleReducer;

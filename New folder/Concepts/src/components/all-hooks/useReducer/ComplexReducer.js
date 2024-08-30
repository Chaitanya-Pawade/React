import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "I":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "D":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "I1":
      return { ...state, secondCounter: state.secondCounter + 1 };
    case "D1":
      return { ...state, secondCounter: state.secondCounter - 1 };
    case "R":
      return { intialState };
  }
}

const intialState = { firstCounter: 0, secondCounter: 0 };
function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h3>2.Complex Reducer</h3>
      <h3> First Counter:{count.firstCounter}</h3>
      <button onClick={() => dispatch({ type: "I" })}>increase</button>
      <button onClick={() => dispatch({ type: "D" })}>decrease</button>
      <h3>Second Counter:{count.secondCounter}</h3>
      <button onClick={() => dispatch({ type: "I1" })}>increase</button>
      <button onClick={() => dispatch({ type: "D1" })}>decrease</button>
      <button onClick={() => dispatch({ type: "R" })}>reset</button>
    </div>
  );
}

export default ComplexReducer;

import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increase": {
      return {
        player: state.name,
        runs: state.runs + 1,
      };
    }
    case "change-player": {
      return {
        player: action.newPlayer,
        runs: state.runs,
      };
    }
  }
}

function Counter1() {
  const [state, dispatch] = useReducer(reducer, { player: "virat", runs: 100 });

  function handleOnChange(e) {
    dispatch({ type: "change-player", newPlayer: e.target.value });
  }
  return (
    <>
      <h3>Counter 2 doubts</h3>
      <input value={state.player} onChange={handleOnChange}></input>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        update Score
      </button>
      <p>
        hey,{state.player} have scroced {state.runs}
      </p>
    </>
  );
}

export default Counter1;

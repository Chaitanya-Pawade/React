import React from "react";
import useCounter from "./useCounter";
function CustomCounter() {
  const [count, increase, decrease, reset] = useCounter(4, 4);
  const [c, i, d, r] = useCounter(2, 1);

  return (
    <>
      <h2>2.Custom Counter</h2>
      <h3> Counter1 : {count}</h3>
      <button onClick={increase}> Increment </button>
      <button onClick={decrease}> Decrement </button>
      <button onClick={reset}> Reset </button>
      <br></br>

      <h3> Counter2 : {c}</h3>
      <button onClick={i}> Increment </button>
      <button onClick={d}> Decrement </button>
      <button onClick={r}> Reset </button>
    </>
  );
}

export default CustomCounter;

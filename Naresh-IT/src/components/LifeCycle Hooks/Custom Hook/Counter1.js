import React from "react";
import useCounter from './useCounter';

function Counter1() {
  const [count, Increment, Decrement] = useCounter();

  return (
    <>
      <h3>{count}</h3>
      <button onClick={Increment}>Increment</button>
      <br />
      <br />
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default Counter1;

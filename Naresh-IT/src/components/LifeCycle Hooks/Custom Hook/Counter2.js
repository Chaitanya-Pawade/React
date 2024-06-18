import React from "react";
import useCounter from './useCounter';

function Counter2() {
  const [count, Increment, Decrement] = useCounter(10);

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

export default Counter2;

import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function findCube(num) {
    console.log("Calculation done");
    return Math.pow(num, 3);
  }

  //   const result = findCube(number)
  const result = useMemo(() => findCube(number), [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <h2>Cube of the number : {result}</h2>
      <button onClick={(e) => setCount(count + 1)}>Counter++</button>
      <h2>Counter : {count}</h2>
    </>
  );
}

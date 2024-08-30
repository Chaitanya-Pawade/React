//! 4 Create a simple counter using useEffect hook
//!   Set up two counters : countOne and countTwo,
//!   Use useEffect to watch countOne and update the document title.

import React, { useEffect, useState } from "react";

export default function Assign4() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    document.title = `Count one : ${countOne}`;
  }, [countOne]);

  function incrementCountOne() {
    setCountOne(countOne + 1);
  }
  function incrementCountTwo() {
    setCountTwo(countTwo + 1);
  }
  return (
    <>
      <h2>Counter using useEffect</h2>
      <div>
        <p>Count One: {countOne}</p>
        <button onClick={incrementCountOne}>Increment Count One</button>
      </div>
      <div>
        <p>Count Two: {countTwo}</p>
        <button onClick={incrementCountTwo}>Increment Count Two</button>
      </div>
    </>
  );
}

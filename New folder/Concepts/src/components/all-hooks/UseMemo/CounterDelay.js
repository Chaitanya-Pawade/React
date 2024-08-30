import React, { useMemo, useState } from "react";
function CounterDelay() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const countOneIncrement = () => {
    setCountOne(countOne + 1);
  };

  const countTwoIncrement = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = () => {
    console.log("isEven called");
    for (let i = 1; i < 500000000; i++) return countOne % 2 === 0;
  };

  // const isEven = useMemo(() => {
  //   console.log("isEven called");
  //   for (let i = 1; i < 500000000; i++) {}
  //   return countOne % 2 === 0;
  // }, [countOne]);
  return (
    <>
      <h2>1.CounterDelay</h2>
      <div>
        <h3> Counter One : {countOne}</h3>
        <button onClick={countOneIncrement}> Increment C1</button>
        <span>{isEven ? " Even" : " Odd"}</span>
      </div>
      <div>
        <h3> Counter Two : {countTwo}</h3>
        <button onClick={countTwoIncrement}> Increment C2</button>
      </div>
    </>
  );
}

export default CounterDelay;

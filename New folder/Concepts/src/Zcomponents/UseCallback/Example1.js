import { useCallback, useState } from "react";
import Child from "./Child";

function Example1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const IncreaseOne = () => {
    setCount1(count1 + 1);
  };
  const AddToCount2 = () => {
    setCount2(count2 + 1);
  };

  const F1 = useCallback(() => {
    console.log("hello F1");
  }, count2);

  const handleClick = () => {
    F1();
  };
  return (
    <>
      <h2>1.Example1</h2>
      <Child count2={count2} F1={F1}></Child>
      {/* <Child></Child> */}

      <button onClick={AddToCount2}>Add to Count2</button>
      <button onClick={IncreaseOne}>CounterOne:{count1}</button>
      <button onClick={handleClick}>Invoke F1</button>
    </>
  );
}

export default Example1;

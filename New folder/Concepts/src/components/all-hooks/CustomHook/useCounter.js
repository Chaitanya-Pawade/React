import { useState } from "react";

function useCounter(factor, intialValue) {
  const [count, setCount] = useState(intialValue);

  const increase = () => {
    setCount(count + factor);
  };

  const decrease = () => {
    setCount(count - factor);
  };

  const reset = () => {
    setCount(intialValue);
  };
  return [count, increase, decrease, reset];
}

export default useCounter;

import UseState from "./UseState";
import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(int);
  }, []);

  return (
    <>
      <h2>Counter using useEffect</h2>
      <h2>{count}</h2>
    </>
  );
}

export default UseEffect;

import { useState, useEffect } from "react";
function ConditionalUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("due to counter change.");
    // document.title = `Counter value is ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("due to name change");
    // document.title = `Counter value is ${count}`;
  }, [name]);
  return (
    <>
      <h3>conditional use effect</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          e.preventDefault();
        }}
      />
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </>
  );
}

export default ConditionalUseEffect;

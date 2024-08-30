import { useState } from "react";
import Child from "./Child";
import ChildChange from "./ChildChange";

function Optimize() {
  console.log("parent Change");
  const [state, setState] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);
  return (
    <div>
      <h1>optimize</h1>
      <h3>one:{state}</h3>
      <h3>Two:{stateTwo}</h3>
      <Child count1={state}></Child>
      <br></br>
      <ChildChange count={stateTwo}></ChildChange>
      <button onClick={() => setState((a) => a + 1)}>one</button>
      <button onClick={() => setStateTwo((b) => b + 1)}>two</button>
    </div>
  );
}

export default Optimize;

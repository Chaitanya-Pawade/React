import { useState } from "react";
import ParentComp from "./ParentComp";

function App1() {
  console.log("4 app called");
  const [show, SetShow] = useState(true);
  return (
    <>
      <button onClick={() => SetShow(!show)}>b</button>
      {show && <ParentComp></ParentComp>}
    </>
  );
}

export default App1;

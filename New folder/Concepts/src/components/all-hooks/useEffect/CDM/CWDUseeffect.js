import CDMuseEffect from "./CDM/CDMuseEffect";
import { useState } from "react";

function CWDUseeffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <p>CWUuseEffect</p>
      <h4>Mouse pointer location will be visible only if Display is on</h4>
      <h6>Use the button to toggle the display</h6>

      <button onClick={() => setDisplay(!display)}>Toggle Display</button>

      {display && <CDMuseEffect />}
    </div>
  );
}

export default CWDUseeffect;

import React from "react";
import { memo } from "react";

function Button({ handler, children }) {
  console.log("Button Called for ", children);
  return (
    <>
      <button onClick={handler}>{children}</button>
    </>
  );
}

export default React.memo(Button);

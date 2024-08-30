import { memo } from "react";

function Child({ count2, F1 }) {
  console.log("child render");
  return (
    <>
      <h2>child</h2>
      <p>Count2: {count2}</p>
    </>
  );
}

export default memo(Child);

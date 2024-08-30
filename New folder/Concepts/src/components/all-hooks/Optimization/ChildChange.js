import React from "react";
function ChildChange({ count }) {
  console.log("changeTwo");
  return <div>{<h2>{count}</h2>}</div>;
}

export default React.memo(ChildChange);
// export default ChildChange;

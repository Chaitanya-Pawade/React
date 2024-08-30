import React, { useState, useEffect } from "react";

function CDMuseEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse listener called");
    // setX(x + 1);
    // setY(y + 1);
    // setX(e.clientX);
    // setY(e.clientY);
  };
  useEffect(() => {
    console.log("Component did mount - useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component will unmount - Cleanup function called");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <>
      <p>CDMuseEffect</p>
      <h3>
        Mouse Pointer Position = X: {x} & Y: {y}
      </h3>
    </>
  );
}

export default CDMuseEffect;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function CleanUp() {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  function widthChange() {
    setWidthCount(window.innerWidth);
  }
  useEffect(() => {
    console.log("add");
    window.addEventListener("resize", widthChange);
    return () => {
      console.log("remove");
      window.removeEventListener("resize", widthChange);
    };
  });
  return (
    <div>
      <h3>CleanUp</h3>
      <h1>{widthCount}</h1>
    </div>
  );
}

export default CleanUp;

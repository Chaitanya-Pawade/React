import { useEffect, useState } from "react";
function ParentComp() {
  console.log(" 1 called did mount");

  const [Count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("2 useeffect called ");
    return () => {
      console.log("3 useeffect called unmount in return");

      document.body.style.backgroundColor = "";
    };
  }, [Count]);

  return (
    <>
      <h2>{Count}</h2>
      <button onClick={() => setCount(Count + 1)}>plus</button>
    </>
  );
}

export default ParentComp;

import { useEffect, useState } from "react";
import { useRef } from "react";
function E1Ref() {
  const [data, setData] = useState("");
  // const [count, setCount] = useState(0);

  // const count = useRef(7);
  // console.log("use ref ", count);

  // useEffect(() => {
  // setCount(count + 1);
  //   count.current = count.current + 1;
  // });
  const InputElem = useRef("");
  const changeStyle = () => {
    console.log("ref", InputElem.current);
    InputElem.current.style.backgroundColor = "yellow";
  };
  return (
    <>
      <h2>E1 Ref</h2>
      <input
        ref={InputElem}
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></input>
      <br></br>
      {/* <p>render times:{count.current}</p> */}
      <button onClick={changeStyle}>style</button>
    </>
  );
}

export default E1Ref;

import { useRef } from "react";
export default function UseRef() {
  const countRef = useRef(null);

  function addition() {
    const num1 = +countRef.current.value;
    const num2 = +countRef.current.value;
    alert(`addition is ${num1 + num2}`);
  }
  return (
    <>
      <h3>Addittion using refs</h3>
      <p>
        <input ref={countRef} style={{ width: 150 }} />
      </p>

      <p>
        <input ref={countRef} style={{ width: 150 }} />
      </p>
      <button onClick={addition}>Add</button>
    </>
  );
}

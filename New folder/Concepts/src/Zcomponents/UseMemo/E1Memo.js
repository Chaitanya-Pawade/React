import { useMemo, useState } from "react";

function E1Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase1 = () => {
    setCount1(count1 + 1);
  };
  const increase2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    console.log("isEVEN");
    let i = 0;
    while (i < 300000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  // const isEven = () => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return count1 % 2 === 0;
  // };

  return (
    <>
      <h2>1.E1Memo</h2>
      <button onClick={increase1}>Counter1:{count1}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={increase2}>Counter2:{count2}</button>
    </>
  );
}

export default E1Memo;

import React, { useState } from "react";

export default function HodCmp() {
  return (
    <>
      <h2>Higher Order Component</h2>
      <HODRed cmp = {Counter}/><br/>
      <HODGreen cmp = {Counter}/>
    </>
  );
}
function HODRed(props){
    return (
        <h3 style={{backgroundColor:"red"}}><props.cmp/></h3>
        
    )
}
function HODGreen(props){
    return (
        <h3 style={{backgroundColor:"green"}}><props.cmp/></h3>
        
    )
}
function Counter() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={changeCount}>Update</button>
    </div>
  );
}

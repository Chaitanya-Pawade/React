import React from "react";
// import { useRef } from "react";
import { useState,useRef,useEffect } from "react";

//! Example 1

// export default function UseRef(){

//     let refElement = useRef(null);

//     function HandleInput(){
//          console.log("function call...")
//          refElement.current.value = "Chaitanya"
//         // refElement.current.focus();
//         // refElement.current.style.color = "red"
//     }

//     return (
//         <>
//           <h3>UseRef Example 1</h3>
//           <input  type="text"  ref = { refElement } style={{width:170}} className="m-2"/>
//           <button onClick={HandleInput} className="btn btn-success">handle input</button>
//         </>
//     )
// }

//! Example 2

// export default function UseRef(){
//     const [count , setCount] = useState(0);
//     const myRef = useRef();

//     useEffect(() => {
//         myRef.value = count;
//         console.log("use effect...")
//     })


//     return (
//         <>
//         {console.log("render...")}
//         Now : {count}   , before : {myRef.value}
//         <button onClick={() => setCount(count+1)}>Increment</button>
//         </>
//     )
// }

//! Example 3

export default function UseRef(){

    const countRef = useRef(null)

    function addition(){
    const num1 = +countRef.current.value;
    const num2 = +countRef.current.value
    alert(`addition is ${num1 + num2}`)
    }
return (
    <>
      <h3>Addittion  using refs</h3>
      <p>
        <input ref={countRef} style={{width:150}}/>

      </p>

      <p>
        <input ref={countRef} style={{width:150}}/>

      </p>
      <button onClick={addition}>Add</button>
    </>
)

}
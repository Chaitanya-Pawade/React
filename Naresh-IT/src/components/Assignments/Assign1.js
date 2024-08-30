//! 1 create nested components and pass a data from parent to child 



import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Assign1(){

let name = "Chaitanya";
let obj = {player : "Mahi",jerseyNo : 7,singer: "Argit" , song : 'tu jo ruthaa'};

const receiveDataFromChild = (message) => {
alert(`message from child ${message}`);
}

let nums = [1,2,3,4,5];

    return (
        <>
        <h1>Assign 1</h1>
        <Child1 name={name} obj={obj} callback={receiveDataFromChild}/>
        <Child2 nums={nums}/>
        </>
        
    )
}

//! 7 Auto focus the input element using useRef hook , use the useRef hook to focus an input field on inital render.

// import { useRef } from "react"

// export default function Assign1(){

//     const refElement = useRef(null);

//     function handleInput(){
//         refElement.current.focus();
//     }
//     return (
//         <>
//         <input type="text" ref={refElement}></input>
//         <button onClick={handleInput}>handleInput</button>
//         </>
//     )
// }

//  //! Optimize Re-Renders with react memo , create one parent and two child components.
// //! use React.memo to prevent unnecessary re-renders of child component.

// import React, { useState } from 'react';
// import Child1 from './Child1';
// import Child2 from './Child2';

// const Assign1 = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(prevCount => prevCount + 1);
//     };

//     return (
//         <div>
//             <h2>Parent Component</h2>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment Count</button>
//             <Child1 count={count} />
//             <Child2 />
//         </div>
//     );
// };

// export default Assign1;

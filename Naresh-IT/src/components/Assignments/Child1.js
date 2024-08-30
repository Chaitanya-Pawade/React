import React from "react";


export default function Child1({name , obj , callback}){
    
    const handleClick = () => {
        const message = "hello from child";
    callback(message);
    
    }
    return (
        <>
        <h3>Child 1</h3>
        <h2>My Name is {name}</h2>
        <h2>Player : {obj.player } and  JersyNo : {obj.jerseyNo}</h2>
        <h2>Singer : {obj.singer} and Song : {obj.song}</h2>
          <button onClick={handleClick}>data from child </button>
        </>
    )
}




//! 
// const Child1 = React.memo(({ count }) => {
//     console.log('ChildComponent1 re-rendered');
//     return (
//         <div>
//             <h3>Child Component 1</h3>
//             <p>Count: {count}</p>
//         </div>
//     );
// });

// export default Child1;


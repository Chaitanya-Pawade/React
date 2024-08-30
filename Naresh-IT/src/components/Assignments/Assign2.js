//! 2 create simple counter , implement increment , decrement , reset

import React, {useState} from "react";

export default function Assign2(){

    const [count , setCount] = useState(0);
    const [decrement , setDecrement] = useState(0);
    
     function incrementCount(){
        setCount(count + 1)
     }
       function decrementCount(){
        setDecrement(decrement - 1)
       }

       function resetFun(){
        setCount(0);
        setDecrement(0);
       }
    return (
        <>
        <h2>Counter Assignment</h2>
        <button onClick={ incrementCount }> Increment : {count}</button><br/><br/>
        <button onClick={ decrementCount }> Decrement : {decrement}</button><br/><br/>
        <button onClick={resetFun}> Reset </button>

        </>
    )
}
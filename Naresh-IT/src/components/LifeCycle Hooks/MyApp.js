import React, { useCallback, useState } from "react";
import UseCallback from '../LifeCycle Hooks/UseCallback';

export default function MyApp(){

    const [add , setAdd] = useState(0);
    const [count , setCount] = useState(0);

    const Learning = useCallback( () => {
    console.log("learning useCallback");
    },[count])

    return(
        <>
        <h2>UseCallback Example</h2>
        <UseCallback Learning = {Learning} count = {count}/>
        <h3>{add}</h3>
        <button onClick={() => setAdd(add+1)}>Add</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count+2)}>Count</button>
        </>
    )
}
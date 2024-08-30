import React , {useCallback, useState} from "react";
import UseCallback from "./UseCallback";

export default function MyApp(){

    const [count,setCount] = useState(0);
    // const newFn = () => {}
        const newFn = useCallback(() => {} , [])
    return (
        <>
        <UseCallback newFn = {newFn}/>
        <h3>Count : {count}</h3>
        <button onClick={(e) => setCount(count + 1)}>Click here</button>
        </>
    )
}
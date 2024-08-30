// props

import { useState } from "react"
import Child from "./child";


export default function Third(){

    const [name , setName] = useState('Nishant');

    const changeName = (changedName) => {
        console.log(changedName);
        setName(changedName)
    }
    return(
        <>
        <Child name = {name} changeName = {changeName}/>
        </>
    )
}



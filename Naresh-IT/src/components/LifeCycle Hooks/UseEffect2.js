import React, { useEffect, useState } from "react";


export default function UseEffect2(){

const [count , setCount] = useState(0);

const updateCount = () => {
setCount(count + 1)

}

useEffect (() => {
    if(count >=1 ){
 document.title = `Chats (${count})`; }
 else{
    document.title = `Chats`;
 }

})

    return (
        <>
        <h2>Count using useEffect (in tab)</h2>
        <h2>Count : {count}</h2>
        <button onClick={updateCount}>Update</button>
        </>
    )
}
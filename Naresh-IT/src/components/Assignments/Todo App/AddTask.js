import React, { useState } from "react";



export default function AddTask({addTask}){

    const [text , setText] = useState("");

    const addTasks = () => {
        addTask(text);
        setText("");
        console.log(text); 
    }
    return (
        <>
        <input value={text} style={{width:200}} onChange={(e) => setText(e.target.value) } className="m-3"></input>
        <button onClick={addTasks}>Add</button>
        </>
    )
}
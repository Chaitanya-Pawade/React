import React from "react";

export default function TaskList({tasks , deleteTask}){


    return (
        <>
       <ul>
      {tasks.map((t) => (
        <li key={t.id}>
        {t.text}
        <button onClick={() => deleteTask(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  
        </>
    )
}
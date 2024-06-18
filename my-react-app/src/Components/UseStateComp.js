import React , { useState } from "react";

export default function UseStateComp(){


      const [title,setNewTitle] = useState("Chaitanya")

      function handleChange(event){
        setNewTitle(event.target.value);
      }

   function clickHandler() {
    setNewTitle("Chhaya");
   }

    return(
        <div>
            <h1>{ title }</h1>
            <input type="text" value={title} onChange={handleChange}></input>
            <br/><br/>
            <button onClick={ clickHandler } >Change State</button>
        </div>
    )
}

import React from "react";


export default function SweetAlert1(){

     const jsAlert = () => {
        alert("Hello JS")
     }

     const sweetAlert = () => {
        window.Swal.fire("Good Job!" , 'you clicked the button!', 'success')
     }


    return (
        <>
        <div>SweetAlert  1</div> 
        <button onClick={jsAlert}>JS Alert</button>
        <button onClick={sweetAlert}>Sweet Alert</button>
        </>
            

    )
}
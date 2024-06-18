import React,{useState} from "react";

export default function Form2(){

    const [user , setUser] = useState({fName : "Sachin" , lName : "Tendulkar"})

    return(
        <>
         <h2>Form Data in an Object</h2>
         <form className="ms-4">
        <p>
            First Name :
            <input  value = { user.fName }  onChange= { (e) => { setUser({ ...user , fName : e.target.value }) }} style={{width:150}} />
        </p>

        <p>
            Last Name : 
            <input value = { user.lName }  onChange= { (e) => { setUser({ ...user , lName : e.target.value }) }} style={{width:150}} />
        </p>
          
          <button>Submit</button>

          </form>
        </>
    )
}

//! Note : 

//? here spread operator is used (...user ) to update only the specified field (fname or lname) in the "user" object while keeping the other field's unchanged.
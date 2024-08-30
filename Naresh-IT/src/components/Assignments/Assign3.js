// //! 3 Create a list of items and dispaly using array.map() , render a list of items from an array

import { useReducer } from "react"

import React from "react";


export default function Assign3(){

    let array = ["sun","mon","tue","wed","thu","fri","sat"];

    return (
        <>
        <ul>
        
                {array.map((day,id) => {
                    return <li key={id}>{day}</li>
                })}
    
        </ul>
        </>
    )
}


// Create a list of items and dispaly using array.map() , render a list of items from an array 

// import React from "react";

// export default function Assign3(){


//     let array = ["sun","mon","tue","wed","thu","fri","sat"];

//     return (

    
        
//         <>

//         <ul>
 


//                 {array.map((day,id) => {


    
//                     return <li key={id}>{day}</li>

//                     })}
    
//         </ul>    

//         </>  

//     )    


// }











    













































 


import React from 'react'
import { NestComp } from './NestComp'
// function Greet(){
//     return <h1>Hello Chaitanya</h1>
// }

//  export const Greet = (props) => {
// //   console.log(props);
//  return  <div> 
//     <h1>Hello {props.name} {props.heroname} 
//     </h1>;
//     {props.children}
//     </div>
//  }

// export default Greet;
//! function with default keyword

// export default function Greet(){
//    return (
//       <div>
//                <p>This is default function</p>
//                <NestComp />
//       </div>
//    )
// }

// JSX with curly braces

// export default function TodoList() {
//    const name = 'Chaitanya';
//    return (
//      <h1>{name}'s To Do List</h1>
//    );
//  }
 
// rendering functions JS in JSX 

// function greeting(gr){
// return gr
// }

// export default function GreetingTo(){
// return (
//    <h1>To Do List for  { greeting("Me")} </h1>
// )
// }

//! double curly braces to render objects js in jsx

// export default function ObjJsInJsx(){

//    const person = {
//       name : "Chaitanya",
//       age : 27
//    }
//       return (
//          <h2> Name : { person.name }, Age : {person.age} </h2>
//       )
// }
//! 2) example of Objects JS rendering in JSX

// export default function TodoList() {
//    return (
//      <ul style={{
//        backgroundColor: 'black',
//        color: 'pink'
//      }}>
//        <li>Improve the videophone</li>
//        <li>Prepare aeronautics lectures</li>
//        <li>Work on the alcohol-fuelled engine</li>
//      </ul>
//    );
//  }

//? 3) 

// const person = {
//    name : "John Doe",
//    theme : {
//       backgroundColor: 'black',
//     color: 'pink'
//    }
// }

// export default function ToDoList(){
//    return (
//    <div style={ person.theme} >
//      <h1 > {person.name} is hollywood actor </h1>
//    </div>
//    )
// }
 
//? props 

// export default function Greet({ name , email , size = 30}){
//    return (
//       <div>
//   <h2>Hello {name} </h2>
//   <h3>{email}</h3>
//   <h4>{size}</h4>
//   </div>
//    )
// }

//? props using spread


// export default function Greet(props){
    
//     return(
//         <div>
//       <h1>props practice</h1> {...props} 
//         </div>
    
//     )
// }

// export default  function Greet(props){
//   return (
//     <div>
// <h1>{props.name}</h1>
//  {props.children}                   { /*//! we can get children props */ }
// {/* <h2>{props.email}</h2> */}
// {/* <h3>{props.size}</h3> */}
    // </div>


//   )
// }

//! normal function calling

// export default function Greet(props) {
//   function getData() {
//     alert("Hello React!")
//   }

//   return (
//     <div>
//       <h1>Calling Function</h1>
//       <button onClick={getData}>Click me</button>
//     </div>
//   );
// }

export default function Greet(props){
  return (
  <div>
    <h1>Pass function as Props</h1>
    <button onClick={props.Data}>Click me</button>
  </div>
  )
}
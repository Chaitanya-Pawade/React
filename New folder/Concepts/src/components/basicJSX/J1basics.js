import React, { useState } from "react";

//? single element
// const name = "Rohit";
// const element = <div> Say Hello to {name} </div>;

//? array of element
// let elementArray = [];
// for (let i = 0; i < 10; i++) {
//   elementArray.push(<div> Say Hello to {name} </div>);
// }

// Element for style attribute.
// let styleH1 = {
//   color: "yellow",
// };

//?   Conditional Rendering
// const messages = ["React", "Re: React", "Re:Re: React"];
// const mailbox = (
//   <div>
//     <h1>Hello!</h1>
//     {messages.length > 0 && (
//       <h2>You have {messages.length} unread messages.</h2>
//     )}
//   </div>
// );

// ? 11. Ternary Operator (Conditional Rendering)

// const isLoggedIn = true;
// const userGreeting = <h1>Welcome back!</h1>;
// const guestGreeting = <h1>Please sign up.</h1>;
// const greeting = isLoggedIn ? userGreeting : guestGreeting;

// ?  12. Attributes with JSX
// const props = {firstName: 'Ben', lastName: 'Hector'};
// const greeting = <Greeting {...props} />;
// By writing above code you get below output
// const greeting = <Greeting firstName= "Ben" lastName="Hector" />;

// ?  13 using map
const todos = ["Finish homework", "Clean room", "Write blog"];
const todoList = (
  <ul>
    {todos.map((val) => (
      <li> {val} </li>
    ))}
  </ul>
);

// * ------------------------------------------------------------------------------------- *

// ! Using Loops in JSX

// ? 14 'for' Loops and JSX:

// - Unlike array `map()` function, traditional `for` loops are not directly used within JSX because JSX is a declarative syntax and must return a single element.

// - If you need to use a `for` loop to generate JSX content, you should do the computation outside the return statement or JSX block.

// let items = [];
// for (let i = 0; i < 5; i++) {
//   items.push(<li key={i}>Item {i}</li>);
// }

//? 15

// const name = "React"; // Variable
// const greeting = <h1>Hello, {name}</h1>; // JSX using a variable

// function App() {
//   return (
//     <div>
//       {greeting} // Embedding JSX variable
//       <p>{"This is a string inside curly braces"}</p> // Embedding string
//       <p>This is also a string, but directly inside a paragraph tag.</p>
//     </div>
//   );
// }

// ? 16 Conditional Rendering:

// function MyComponent({ shouldShow }) {
//   return (
//     <div>
//       {shouldShow && <p>Only shown if `shouldShow` is true</p>}
//       {!shouldShow && null}
//     </div>
//   );
// }

//?  17 Attributes and Props:

// - Dynamic Class Names: You can dynamically set class names based on conditions or computations.

// - Example:

// function Button({ isActive }) {
//   const className = isActive ? "active" : "inactive";
//   return <button className={className}>Click me!</button>;
// }

//  ? Event Handling:

// function Counter1() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Increment: {count}</button>;
// }

// ? Fragments:

// ParentTable(){
//   return(
//     <table>
//       <ChildTable/>
//     </table>
//   )
// }

// - Example:
//     function ChildTable() {
//        return (
//          <>
//            <tr>Row 1</tr>
//            <tr>Row 2</tr>
//          </>
//        );
//      }

// ! JavaScript Expressions as Props:

// const user = { imageUrl: "url-to-image", name: "React User" };
// function Profile(props) {
//   return <img src={props.user.imageUrl} alt={props.user.name} />;
// }

//  function App() {
//    return <Profile user={user}"} />;
//  }
function J1basics() {
  return (
    <>
      {/* <h2>J1basics</h2> */}
      {/* <h2> {element} </h2> */}
      {/* {elementArray} */}
      {/* Attribute with dynamic style */}
      {/* <h1 style={{ color: "yellow" }}> This is dynamic styled H1 </h1>
      // <h1 style={styleH1}> This is dynamic styled H1 </h1> */}
      {/* Nested element */}
      {/* <div>
        <h1>Welcome!</h1>
        <input />
        <h2>Good to see you here, {name}.</h2>
      </div> */}
      {/* {mailbox} */}
      {/* <Profile></Profile> */}
      {/* <Counter1></Counter1> */}
      {/* <ul> {items} </ul> */}
      {/* <Button></Button> */}
      <div>{todoList}</div>
    </>
  );
}

export default J1basics;

import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [A, setA] = useState(10);
  const [B, setB] = useState(20);
  const [C, setC] = useState(30);

//   useEffect(() => {
//     console.log("Use Effect Called...");

//   });

  //? effect will runs everytime when there is a state change

  useEffect(() => {
    console.log("Use Effect Called...");      // mounting / updating

    return (
        console.log("Component will unmount")   // unmounting
    )
  }, []);

  //? effect will runs only once (on component load)

//   useEffect(() => {
//     console.log("Use Effect Called...");
//   }, [A, C]);

  //? efect will runs only on ( when A & C changes or updates) means effect will runs only on the basis of whatever the dependency is given in that array.

  return (
    <>
      <div>LifeCycle Hook - useEffect</div>
      <br></br>

      <p>A = {A}</p>
      <p>B = {B}</p>
      <p>C = {C}</p>

      <button onClick={() => setA(20)}>Update A</button>
      <button onClick={() => setB(40)} className="m-1">
        Update B
      </button>
      <button onClick={() => setC(60)}>Update C</button>
    </>
  );
}


// import React, { useEffect, useState } from "react";

// export default function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted");

//     return () => {
//       console.log("Component will unmount");
//     };
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// }

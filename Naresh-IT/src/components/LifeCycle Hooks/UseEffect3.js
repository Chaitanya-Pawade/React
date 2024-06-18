import React , {useState , useEffect} from "react";


export default function UseEffect3(){

    const [widthCount,setWidthCount] = useState(window.screen.width);
    
const handleResize = () => {
  console.log(window.innerWidth);
    setWidthCount(window.innerWidth)
}

    useEffect(() => {
     console.log("add event");
      window.addEventListener("resize" , handleResize);

      return () => {
        console.log("remove event");
        window.removeEventListener("resize" , handleResize)
      }
    })


    return (
        <>
        <h2>UseEffect with CleanUp function</h2>
        <h3>{widthCount}</h3>
        </>
    )
}

// import React, { useState, useEffect } from "react";

// export default function UseEffect3() {
//   const [widthCount, setWidthCount] = useState(window.innerWidth);
  
//   const handleResize = () => {
//     console.log("Resize event detected");
//     setWidthCount(window.innerWidth);
//   };

//   useEffect(() => {
//     console.log("Adding resize event listener");
//     window.addEventListener("resize", handleResize);

//     return () => {
//       console.log("Removing resize event listener");
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   console.log("Component re-rendered with widthCount:", widthCount);

//   return (
//     <>
//       <h2>UseEffect with CleanUp function</h2>
//       <h3>{widthCount}</h3>
//     </>
//   );
// }

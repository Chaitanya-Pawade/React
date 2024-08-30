//! Create a theme (Dark/Light) with Context API
//! implement a context for theme management
//! Use useContext hook to consume the theme context in components

import React, { createContext, useState } from "react";
import ChildA from "./ChildA";
import "./Style.css";

const theme = createContext(null);
// const theme2 = createContext();

export default function Assign8() {
  const [theme1, setTheme1] = useState("light");
  const handleTheme = () => {
    setTheme1((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };
  // const dark = "This is dark theme";
  // const light = "This is light theme";
  return (
    <>
      <theme.Provider value={{ theme1, handleTheme }}>
        {/* <theme2.Provider value={light}> */}
        <ChildA />
        {/* </theme2.Provider> */}
      </theme.Provider>
    </>
  );
}

export { theme };

// const context = createContext(null);

// export default function Assign8(){
  
// const [logged , setLogged] = useState("");

// const handleClick = () => {
// setLogged((prevState) => prevState === "" ? "Logged out" : "Logged in")

// }

//     return(
//         <>
//         <context.Provider value={{logged , handleClick}}>
//          <ChildA/>
//         </context.Provider>
//         </>
//     )
// }

// export { context };
import React, { useContext } from "react";
import { theme, handleTheme } from "./Assign8";

export default function ChildB() {
  const themeA = useContext(theme);
  //   const themeB = useContext(theme2);
  return (
    <>
      <div className={themeA.theme1 === "light" ? "light-theme" : "dark-theme"}>
        <h2>theme : {themeA.theme1}</h2>
        {/* <h2>another theme : {themeB}</h2> */}

        <button onClick={themeA.handleTheme}>Change Theme</button>
      </div>
    </>
  );
}

// import { context , handleClick } from "./Assign8";

// export default function ChildB(){

// const context1 = useContext(context);

// return(
//     <>
//     <h2>User Status : {context1.logged}</h2>
//     <button onClick={context1.handleClick}>Check Status</button>
//     </>
// )

// }
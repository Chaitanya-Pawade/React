// Import the necessary React library and the useState hook
import "./App.css";
import React, { useState } from "react";
import Jsxbasic from "./basicJSX/Jsxbasic.jsx";
import DefaultApp from "./basicJSX/DefaultApp.js";
import Counter from "./components/basic-components/Counter.js";
import J1basics from "./basicJSX/J1basics.js";
import CSSStylesheetComponent from "./components/basic-components/CSSStylesheetComponent.js";
import InlineStylingComponent from "./components/basic-components/InlineStylingComponent.js";
import CSSModulesComponent from "./components/basic-components/CSSModulesComponent.js";
import Assign1 from "/src/Assignments/Assign1.js";
// Define a functional component called App
function App() {

  
  // Render the component using JSX
  return (
    <div>
      <div className="App">
        <header className="App-header">
        {/* First Default React component */}
        {/* <DefaultApp/> */}

        {/* Counter using useState */}
        {/* <Counter/> */}
        
        {/* JSX first file */}

       
        <J1basics name = "Chaitanya"/>

        {/* JSX */}
        {/* <Jsxbasic/> */}
          
            {/* css style */}
            
           {/* <CSSStylesheetComponent /> */}
           {/* <InlineStylingComponent /> */}
           {/* <CSSModulesComponent /> */}

           {/* <Assign1 /> */}
        </header>
      </div>
    </div>
  );
}

// Export the App component to be used in other parts of the application
export default App;

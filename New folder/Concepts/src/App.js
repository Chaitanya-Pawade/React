import "./App.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CSSModulesComponent from "./components/css-style/CSSModulesComponent.js";

import ConditionalUseEffect from "./components/all-hooks/useEffect/ConditionalUseEffect.js";

// import DefaultApp from "./basicJSX/DefaultApp";
// import J1basics from "./basicJSX/J1basics";
import Counter from "./components/basic-components/Counter.js";

// import Events from "./components/basic-components/Events.js";
// import Book from "./components/class-components/Book.js";

// import ColorCylce from "./components/class-components/ColorCycle.js";
import Jsxbasic from "./components/basicJSX/Jsxbasic.jsx";
import SimpleReducer from "./components/all-hooks/useReducer/SimpleReducer.js";
import ComplexReducer from "./components/all-hooks/useReducer/ComplexReducer.js";
import MultiReducer from "./components/all-hooks/useReducer/MultiReducer.js";
import ContextApp from "./components/all-hooks/UseContext/ContextApp.js";
import Simple from "./components/all-hooks/ReducerFetch/Simple.js";
import Complex1 from "./components/all-hooks/ReducerFetch/Complex1.js";
import Optimize from "./components/all-hooks/Optimization/Optimize.js";
import CounterDelay from "./components/all-hooks/UseMemo/CounterDelay.js";
import SimpleCallback from "./components/all-hooks/UseCallback/SimpleCallback.js";
import CustomCounter from "./components/all-hooks/CustomHook/CustomCounter.js";

import Cr from "./components/basicJSX/Cr.js";
import Todo from "./components/all-hooks/useReducer/Todo.js";
import App1 from "./Zcomponents/UseEffect/cleanUP/App1.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App">
        <h1>Shubham Sir Files</h1>
        <h2>Basic</h2>

        {/* <Counter></Counter> */}

        {/* <Events></Events> */}
        {/* <Cr></Cr> */}

        <h2>basicJSX</h2>

        {/* <J1basics></J1basics> */}

        {/* <DefaultApp></DefaultApp> */}

        {/* <Jsxbasic></Jsxbasic> */}

        <h2>class-component</h2>
        {/* <Book></Book> */}

        {/* library  error */}

        {/* my class component  error*/}

        <h2>CSS-style</h2>
        {/* <CSSModulesComponent></CSSModulesComponent> */}

        <h2>All-hooks</h2>

        <h3>useState </h3>
        {/* not completed*/}

        <h3>useEffect </h3>

        {/* <CWDUseeffect></CWDUseeffect> */}
        {/* <ConditionalUseEffect></ConditionalUseEffect> */}
        {/* <F1></F1> */}
          {/* <App1/> */}
        <h3>useReducer</h3>
        {/* <SimpleReducer></SimpleReducer> */}

        {/* <ComplexReducer></ComplexReducer> */}

        {/* <MultiReducer></MultiReducer> */}
        {/* <Todo></Todo> */}

        <h3>use Context</h3>
        {/* <ContextApp></ContextApp> */}

        <h3>reducer fetch</h3>
        {/* <Simple></Simple> */}
        {/* <Complex1></Complex1> */}

        <h3>optimization</h3>
        {/* <Optimize></Optimize> */}

        <h3>useMemo</h3>
        {/* <CounterDelay></CounterDelay> */}

        <h3>use callback</h3>
        {/* <SimpleCallback></SimpleCallback> */}

        <h3>Custom Hook</h3>
        {/* <CustomCounter></CustomCounter> */}
      </div>
    </div>
  );
}

export default App;

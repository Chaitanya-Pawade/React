import "./App.css";
import PassData from "./Zcomponents/UseContext/PassData";
import UpdateData from "./Zcomponents/UseContext/UpdateData";
import UpdateObj from "./Zcomponents/UseContext/UpdateObj";
import CleanUp from "./Zcomponents/UseEffect/CleanUp";

import MultiContext from "./Zcomponents/UseContext/MultiContext";
import CtoP from "./Zcomponents/PropDrilling/PtoC";
import PtoC from "./Zcomponents/PropDrilling/PtoC";
import Child2P from "./Zcomponents/LiftUP/Child2P";
import ContactApp from "./Zcomponents/StateMgt/ContactApp/ContactApp";

import Example1 from "./Zcomponents/UseCallback/Example1";
import E1Memo from "./Zcomponents/UseMemo/E1Memo";
import StopWatch from "./Zcomponents/UseRef/StopWatch";
import E1Ref from "./Zcomponents/UseRef/E1Ref";
import VedioPlay from "./Zcomponents/UseRef/VedioPlay";

import Calculator from "./Zcomponents/UseEffect/Calculator";
import Timer from "./Zcomponents/UseEffect/Timer";
import Timer1 from "./Zcomponents/UseEffect/Timer1";
import Pizza from "./Zcomponents/PropDrilling/Pizza";
import Arr from "./Zcomponents/UseState/Arr";
import Obj from "./Zcomponents/UseState/Obj";
import Step from "./Zcomponents/UseState/Step";
import F1 from "./Zcomponents/UseEffect/F1";
import UseReducer from "./Zcomponents/ZCounter/UseReducer";
import UseState from "./Zcomponents/ZCounter/UseState";
import UseEffect from "./Zcomponents/ZCounter/UseEffect";
import UseStateTodo from "./Zcomponents/ZTodoApp/UseStateTodo";
import UseRedTodo from "./Zcomponents/ZTodoApp/UseRedTodo";
import Form1 from "./Zcomponents/Form/Form1";
import UseRef from "./Zcomponents/Form/UseRef";
import App1 from "./Zcomponents/UseEffect/cleanUP/App1";
// import Fetch from "./Zcomponents/UseEffect/Fetch";
import F2 from "./Zcomponents/UseEffect/F2";

function AmolApp() {
  return (
    <>
      <div className="App">
        <h1> AMOL app</h1>

        <h2>Basics</h2>
        {/* <Pizza></Pizza> */}

        <h2>UseState</h2>
        {/* <Arr></Arr> */}
        {/* <Obj></Obj> */}
        {/* <Step></Step> */}
        {/* <Form></Form> */}
        {/* <Fetch></Fetch> */}

        <h2>UseEffect</h2>
        {/* <CleanUp></CleanUp> */}
        {/* <Calculator></Calculator> */}
        <Timer></Timer>
        {/* <Timer1></Timer1> */}
        {/* <F1></F1> */}
        {/* <App1></App1> */}
        {/* <F2></F2> */}

        <h2>UseReducer</h2>
        {/* <Counter1></Counter1> */}

        <h2>Prop Drilling</h2>
        {/* <PtoC></PtoC> */}

        <h2>Lift Up</h2>
        {/* <Child2P></Child2P> */}

        <h2>Use Context</h2>
        {/* <PassData></PassData> */}
        {/* <UpdateData></UpdateData> */}
        {/* <UpdateObj></UpdateObj> */}
        {/* <MultiContext></MultiContext> */}

        <h2>state management</h2>
        {/* <ContactApp></ContactApp> */}

        <h2>use callback</h2>
        {/* <Example1></Example1> */}

        <h2>use Memo</h2>
        {/* <E1Memo></E1Memo> */}

        <h2>use Ref</h2>
        {/* <E1Ref></E1Ref> */}
        {/* <StopWatch></StopWatch> */}
        {/* <VedioPlay></VedioPlay> */}

        <h2>Counters </h2>
        {/* <UseReducer></UseReducer> */}
        {/* <UseState></UseState> */}
        {/* <UseEffect></UseEffect> */}

        <h2>Todo</h2>
        {/* <UseStateTodo></UseStateTodo> */}
        {/* <UseRedTodo></UseRedTodo> */}

        <h2>Form</h2>
        {/* <Form1></Form1> */}
        {/* <UseRef></UseRef> */}
      </div>
    </>
  );
}

export default AmolApp;

//! Asynchronous State

//! Ex-1
//  import React ,{Component} from "react"

// export default class State2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//         Counter : 0,
//     };
//   }

//   increment = () => {
//     //? to update the state call setState
// let newState = {Counter: this.state.Counter+1};
// this.setState(newState, () => {
//         console.log('Value updated : ' , this.state.Counter)
// });  // aynchronous

//   //? if u want to execute some line of code only after the state is updated then pass second argument to setState method which is a callback function

//     this.setState((prevState) => ({
//         Counter : prevState.Counter + 1
//     }))

//     //? when we want to update state based on the previous state ,
//     //? we need to pass a function as an argument to setState () instead of passing an object
//   }
//      inccrementCounterFiveTimes = () => {
//         this.increment();
//         this.increment();
//         this.increment();
//         this.increment();
//         this.increment();
//      }

//      increment() {
//         this.setState({Counter : this.state.Counter + 1});
//         console.log(this.state.Counter);
//      }

//      render() {
//         return (

//             <>
//             <div>Count is : {this.state.Counter}</div>
//             <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.inccrementCounterFiveTimes}>Increment Five Times</button>
//             </>
//         )
//      }

// }

//! Ex-2

// import React ,{Component} from "react"

// class State2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }

//   incrementCounter = () => {
//? Increment the counter using setState
//     this.setState({ counter: this.state.counter + 1 }, () => {
//? Callback function executed after setState
//       console.log('Counter after increment:', this.state.counter);
//     });
//? Log the current counter value immediately after calling setState
//     console.log('Current counter value:', this.state.counter);
//   };

//   render() {
//     return (
//       <div>
//         <p>Counter: {this.state.counter}</p>
//         <button onClick={this.incrementCounter}>Increment</button>
//       </div>
//     );
//   }
// }

// export default State2;

//! Functional Component

// import React, { useState }  from "react"

// export default function State2(){

// const[count , setCount] = useState(0);

// const increment = () => {
//      setCount((prevStateCount => prevStateCount + 1), //? this ll update state based on the previous state.
//     //setCount(count + 1)  //? state updatation is asynchronous (setState works asynchronously)
//    // console.log(count)  //? this will execute before the state updated.
// )}

//   const incrementBy5 = () => {
//     increment();
//     increment();
//     increment();
//     increment();
//     increment();
//   }
//     return (
//        <>
//        <h2>Counter : {count} </h2>
//        <button onClick={incrementBy5}>Increment by 5</button>
//        </>
//     )
// }

//! Note
//? If a piece of code needs to be executed after the state is updated then place that code in the 'useEffect()'


//! example of addition using useState

import React, { useState } from "react";

export default function State2() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  // const changeHandler = (e) => {
  //   if (e.target.name === "num1") {
  //     setNum1(Number(e.target.value));
  //   } else {
  //     setNum2(Number(e.target.value));
  //   }
  // };

  const changeHandler1 = (e) => {
    setNum1(e.target.value);
  }
  const changeHandler2 = (e) => {
    setNum2(e.target.value);
  }

  const additionFun = () => {
    return setSum(  + num1 + + num2);
  };
  return (
    <>
      <h2>Addition of Two Numbers</h2>
      <input
        onChange={changeHandler1}
        style={{ width: 150 }}
        placeholder="Enter num1"
        name="num1"
      />
      <br></br>
      <input
        onChange={changeHandler2}
        style={{ width: 150, margin: 10 }}
        placeholder="Enter num2"
        name="num2"
      />
      <br></br>
      <button className="m-2" onClick={additionFun}>
        Add
      </button>

      <p>Addition is : {sum}</p>
    </>
  );
}

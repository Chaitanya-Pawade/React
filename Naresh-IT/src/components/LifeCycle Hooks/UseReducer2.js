// //@ts-nocheck

// import React, { useReducer } from "react";

// const initialState = { name: "Chaitanya", age: 27 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Update_Name":
//       return { ...state, name: "Amol" };
//     case "Update_Age":
//       return { ...state, age: 100 };

//     default:
//       return state;
//   }
// };

// export default function UseReducer2() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <h3>
//         In this example, the reducer manages a state object with two fields:
//         name and age.
//       </h3>
//       <br />
//       <h3>
//         {" "}
//         My name is : {state.name} and age is : {state.age}
//       </h3>
//       <br />

//       <div className="btnStylePosition">
//         <button onClick={() => dispatch({ type: "Update_Name" })}>
//           Update name
//         </button>
//         <br />
//         <br />
//         <button onClick={() => dispatch({ type: "Update_Age" })}>
//           Update age
//         </button>
//       </div>
//     </>
//   );
// }



import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
        console.log(state.name);
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function UseReducer2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
  }

  return (
    <>
      <input
        value={state.name}
        onChange={(e)=>dispatch()}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}

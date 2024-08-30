import { useState } from "react";

export default function Fifth() {
  const [inputs, setInputs] = useState({});

  const getInputValues = (e) => {
    //    console.log(e.target.value);

    let { name, value } = e.target;
    console.log(name, ":", value);
    let input = { [name]: value };
    //    console.log(input);
    setInputs({...inputs, ...input});
  };
  console.log(inputs);
  return (
    <>
      <h2>Dynamic inputs in react</h2>
      <br />
      <input placeholder="name" name="name" onChange={getInputValues}></input>
      <br />
      <br />
      <input placeholder="age" name="age" onChange={getInputValues}></input>
      <br />
      <br />
      <input placeholder="Email" name="email" onChange={getInputValues}></input>
      <br />
      <br />
    </>
  );
}

//! Note

//? In this example, the property name of the object is dynamic and is determined by the value of the variable name. If name holds the string "age", then the object will have a property called "age" with the corresponding value.

// let name = "age";
// let value = 30;
// let input = {[name]: value};
// console.log(input); // { age: 30 }

//? In this example, the property name of the object is static and is literally "name". It does not depend on the value of any variable.

// let name = "age";
// let value = 30;
// let input = {name: value};
// console.log(input); // { name: 30 }

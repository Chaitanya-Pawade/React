// //! 6) Create a controlled input element
// //!   Manage form inputs with state
// //!   Display a list of inputs on screen like a simple list
// //!   Add input values to the list on onClick and display it.

import React, { useState } from "react";

function InputList() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (e) => {
    setFname(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setLname(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setEmail(e.target.value);
  };

  const handleInputChange4 = (e) => {
    setMobNo(e.target.value);
  };

  const handleAddInput = () => {
    // const newInput = [ fname, lname, email, mobNo ]
    setInputList([...inputList, fname, lname, email, mobNo]);
    setFname("");
    setLname("");
    setEmail("");
    setMobNo("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={fname}
          onChange={handleInputChange}
          style={{ width: 200 }}
          placeholder="Enter fname"
        />
        <br />
        <br></br>
        <input
          type="text"
          value={lname}
          onChange={handleInputChange2}
          style={{ width: 200 }}
          placeholder="Enter lname"
        />
        <br />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={handleInputChange3}
          style={{ width: 200 }}
          placeholder="Enter email"
        />
        <br />
        <br />
        <br />
        <input
          type="number"
          value={mobNo}
          onChange={handleInputChange4}
          style={{ width: 200 }}
          placeholder="Enter mob no"
        />
        <br />
        <br />
        <br />
        <button onClick={handleAddInput}>Submit</button>
        <ul>
          <h3>Input List</h3>
          {inputList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default InputList;

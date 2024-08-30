import React, { useState } from "react";

export default function Form1() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const changeHandler1 = (e) => {
    setFName(e.target.value);
  };

  const changeHandler2 = (e) => {
    setLName(e.target.value);
  };

  const submitMyform = (e) => {
    e.preventDefault(); // it prevents to refresh page , page refresh will not happen
    console.log(fname, lname);
  };

  return (
    <>
      <h2>Form demo-1</h2>
      <form onSubmit={submitMyform}>
        <p>
          First Name :
          <input onChange={changeHandler1} style={{ width: 170 }} />
        </p>

        <p>
          Last Name :
          <input onChange={changeHandler2} style={{ width: 170 }} />
        </p>
        <input type="submit" style={{ width: 160 }}></input>
        <input type="reset" style={{ width: 160 }} className="m-2"></input>

        {/* <button>Submit</button> */}
      </form>
    </>
  );
}

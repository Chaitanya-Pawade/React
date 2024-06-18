//? Form validation

import React, { useState } from "react";

export default function Form3() {
  const [fname, setFname] = useState("Sachin");
  const [lname, setLname] = useState("Tendulkar");
  const [fnameErrorMsg, setFnameErrorMsg] = useState("");
  const [lnameErrorMsg, setLnameErrorMsg] = useState("");
  const [hasError , setHasError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(fname + " " + lname);
  };
  const changeHandler = (e) => {
    const inputField = e.target.name;
    if (inputField === "fname") {
      setFname(e.target.value);
      
      if (!e.target.value) {
        setFnameErrorMsg("fname should not be empty");
        setHasError(true);
      } else if (e.target.value.length < 5) {
        setFnameErrorMsg("fname shoub be atleast 5 chars");
        setHasError(true);
      } else {
        setFnameErrorMsg("");
        setHasError(false);
      }
    } else if (inputField === "lname") {
      setLname(e.target.value);
      if (!e.target.value) {
        setLnameErrorMsg("lname should not be empty");
      } else if (e.target.value.length < 5) {
        setLnameErrorMsg("lname shoub be atleast 5 chars");
      } else {
        setLnameErrorMsg("");
      }
    }
  };
  return (
    <>
      <h3>Form Validation</h3>
      <form>
        <p>
          First Name :
          <input
            name="fname"
            value={fname}
            onChange={changeHandler}
            style={{ width: 150 }}
          />
          <span className="text-danger">{fnameErrorMsg}</span>
        </p>
        <p>
          Last Name :
          <input
            name="lname"
            value={lname}
            onChange={changeHandler}
            style={{ width: 150 }}
          />
          <span className="text-danger">{lnameErrorMsg}</span>
        </p>
        <button disabled={hasError} onClick={submitHandler}>Submit</button>
      </form>
    </>
  );
}
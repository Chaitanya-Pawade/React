import React, { useState } from "react";

export default function FormValidation() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
 const [age , setAge] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) errors.name = "name is required";
    else if (name.length < 2 || name.length > 10)
      errors.name = "name must be min 5 and max 10 characters";

    if (!email) errors.email = "email is required";

    if(!phoneNumber) errors.phoneNumber = "phone number is required";
    else if(phoneNumber.length !== 10) errors.phoneNumber = "phone number must be 10 digits"

      if(!age) errors.age = "age is required";
      else if(age < 18) errors.age = "age must be greater than 18";
    return errors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert(`form submitted by ${name} `);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAge("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          {errors.age && <span>{errors.age}</span>}
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}


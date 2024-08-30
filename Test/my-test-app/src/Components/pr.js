


import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

function FormSubmission() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    dob: "", // New state for date of birth
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState(null); // New state for age
  const [submissions, setSubmissions] = useState([]);
  const [editIndex, setEditIndex] = useState(null)
  //! For Latest Submission showed
  const latestSubmissionRef = useRef(null);

  function changeHandler(e) {
    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname" || name === "dob") {
      setInput((prev) => ({ ...prev, [name]: value }));
      if (name === "dob") {
        calculateAge(value); // Calculate age when date of birth changes
      }
    }

    if (name === "phonenumber") {
      setInput((prev) => ({ ...prev, [name]: value.replace(/[^0-9]/g, "") }));
    }

    if (name === "email") {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      setErrors((prev) => ({
        ...prev,
        dob: "Date of birth cannot be in the future",
      }));
      setAge(null);
      return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setErrors((prev) => ({ ...prev, dob: null }));
    setAge(age);
  }

  // function calculateAge(dob) {
  //   const birthDate = new Date(dob);
  //   const today = new Date();
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const monthDifference = today.getMonth() - birthDate.getMonth();

  //   if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }

  //   setAge(age);
  // }

  function onChangeSubmit(e) {
    e.preventDefault();
    const formErrors = {};

    // Validate all fields
    if (!input.firstname) formErrors.firstname = "First name is required";
    if (!input.lastname) formErrors.lastname = "Last name is required";
    if (!input.phonenumber) formErrors.phonenumber = "Phone number is required";
    else if (input.phonenumber.length !== 10)
      formErrors.phonenumber = "Phone number must be 10 digits long";
    if (!input.email) formErrors.email = "Email is required";
    if (!validateEmail(input.email)) formErrors.email = "Invalid email address";
    if (!input.dob) formErrors.dob = "Date of birth is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert("All fields must be filled correctly before submitting the form.");
    } else {
      setErrors({});
      //setSubmittedData({ ...input, age });
      //! Code for Edit Data

      const newSubmission = {...input, age}

      if(editIndex != null)
        {
          const updatedSubmissions = [...submissions]
          updatedSubmissions[editIndex] = newSubmission;
          setSubmissions(updatedSubmissions);
          setEditIndex(null)
        }
        else
        {
          setSubmissions([...submissions, newSubmission]);
        }

        setSubmittedData(newSubmission);
        setInput({
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          dob: ""
        })
        setAge(null);
    }
  }

  //! HandleEdit
  function handleEdit(index){
    const entry = submissions[index];
    setInput({
      firstname: entry.firstname,
      lastname: entry.lastname,
      phonenumber: entry.phonenumber,
      email: entry.email,
      dob: entry.dob

    })
    setAge(entry.age);
    setEditIndex(index);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }

  //!Delete
  function handleDelete(index){
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
    if(editIndex === index)
      {
        setEditIndex(null);
        setInput({
          firstname: "",
          lastname: "",
          phonenumber: "",
          email:"",
          dob: ""
        });
        setAge(null)
      }
  }

  useEffect(()=>{
    if(latestSubmissionRef.current)
      {
        latestSubmissionRef.current.scrollIntoView({behavior:"smooth"});
      }
  },[submissions])

  return (
    <div className="container mt-5">
      <form onSubmit={onChangeSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            value={input.firstname}
            onChange={changeHandler}
          />
          {errors.firstname && (
            <div className="text-danger">{errors.firstname}</div>
          )}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            value={input.lastname}
            onChange={changeHandler}
          />
          {errors.lastname && (
            <div className="text-danger">{errors.lastname}</div>
          )}
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenumber"
            className="form-control"
            value={input.phonenumber}
            onChange={changeHandler}
          />
          {errors.phonenumber && (
            <div className="text-danger">{errors.phonenumber}</div>
          )}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={input.email}
            onChange={changeHandler}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={input.dob}
            onChange={changeHandler}
          />
          {errors.dob && <div className="text-danger">{errors.dob}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
      {/* {submittedData && (
        <div className="mt-5">
          <h3>Submitted Data</h3>
          <p>First Name: {submittedData.firstname}</p>
          <p>Last Name: {submittedData.lastname}</p>
          <p>Phone Number: {submittedData.phonenumber}</p>
          <p>Email: {submittedData.email}</p>
          <p>Date of Birth: {submittedData.dob}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )} */}
      
     <div className="mt-5">
      <h3>All Submissions</h3>
      {submissions.map((submission, index) => (
        <div key={index} className="mb-3" ref={index === submissions.length - 1 ? latestSubmissionRef : null}>
          <p> First Name: {submission.firstname}</p>
          <p> Last Name: {submission.lastname}</p>
          <p>Phone Number: {submission.phonenumber}</p>
          <p>Email: {submission.email}</p>
          <p>Date of Birth:{submission.dob}</p>
          <p>Age: {submission.age}</p>
          <button className="btn btn-secondary" onClick={()=> handleEdit(index)} > Edit</button>
          <button className="btn btn-danger" onClick={()=> handleDelete(index)}>Delete</button>
        </div>
      ))

      }
     </div>

    </div>
  );
}

export default FormSubmission;

/*
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
function FormSubmission() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  function changeHandler(e) {
    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname") {
      setInput((prev) => ({ ...prev, [name]: value }));
    }

    if (name === "phonenumber") {
      setInput((prev) => ({ ...prev, [name]: value.replace(/[^0-9]/g, "") }));
    }

    if (name === "email") {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function onChangeSubmit(e) {
    e.preventDefault();
    const formErrors = {};

    // Validate all fields
    if (!input.firstname) formErrors.firstname = "First name is required";
    if (!input.lastname) formErrors.lastname = "Last name is required";
    if (!input.phonenumber) formErrors.phonenumber = "Phone number is required";
    if (!input.email) formErrors.email = "Email is required";
    else if (!validateEmail(input.email)) formErrors.email = "Invalid email address";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert("All fields must be filled correctly before submitting the form.");
    } else {
      setErrors({});
      setSubmittedData(input);
    }
  }

  return (
    <div className="container mt-5">
    <form onSubmit={onChangeSubmit}>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          className="form-control"
          value={input.firstname}
          onChange={changeHandler}
        />
        {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          className="form-control"
          value={input.lastname}
          onChange={changeHandler}
        />
        {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phonenumber"
          className="form-control"
          value={input.phonenumber}
          onChange={changeHandler}
        />
        {errors.phonenumber && <div className="text-danger">{errors.phonenumber}</div>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={input.email}
          onChange={changeHandler}
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    {submittedData && (
      <div className="mt-5">
        <h3>Submitted Data</h3>
        <p>First Name: {submittedData.firstname}</p>
        <p>Last Name: {submittedData.lastname}</p>
        <p>Phone Number: {submittedData.phonenumber}</p>
        <p>Email: {submittedData.email}</p>
      </div>
    )}
  </div>
  );
}

export default FormSubmission;
*/

//! Step2
// import React, { useState } from "react";

// function FormSubmission() {
//   const [input, setInput] = useState({
//     firstname: "",
//     lastname: "",
//     phonenumber: "",
//     email: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);
//   const [errors, setErrors] = useState({});

//   function changeHandler(e) {
//     const { name, value } = e.target;

//     if (name === "firstname" || name === "lastname") {
//       setInput((prev) => ({ ...prev, [name]: value }));
//       //setInput("")
//     }

//     if (name === "phonenumber") {
//       setInput((prev) => ({ ...prev, [name]: value.replace(/[^0-9]/g, "") }));
//       //setInput("")
//     }

//     if (name === "email") {
//       setInput((prev) => ({ ...prev, [name]: value }));
//       //setInput("")
//     }
//   }

//   function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   }

//   function onChangeSubmit(e) {
//     e.preventDefault();
//     const formErrors = {};

//     if (!validateEmail(input.email)) {
//       formErrors.email = "Invalid email address";
//     }

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       setSubmittedData(input);
//     }
//   }

//   return (
//     <div className="main-container">
//       <form onSubmit={onChangeSubmit}>
//         <div>
//           <label>
//             First Name:
//             <input
//               type="text"
//               name="firstname"
//               value={input.firstname}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           <br></br>
//           <label>
//             Last Name:
//             <input
//               type="text"
//               name="lastname"
//               value={input.lastname}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           <br></br>
//           <label>
//             {" "}
//             Phone Number:
//             <input
//               type="text"
//               name="phonenumber"
//               value={input.phonenumber}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           <br></br>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={input.email}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {submittedData && (
//         <div>
//           <h1>Submitted Data</h1>
//           <p>First Name: {submittedData.firstname}</p>
//           <p>Last Name: {submittedData.lastname}</p>
//           <p>Phone Number: {submittedData.phonenumber}</p>
//           <p>Email: {submittedData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FormSubmission;

//!Step1

// import React, { useState } from "react";

// function FormSubmission() {
//   const [input, setInput] = useState({
//     firstname: "",
//     lastname: "",
//     phonenumber: "",
//     email: "",
//   });

//   const [submittedData, setSubmittedData] = useState("");

//   function changeHandler(e) {
//     const { name, value } = e.target;
//     //setInput((prev) => ({ ...prev, [name]: value }));
//     if (name === "firstname") {
//       setInput((prev) => ({ ...prev, [name]: value }));
//     }

//     if (name === "lastname") {
//       setInput((prev) => ({ ...prev, [name]: value }));
//     }

//     if (name === "phonenumber") {
//       setInput((prev) => ({ ...prev, [name]: value.replace(/[^0-9]/g, "") }));
//     }

//     if(name === 'email')
//       {
//       setInput((prev) => ({ ...prev, [name]: value.replace( /^[^\s@]+@[^\s@]+\.[^\s@]+$/) }));

//       }
//   }

//   function onChangeSubmit(e) {
//     e.preventDefault();
//     setSubmittedData(input);
//   }
//   return (
//     <div className="main-container">
//       <form onSubmit={onChangeSubmit}>
//         <div>
//           <label>
//             First Name:
//             <input
//               type="text"
//               name="firstname"
//               value={input.firstname}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           <br></br>
//           <label>
//             Last Name:
//             <input
//               type="text"
//               name="lastname"
//               value={input.lastname}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           <br></br>
//           <label>
//             {" "}
//             Phone Number:
//             <input
//               type="text"
//               name="phonenumber"
//               value={input.phonenumber}
//               onChange={changeHandler}
//             ></input>
//           </label>
//           <br></br>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={input.email}
//               onChange={changeHandler}
//             ></input>
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {submittedData && (
//         <div>
//           <h1>Submitted Data</h1>
//           <p>First Name: {submittedData.firstname}</p>
//           <p>Last Name: {submittedData.lastname}</p>
//           <p>Phone Number: {submittedData.phonenumber}</p>
//           <p>Email: {submittedData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FormSubmission;
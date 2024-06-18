import React, { useState } from "react";

export default function RegistrationForm() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    Email: "",
    Gender: "",
    Address: "Near Bhujbal chowk wakad , pune",
    Pincode: 422342,
    State: "Maharashtra",
  });

  const SubmitForm = (e) => {
    e.preventDefault();
    alert(" Form Submitted Successfully");
    //  setUser({...user , fName:e.target.value})
  };
  return (
    <>
      <main>
        <form style={{ width: 370, height: 590, padding: 20 }}>
          <h3>Registration Form</h3>
          <br />
          <p>
            First Name:
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setUser({ ...user, fName: e.target.value })}
              value={user.fName}
              style={{ width: 200 }}
            />
          </p>  
          <p>
            {" "}
            Last Name:
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => setUser({ ...user, lName: e.target.value })}
              value={user.lName}
              style={{ width: 200 }}
            />
          </p>
          <p>
            E-mail Id:
            <input type="email" value={user.Email}  placeholder="Enter Email-Id" style={{ width: 200 }} />
          </p>
          <label style={{ padding: 10 }}>Gender:</label>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            style={{ margin: 10 }}
            checked={user.Gender === "male"}
            onChange={(e) => setUser({ ...user, Gender: e.target.value })}
          />
          
          <label className="form-check-label">Male</label>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={user.Gender === "female"}
            onChange={(e) => setUser({ ...user, Gender: e.target.value })}
            style={{ margin: 10 }}
          />
          <label className="form-check-label">Female</label>
          <br />
          <br />
          <textarea name="message" value={user.Address} rows="3" cols="30">
            Enter your message here...
          </textarea>
          <br></br>
          <p>
            Pin Code:
            <input
              onChange={(e) => setUser(e.target.value)}
              style={{ width: 200, margin: 10 }}
              value={user.Pincode}
            />
          </p>
          State :
          <select name="states" style={{ margin: 10 }} value={user.State}>
            <option value="select state">Select State</option>
            <option value="Maharashtra">MH</option>
            <option value="AP">AP</option>
            <option value="TN">TN</option>
            <option value="MP">MP</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            onClick={SubmitForm}
            className="btn btn-success"
            style={{ width: 250 }}
          />
        </form>
      </main>
    </>
  );
}

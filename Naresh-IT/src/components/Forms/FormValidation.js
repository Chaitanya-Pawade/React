import { useState } from "react";
 export default function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    // if (!name) errors.name = "Name is required";
    if (!name) errors.name = "Username is required";
    else if (!/^[a-zA-Z0-9]{3,15}$/.test(name))
      errors.name =
        "Username must be 3-15 characters and can only contain letters and numbers";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      errors.phone = "Phone number must be exactly 10 digits";
    // if (!age) errors.age = "Age is required";
    // else if (!/^\d+$/.test(age)) errors.age = "Age must be a number";
    // else if (parseInt(age, 10) < 18 || parseInt(age, 10) > 65)
    //   errors.age = "Age must be between 18 and 65";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Test = validate();
    if (Object.keys(Test).length === 0) {
      alert(
        `Form submitted with Name: ${name}, Email: ${email} , phone: ${phone} `
      );
      setName("");
      setEmail("");
      setPhone("");
      // setAge("");
    } else {
      setErrors(Test);
    }
  };

  return (
    <div>
      <h2>form 3</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        {/* <div>
          <label>Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <span>{errors.age}</span>}
        </div> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


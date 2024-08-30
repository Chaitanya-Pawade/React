import { useState } from "react";

export default function Seventh() {
  const [storeForm, setStoreForm] = useState({});
  const handleInputs = (value, name) => {
    const data1 = { [name]: value };
    console.log(data1);
    setStoreForm({ ...storeForm, ...data1 });
  };

  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(storeForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={(e) => handleInputs(e.target.value, e.target.name)}
        placeholder="Enter your name"
      ></input>
      <br />
      <br />

      <input
        type="number"
        name="age"
        onChange={(e) => handleInputs(e.target.value, e.target.name)}
        placeholder="Enter your age"
      ></input>
      <br />
      <br />

      <input
        type="text"
        name="hobbies"
        onChange={(e) => handleInputs(e.target.value, e.target.name)}
        placeholder="Enter your hobbies"
      ></input>
      <br />
      <br />

      <input
        type="date"
        name="date"
        onChange={(e) => handleInputs(e.target.value, e.target.name)}
        placeholder="Enter date"
      ></input>
      <br />
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

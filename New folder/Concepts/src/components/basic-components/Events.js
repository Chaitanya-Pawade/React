import React, { useState } from "react";

function Events() {
  const [inputValue, setInputVAlue] = useState("rohit");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`A name was submitted: ${inputValue}`);
    setInputVAlue("");
  }

  function handleInputChange(event, greeting) {
    setInputVAlue(event.target.value);
    console.log(greeting + event.target.value);
  }

  function handleFocus() {
    console.log("focus karo");
  }

  function handleBlur() {
    console.log("lost focus");
  }

  const handleMouseOver = () => {
    console.log("Mouse is over the submit button!");
  };

  return (
    <>
      <h2>event file</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            value={inputValue}
            onChange={(event) => handleInputChange(event, "hello")}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></input>
        </label>
        <button type="submit" onMouseOver={handleMouseOver}>
          submit
        </button>
      </form>
    </>
  );
}
export default Events;

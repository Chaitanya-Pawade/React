import React, {useState} from "react";


function Counter(){
    
  // Initialize a state variable 'count' with a default value of 0
  // setCount is the function used to update the value of 'count'
  const [count, setCount] = useState(0);

  // Function to handle the click event on the button
  function handleClick() {
    // Update the state to increment the current count
    setCount(count + 1);
  }

    return (
        <>
        <p> Click on the button to increase the count:</p>
          {/* Button with an onClick event handler calling the handleClick function */}
          <button onClick={handleClick} style={{ fontSize: "20px" }}>
            Click me! Count is: {count}
          </button>
        </>
    )
}

export default Counter;
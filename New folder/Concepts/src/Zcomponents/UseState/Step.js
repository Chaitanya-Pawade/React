import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
// const active = {
//   color: "red",
//   // height: "10px",
// };

// const numbers = {
//   display: "flex",
//   justify-content: "space-between",
// };

function Step() {
  const [step, SetStep] = useState(0);
  function next() {
    SetStep(step + 1);
  }
  function pre() {
    SetStep(step - 1);
  }

  return (
    <>
      <div>
        <h2>{step}</h2>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <StepMsg step={step}></StepMsg>
      <button onClick={next}>next</button>
      <button onClick={pre}>pre</button>
    </>
  );
}

function StepMsg({ step }) {
  console.log(step);
  return (
    <>
      <h2>step message</h2>
      <p>{messages[step]}</p>
    </>
  );
}
export default Step;

import { useState, useEffect } from "react";
function Calculator() {
  const [number, setNumber] = useState(7);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);

  useEffect(
    function () {
      setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
    },
    [number, sets, speed, durationBreak]
  );

  useEffect(
    function () {
      console.log(duration, sets);
      document.title = `Your ${number}-exercise workout`;
    },
    [number, duration, sets]
  );

  // console.log(duration);
  return <div>{duration}</div>;
}

export default Calculator;

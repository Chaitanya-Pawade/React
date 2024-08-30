import { useState, useEffect } from "react";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function Timer1() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(function () {
    const int = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

export default Timer1;

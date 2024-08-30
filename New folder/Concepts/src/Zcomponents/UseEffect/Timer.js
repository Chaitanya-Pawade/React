import { useState, useEffect } from "react";

function Timer() {
  const [sec, Setsec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      Setsec((ps) => ps + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>timer</h2>
      <h2>{sec}</h2>
    </div>
  );
}

export default Timer;

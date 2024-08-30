import React from "react";

export default function Assign3() {
  let array = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return (
    <>
      <ul>
        {array.map((day, id) => (
          <li key={id}>{day}</li>
        ))}
      </ul>
    </>
  );
}

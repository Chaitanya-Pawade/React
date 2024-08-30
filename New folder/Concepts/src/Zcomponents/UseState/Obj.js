import { useState } from "react";
export default function Obj() {
  const [person, setPerson] = useState({
    firstName: "virat",
    lastName: "kholi",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>

      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </>
  );
}

export function Table() {
  const students = [
    { name: "Chaitanya", email: "chaitu@test.com", contact: 111 },
    { name: "Chaitali", email: "chaitali@test.com", contact: 222 },
    { name: "Chhaya", email: "chhaya@test.com", contact: 333 },
    { name: "Bhagwat", email: "bhagwat@test.com", contact: 444 },
  ];
  return (
    <div>
      <h1>List with Bootstrap Table</h1>
      {students.map((item) => (
        <tr>
          {item.name}
          {item.email}
          {item.contact}
        </tr>
      ))}
    </div>
  );
}

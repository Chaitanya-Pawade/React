function User(p) {
  const data = "virat";
  return (
    <div>
      <h2>child comp</h2>
      <h2>userName:</h2>
      <button onClick={() => p.ToChild(data)}>Click me</button>
    </div>
  );
}

export default User;

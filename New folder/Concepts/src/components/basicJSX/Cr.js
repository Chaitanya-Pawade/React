function Cr() {
  const isOpen = false;
  return (
    <>
      <h3>conditional rendering</h3>
      <header>{isOpen ? <Open></Open> : <Close></Close>}</header>
    </>
  );
}

function Open() {
  return (
    <>
      <h2>shop is open </h2>
    </>
  );
}

function Close() {
  return (
    <>
      <h2>shop is close</h2>
    </>
  );
}
export default Cr;

function CtoP() {
  return (
    <>
      <h2>1.parent to child </h2>
      <Nation name={"INDIA"}></Nation>
    </>
  );
}

function Nation({ name }) {
  return (
    <>
      <State name={name}></State>
    </>
  );
}

function State({ name }) {
  return (
    <>
      <District name={name}></District>
    </>
  );
}

function District({ name }) {
  return (
    <>
      <h1>{name} is my country</h1>
    </>
  );
}

export default CtoP;

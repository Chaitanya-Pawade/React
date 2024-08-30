import "./PassData.css";
import { createContext, useContext } from "react";
const themeContext = createContext(null);
function PassData() {
  return (
    <>
      <h2>1.Passing Data</h2>
      <themeContext.Provider value="dark">
        <Form></Form>
      </themeContext.Provider>
    </>
  );
}

function Form() {
  return (
    <>
      {/* <h3>Form</h3> */}
      <Pannel title="welcome">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Pannel>
    </>
  );
}

function Pannel({ title, children }) {
  const theme = useContext(themeContext);
  const myClassName = "panel-" + theme;

  return (
    <>
      {/* <h3>Pannel</h3> */}
      <section className={myClassName}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
}

function Button({ children }) {
  const theme = useContext(themeContext);

  const myClassName = "panel-" + theme;
  return (
    <>
      <button className={myClassName}> {children}</button>
    </>
  );
}

export default PassData;

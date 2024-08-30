import { createContext, useState, useContext } from "react";
import "./UpdateObj.css";
const CurrentContext = createContext(null);
function UpdateObj() {
  const [CurrentUser, SetCurrentUser] = useState(null);
  return (
    <>
      <h2>3 Update object via contex</h2>
      <CurrentContext.Provider value={{ CurrentUser, SetCurrentUser }}>
        <Form></Form>
      </CurrentContext.Provider>
    </>
  );
}

function Form({ children }) {
  return (
    <>
      {/* <h2>form </h2> */}
      <Panel title="welcome">
        <LoginButton></LoginButton>
      </Panel>
    </>
  );
}
function Panel({ children, title }) {
  return (
    <>
      {/* <h2>Panel</h2> */}
      <h1>{title}</h1>
      {children}
    </>
  );
}
function LoginButton() {
  const { CurrentUser, SetCurrentUser } = useContext(CurrentContext);
  if (CurrentUser !== null) {
    return <p>You logged in as {CurrentUser.name}.</p>;
  }
  return (
    <>
      <Button
        onClick={() => {
          SetCurrentUser({ name: "Amol" });
        }}
      >
        Log in as Amol
      </Button>
    </>
  );
}
function Button({ children, onClick }) {
  return (
    <>
      {/* <h2>Button</h2> */}
      <button onClick={onClick}>{children}</button>
    </>
  );
}
export default UpdateObj;

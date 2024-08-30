import { createContext, useContext, useState } from "react";
import "./UpdateData.css";
const themeContext = createContext(null);
function UpdateData() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <h2>2 UpdateData</h2>
      <themeContext.Provider value={theme}>
        <Form></Form>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </themeContext.Provider>
    </>
  );
}
function Form({ children }) {
  return (
    <>
      {/* <h2>Form</h2> */}

      <Pannel title="welcome">
        <Button>sign UP</Button>
        <Button>Log IN</Button>
      </Pannel>
    </>
  );
}

function Pannel({ title, children }) {
  const theme = useContext(themeContext);
  const myClass = "panel-" + theme;
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

function Button({ children }) {
  const theme = useContext(themeContext);
  const myClass = "panel-" + theme;
  return (
    <>
      {/* <h2>button</h2> */}
      <button className={myClass}>{children}</button>
    </>
  );
}
export default UpdateData;

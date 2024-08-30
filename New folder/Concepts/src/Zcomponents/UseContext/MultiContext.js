import "./MultiContext.css";
import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

function MultiContext() {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <h2>4.multiple context</h2>

      <ThemeContext.Provider value={theme}>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <WelComePanel></WelComePanel>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            ></input>
            Use dark mode
          </label>
        </CurrentUserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

function WelComePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Panel title="welcome">
        {currentUser !== null ? <Greeting></Greeting> : <LogInForm></LogInForm>}
      </Panel>
    </>
  );
}
function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <>
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
}
function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <p>You logged in as{currentUser.name}</p>
    </>
  );
}
function LogInForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName.trim() !== "" && lastName.trim() !== "";
  return (
    <>
      <label>
        First name{": "}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name{": "}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({ name: firstName + " " + lastName });
        }}
      >
        Log In
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}
function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);

  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
export default MultiContext;

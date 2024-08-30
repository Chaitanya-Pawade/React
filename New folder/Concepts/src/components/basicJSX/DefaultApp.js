// Import the necessary React library and the useState hook
import logo from "../logo.svg";
import "../App.css";

// Define a functional component called App
function DefaultApp() {
  // Render the component using JSX
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {/* <h1>AMOL</h1> */}

          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ color: "golden" }}
          />
        </header>
      </div>
    </div>
  );
}
// Export the App component to be used in other parts of the application
export default DefaultApp;

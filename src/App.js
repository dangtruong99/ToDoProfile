import logo from "./logo.svg";
import "./App.css";
import Job from "./Screen/Home/Job";
import Login from "./Screen/LogIn/Login";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("Login");
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {screen === "Login" ? (
        <Login setScreen={setScreen} />
      ) : screen === "Home" ? (
        <Job setScreen={setScreen} />
      ) : screen === "LogOut" ? (
        <Login />
      ) : null}
    </div>
  );
}

export default App;

// import logo from "./logo.svg";

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

import { useState } from "react";
import AddingText from "./AddingText";
import Alert from "./Alert";
import About from "./About";
import "./App.css";
// import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  let [mode, setMode] = useState("light");

  let [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {

    setAlert({

      message: message,

      type: type

    });

    setTimeout(() => {

      setAlert(null);

    }, 1500);

  };

  let removeBodyClasses = () => {

    document.body.classList.remove("bg-light");

    document.body.classList.remove("bg-dark");

    document.body.classList.remove("bg-warning");

    document.body.classList.remove("bg-danger");

    document.body.classList.remove("bg-success");

    document.body.classList.remove("bg-light");

  };

  let toggleMode = (cls) => {

    removeBodyClasses();

    document.body.classList.add("bg-"+ cls);

    if (mode === "light") {

      setMode("dark");

      document.title = "Text --Customizer Application : Dark Mode";

      showAlert("Dark Mode Has Been Enabled", "success");

      // setInterval(() => {

      //   document.title = "This Application Is Just Amazing";

      // }, 2000);

      // setInterval(() => {

      //   document.title = "Install It Now";

      // }, 1500);

    } else {

      setMode("light");

      document.title = "Text --Customizer : Light Mode";

      showAlert("Light Mode Has Been Enabled", "success");

    }

  };

  return (
    <>
      <Router>
        <Navbar title="Demo Website" aboutText="About Us"  mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About></About>}>
              {/* <About></About> */}
            </Route>
            <Route exact path="/" element={<AddingText showAlert={showAlert} heading="Text --Customizer => Word Counter, Character Counter! " mode={mode}></AddingText>}>
              {/* <AddingText showAlert={showAlert} heading="Enter Your Text Here" mode={mode}></AddingText> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

{/* <About></About> */ }
{/* <Home></Home> */ }
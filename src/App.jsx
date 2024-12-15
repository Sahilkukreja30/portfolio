import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";
function App() {
  return (
    <>
      <div className="app">
        <Navigation></Navigation>
        <Home></Home>
        <div className="background2">
        <svg id="bg-one" height="150px" width="150px" filter="blur(100px)" xmlns="http://www.w3.org/2000/svg"><circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)"></circle></svg>
      </div>
        <Intro></Intro>
        <Project></Project>
        <Contact></Contact>
        <CustomCursor></CustomCursor>
        <div className="background">
          <svg
            id="bg-one"
            height="300px"
            width="300px"
            filter="blur(200px)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="48%"
              cx="50%"
              cy="50%"
              fill="var(--maxgreenyellow)"
            ></circle>
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;

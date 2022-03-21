import React from "react";
import { GrLinkedinOption, GrGithub, GrMailOption } from "react-icons/gr";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Home from "./pages/Home";
import About from "./pages/About/index";
import Projects from "./pages/Projects/index";
import Contact from "./pages/Contact/index";

function App() {
  return (
    <React.Fragment>
      <div className="global-container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { GrLinkedinOption, GrGithub, GrMailOption } from "react-icons/gr";

import Home from "./pages/Home";
import About from "./pages/About/index";
import Projects from "./pages/Projects/index";
import Contact from "./pages/Contact/index";
import MainFooter from "./ui/components/Footer/index";

function App() {
  return (
    <React.Fragment>
      <div className="global-container">
        <Home />
        <About />
        <Projects />
        <Contact />
        <MainFooter />
      </div>
    </React.Fragment>
  );
}

export default App;

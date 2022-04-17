import React, { useEffect } from "react";

import About from "../../components/sections/About";
import Begin from "../../components/sections/Begin";
import MainFooter from "../Footer";
import MainHeader from "../Header";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";

import { ToastContainer } from "react-toastify";

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  return (
    <React.Fragment>
      <MainHeader />
      <Begin />
      <About />
      <Projects />
      <Contact />
      <MainFooter
        subtitle="Desenvolvido com ❤ por mim mesmo e a Belinha! 🐶"
        funnyText="Só mais uma linha de clichê nesse portifólio, acaba logo vai :)"
      />
      <ToastContainer />
    </React.Fragment>
  );
}

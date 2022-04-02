import React from "react";

import About from "../../components/sections/About";
import Begin from "../../components/sections/Begin";
import MainFooter from "../Footer";
import MainHeader from "../Header";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";

export default function Main() {
  return (
    <React.Fragment>
      <MainHeader links={["Início", "Sobre mim", "Projetos", "Contato"]} />
      <Begin />

      <About />

      <Projects />

      <Contact />
      <MainFooter
        subtitle="Desenvolvido com ❤ por mim mesmo e a Belinha! 🐶"
        funnyText="Só mais uma linha de clichê nesse portifólio, acaba logo vai :)"
      />
    </React.Fragment>
  );
}

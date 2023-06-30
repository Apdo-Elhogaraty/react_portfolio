import React from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Skills from "./component/Skills";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

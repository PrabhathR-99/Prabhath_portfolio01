import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Aboutme from "./components/aboutme/About";
import Service from "./components/servicem/Service";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <Aboutme />
        <Service />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;

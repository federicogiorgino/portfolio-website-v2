import React from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App fade-in">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

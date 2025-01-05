import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-Ubuntu scrollbar-thin scrollbar-webkit">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

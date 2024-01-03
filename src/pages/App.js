
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home.js'
import Projects from './Projects.js'
import Aspirations from './Aspirations.js'
import Contact from './Contact.js'
import About from './About.js'



const example = "JSX"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route exact path="/Aspirations" element={<Aspirations />} />
                <Route exact path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
      </Routes>


    </Router>
  );
}

export default App;

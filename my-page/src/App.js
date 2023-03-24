import React, { useState, useEffect, useRef } from "react";
// import {
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";
import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Skills from "./Pages/Skills";

function App() {
  const [currentSection, setCurrentSection] = useState('');

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

  const handleRef = (ref) => {
    if (ref) {
      sectionRefs.current.push(ref);
    }
  };


  return (

    <div className="App">
      <NavBar currentSection = {currentSection}></NavBar>
      <Home ref={handleRef}></Home>
      <Profile ref={handleRef}></Profile>
      <Skills ref={handleRef}></Skills>
      <Projects ref={handleRef}></Projects>
      <Contact ref={handleRef}></Contact>
    </div>
  );
}

export default App;



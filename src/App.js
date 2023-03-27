import React, { useState, useEffect, useRef } from "react";
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

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;



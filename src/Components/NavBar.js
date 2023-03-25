import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import signature from "../Components/img/signature.png";


export const NavBar = (props) => {


  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imgStyle = {
    transition: 'height 0.7s ease-in-out'
  };

  const navStyle = {
    height: scrollPosition > 40 ? '40px' : '60px', 
    backgroundColor: scrollPosition > 40 ? 'rgba(81,30,40,var(--bs-bg-opacity)) ' : 'transparent', 
    transition: '0.7s ease-in-out',
    position: 'fixed', 
    top: '0', 
    left: 0, 
    width: '100%', 
    zIndex: 1000,

    '--bs-bg-opacity':'1',
    boxShadow: scrollPosition > 40 ? '0 0.5rem 1rem rgba(var(--bs-body-color-rgb),.15)' : '',
  }

  const navClassName = `navbar navbar-expand-lg `;


  return (
    <>
      <nav className={navClassName} style={navStyle}  data-bs-theme="dark" >
        <div className="container-fluid justify-content-center">
          <img src={signature} className="img offset-md-2" height={scrollPosition > 40 ? '20px' : '40px'} style={imgStyle} alt="Responsive"></img>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 offset-md-1">
              <li className="nav-item">
                <a id ='home' className={(props.currentSection === 'homePage' ? 'active' : '') + ' nav-link '} aria-current="page" href="#homePage">Main</a>
              </li>
              <li className="nav-item">
                <a id ='profile' className={"nav-link " + (props.currentSection  === 'profilePage' ? 'active' : '')} href="#profilePage">Profile</a>
              </li>
              <li className="nav-item">
                <a id ='skills' className={"nav-link " + (props.currentSection  === 'skillsPage' ? 'active' : '')} href="#skillsPage">Skills</a>
              </li>
              <li className="nav-item">
                <a id ='projects' className={"nav-link " + (props.currentSection  === 'projectsPage' ? 'active' : '')} href="#projectsPage">Projects</a>
              </li>
              <li className="nav-item">
                <a id ='contact' className={"nav-link " + (props.currentSection  === 'contactPage' ? 'active' : '')} href="#contactPage">Contact</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + (props.currentSection  === 'contact' ? 'active' : '')} href="/">Gitlab</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default (NavBar)
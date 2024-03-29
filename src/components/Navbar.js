import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Navbar.css'

const Navbar = (props) => {
  const [menu,setMenu] = useState("home")
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className= "container">
        <Link className="navbar-brand" to="/"><strong>{props.title}</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link"  to="/" onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={()=>{setMenu("about")}}>About Me{menu==="about"?<hr/>:<></>}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={()=>{setMenu("projects")}}>Projects{menu==="projects"?<hr/>:<></>}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume" onClick={()=>{setMenu("resume")}}>Resume{menu==="resume"?<hr/>:<></>}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={()=>{setMenu("contact")}}>Contact me{menu==="contact"?<hr/>:<></>}</Link>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>
    
  );
};

export default Navbar;

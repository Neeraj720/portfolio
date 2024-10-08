import React from "react";

function Navbar() {
  return(
    <header
    id="masthead"
    className="site-header"
    data-anchor-target=".hero"
    data-top="background: rgba(255,255,255,0); box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
    data-top-bottom="background: rgba(255,255,255,1); box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
  >
    <nav id="primary-navigation" className="site-navigation">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-target="#portfolio-perfect-collapse"
            aria-expanded="false"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#hero" className="site-logo">
            <h3 style={{color:'black',fontFamily:'Great Vibes, cursive'}} >Neeraj Singh</h3>
          </a>
        </div>
        <div className="main-menu" id="portfolio-perfect-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="page-scroll">
              <a href="#hero">Home</a>
            </li>
            <li className="page-scroll">
              <a href="#about">About</a>
            </li>
            <li className="page-scroll">
              <a href="#service">Service</a>
            </li>
            <li className="page-scroll">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="page-scroll">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
  
}

export default Navbar;

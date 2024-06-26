import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
    <div className='navbar-block'></div>
    <div className="navbar">
      <div className="navbar-left">
        SHUBHAM <p>DAS.</p>
      </div>
      <div className="navbar-right">
        <Link className={`navbar-right-link-properties ${activeLink === '/' ? 'active' : ''}`} to="/">HOME</Link>
        <Link className={`navbar-right-link-properties ${activeLink === '/service' ? 'active' : ''}`} to="/service">SERVICE</Link>
        <Link className={`navbar-right-link-properties ${activeLink === '/resume' ? 'active' : ''}`} to="/resume">RESUME</Link>
        <Link className={`navbar-right-link-properties ${activeLink === '/startup' ? 'active' : ''}`} to="/startup">STARTUP</Link>
        <Link className={`navbar-right-link-properties ${activeLink === '/contact' ? 'active' : ''}`} to="/contact">CONTACT</Link>
      </div>
    </div>
    </>
  );
};

export default NavBar;


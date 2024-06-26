import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import '../styles/navBar.css';

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on link click for mobile
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className='navbar-block'></div>
      <div className='navbar'>
        <div className="navbar-left">
          <div className="navbar-left-name" style={{ display: "flex", gap: "7px" }}>
            SHUBHAM <p>DAS.</p>
          </div>
        </div>
        {isMobile ? (
          <>
            <button className="hamburger-menu" onClick={toggleMenu}>
              {isMenuOpen ? <IoClose className='hamburger-menu-close'/> : <GiHamburgerMenu className='hamburger-menu-ham'/>}
            </button>
          </>
        ) : (
          <>
            <div className={`navbar-right`}>
              <Link className={`navbar-right-link-properties ${location.pathname === '/' ? 'active' : ''}`} to="/">HOME</Link>
              <Link className={`navbar-right-link-properties ${location.pathname === '/service' ? 'active' : ''}`} to="/service">SERVICE</Link>
              <Link className={`navbar-right-link-properties ${location.pathname === '/resume' ? 'active' : ''}`} to="/resume">RESUME</Link>
              <Link className={`navbar-right-link-properties ${location.pathname === '/startup' ? 'active' : ''}`} to="/startup">STARTUP</Link>
              <Link className={`navbar-right-link-properties ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">CONTACT</Link>
            </div>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div className={`mobile-side-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link className={`mobile-menu-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={handleLinkClick}>HOME</Link>
          <Link className={`mobile-menu-link ${location.pathname === '/service' ? 'active' : ''}`} to="/service" onClick={handleLinkClick}>SERVICE</Link>
          <Link className={`mobile-menu-link ${location.pathname === '/resume' ? 'active' : ''}`} to="/resume" onClick={handleLinkClick}>RESUME</Link>
          <Link className={`mobile-menu-link ${location.pathname === '/startup' ? 'active' : ''}`} to="/startup" onClick={handleLinkClick}>STARTUP</Link>
          <Link className={`mobile-menu-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={handleLinkClick}>CONTACT</Link>
        </div>
      )}
    </>
  );
};

export default NavBar;

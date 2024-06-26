import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/footer.css'

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function footer() {
    const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

    return (

        <div className='footer'>
            <div className='footer-lcons'>
                <FaLinkedin id='footer-lcons-div'/>
                <FaFacebookSquare  id='footer-lcons-div'/>
                <FaSquareInstagram id='footer-lcons-div'/>
               <FaTwitterSquare id='footer-lcons-div'/>
               <FaGithubSquare  id='footer-lcons-div'/>
            </div>
            
        </div>

    )
}

export default footer

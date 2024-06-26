import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import logo from '../assets/cyan.jpg';

import TypeAnimation from '../utils/typeAnimation.jsx'; // Adjust the import path based on your project structure
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Home() {
  const sequence = [
    'Frontend Developer','Software Developer','Frontend Developer',
    'Backend Developer','Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'MERN Developer',
    'Software Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
   
    'MERN Developer',
    'Software Developer','Frontend Developer', 'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer','Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer','Backend Developer','MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    'Software Developer','Frontend Developer',
    'Backend Developer',
    'MERN Developer',
    
    
  ];

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/shubham-das-22je0936', '_blank');
  };

  const handleInstaClick = () => {
    window.open('https://www.instagram.com/shubhdasham', '_blank');
  };

  const handleTwitterClick = () => {
    // Handle Twitter click action
    alert("TERE LYA KHOL NA PDEGA :)");
  };

  const handleGitClick = () => {
    window.open('https://github.com/ShubhamDaS-IIT-Dhanbad', '_blank');
  };

  return (
    <div className='home'>
      <div className='home-left'>
        <div className='home-left-1'>
          Hi, it's <p>SHUBHAM</p>
        </div>
        <div className='home-left-2'>
          I'm a <div className='home-left-2-title'>
            <TypeAnimation sequence={sequence} wrapper="div" repeat={Infinity} />
          </div>
        </div>
        <p className='home-left-3'>
          As I embark on my academic journey in Engineering Physics at IIT Dhanbad, my fervent passion for 
          web development propels me forward. With each day, I eagerly delve into the vast landscape of IT, 
          driven by an insatiable hunger for knowledge and innovation. Through my boundless creativity and 
          unwavering dedication, I am determined to leave an indelible mark in the dynamic realm of web development.
        </p>
        <div className='home-left-4'>
          <FaLinkedin className='footer-icons-div' onClick={handleLinkedInClick} />
          <FaFacebookSquare className='footer-icons-div' onClick={() => alert("This feature is coming soon!")} />
          <FaInstagramSquare className='footer-icons-div' onClick={handleInstaClick} />
          <FaTwitterSquare className='footer-icons-div' onClick={handleTwitterClick} />
          <FaGithubSquare className='footer-icons-div' onClick={handleGitClick} />
        </div>
        <div className='home-left-5'>
          <div className='home-left-5-1' onClick={handleContactClick}>Hire</div>
          <div className='home-left-5-2' onClick={handleContactClick}>Contact</div>
        </div>
      </div>

      <div className='home-right'>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Home;

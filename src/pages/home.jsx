import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import logo from '../assets/cyan.jpg';

import TypeAnimation from '../utils/typeAnimation.jsx';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Home() {
  const sequence = [
    'Machine Learning Engineer',
    'AI/ML Developer',
    'Quantitative Analyst',
    'Data Scientist',
    'Financial Data Analyst',
    'AI/ML Developer',
    'Machine Learning Engineer',
    'Quantitative Analyst',
    'Data Scientist',
    'Financial Data Analyst',
    'Machine Learning Engineer',
    'AI/ML Developer',
    'Quantitative Analyst',
    'Data Scientist',
    'Financial Data Analyst',
    'Machine Learning Engineer',
    'AI/ML Developer',
    'Quantitative Analyst',
    'Data Scientist',
    'Financial Data Analyst',
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
          Final-year Engineering Physics student at IIT (ISM) Dhanbad with a passion for 
          Machine Learning, AI, and quantitative finance. I build intelligent systems — from 
          RAG-based AI pipelines and NLP-driven trading signal engines to credit risk analytics 
          dashboards managing  portfolios. Currently exploring opportunities in AI/ML
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

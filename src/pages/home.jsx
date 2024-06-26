// Home.jsx
import React from 'react';
import '../styles/home.css';
import logo from '../assets/cyan.jpg';

import TypeAnimation from '../utils/typeAnimation.jsx'; // Import corrected TypeAnimation component
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Home() {
  return (
    <div className='home'>
      <div className='home-left'>
        <div className='home-left-1'>
          Hi, it's <p>SHUBHAM</p>
        </div>
        <div className='home-left-2'>
          I'm a <div className='home-left-2-title'>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                3000,
                'Backend Developer',
                3000,
                'MERN Developer',
                3000,
                'Software Developer',
                3000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
          </div>
        </div>
        <p className='home-left-3'>
        As I embark on my academic journey in Engineering Physics at IIT Dhanbad, my fervent passion for 
        web development propels me forward. With each day, I eagerly delve into the vast landscape of IT, 
        driven by an insatiable hunger for knowledge and innovation. Through my boundless creativity and 
        unwavering dedication, I am determined to leave an indelible mark in the dynamic realm of web development.
        </p>
        <div className='home-left-4'>
          <FaLinkedin className='footer-icons-div' />
          <FaFacebookSquare className='footer-icons-div' />
          <FaInstagramSquare className='footer-icons-div' />
          <FaTwitterSquare className='footer-icons-div' />
          <FaGithubSquare className='footer-icons-div' />
        </div>
        <div className='home-left-5'>
          <div className='home-left-5-1'>Hire</div>
          <div className='home-left-5-2'>Contact</div>
        </div>
      </div>
      <div className='home-right'>
        <img src={logo}/>
      </div>
    </div>
  );
}

export default Home;

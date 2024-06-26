import React, { useState } from 'react';
import '../styles/resume.css';
import resume from '../assets/resume.pdf';

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDownload } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiPostman, SiMongodb, SiMysql } from "react-icons/si";

function Resume() {
    const [activeSection, setActiveSection] = useState('education');

    return (
        <div className='resume'>
            <div className='resume-container'>
                <div className='resume-sidebar'>
                    <div className='resume-title'>Why hire me?</div>
                    <p className='resume-description'>As a passionate web development enthusiast,
                        I combine creativity, technical skills, and a focus on user experience to deliver engaging and efficient websites.
                        Hire me for innovative solutions and dedication to bringing your vision to life.</p>
                    <div className='resume-nav'>
                        <div
                            className={`resume-nav-item ${activeSection === 'experience' ? 'resume-nav-item-active' : ''}`}
                            onClick={() => setActiveSection('experience')}
                        >
                            Experience
                        </div>
                        <div
                            className={`resume-nav-item ${activeSection === 'education' ? 'resume-nav-item-active' : ''}`}
                            onClick={() => setActiveSection('education')}
                        >
                            EDUCATION
                        </div>
                        <div
                            className={`resume-nav-item ${activeSection === 'skills' ? 'resume-nav-item-active' : ''}`}
                            onClick={() => setActiveSection('skills')}
                        >
                            SKILLS
                        </div>
                        <div
                            className={`resume-nav-item ${activeSection === 'about' ? 'resume-nav-item-active' : ''}`}
                            onClick={() => setActiveSection('about')}
                        >
                            ABOUT ME
                        </div>
                        <a href={resume} className='resume-download-cv' download>
                            DOWNLOAD CV <FaDownload className='FaDownload'/>
                        </a>
                    </div>
                </div>
                {activeSection === 'experience' && (
                    <div className='resume-content'>
                        <h2>My Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officia obcaecati nihil rem harum quibusdam, odio iste autem sunt neque? Omnis ducimus tempora deserunt? Sed, non? Doloremque rem itaque blanditiis?</p>
                        <div className='experience'>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>Freelance Web Developer</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    E-commerce Startup
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>Freelance Web Developer</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    E-commerce Startup
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>Freelance Web Developer</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    E-commerce Startup
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>Freelance Web Developer</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    E-commerce Startup
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'education' && (
                    <div className='resume-content'>
                        <h2>My Education</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officia obcaecati nihil rem harum quibusdam, odio iste autem sunt neque? Omnis ducimus tempora deserunt? Sed, non? Doloremque rem itaque blanditiis?</p>
                        <div className='experience'>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>CLASS X</h3>
                                <h4>BOARD | CBSE</h4>
                                <h5> SARASWATI DEVI PUBLIC SCHOOL</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    GRADE 90%
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>CLASS XII</h3>
                                <h4>BOARD | CBSE</h4>
                                <h5> SARASWATI DEVI PUBLIC SCHOOL</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    GRADE 90%
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>JEE MAIN</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    PERCENTILE 98.7
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>JEE ADVANCE</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    RANK UNDER 12k GEN AIR
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2020 - 2021</p>
                                <h3>BTECH</h3>
                                <h5>INDIAN INSTITUTE OF TECHNOLOGY OF DHANBAD | IIT(ISM) DHANBAD</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>BTECH IN ENGINEERING PHYSICS'26
                                </div>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    4th SEM CGPA | 7.08
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'skills' && (
                    <div className='resume-content'>
                        <h2>My Skills</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officia 
                            obcaecati nihil rem harum quibusdam, odio iste autem sunt neque? Omnis ducimus 
                            tempora deserunt? Sed, non? Doloremque rem itaque blanditiis?</p>
                        <div className='skills-grid'>
                            <FaHtml5 className='skill' />
                            < FaReact className='skill' />
                            <RiJavascriptFill className='skill' />
                            <FaCss3Alt className='skill' />
                            <FaNodeJs className='skill' />
                            <RiTailwindCssFill className='skill' />
                            <SiRedux className='skill' />
                            <FaPython className='skill' />
                            <SiPostman className='skill' />
                            <SiMongodb className='skill' />
                            <SiMysql className='skill' />
                        </div>
                    </div>
                )}
                {activeSection === 'about' && (
                    <div className='resume-content'>
                        <h2>About Me</h2>
                        <p className='about-paragraph'>As an IT web developer passionate about excelling in the IT industry and 
                            software development, I am eager to learn and constantly improve my skills.
                            My success mantra is "focus on one thing and master it," which drives my 
                            commitment to delivering high-quality work and staying at the forefront of 
                            technological advancements.</p>
                        <h3 className='about-phn'>WHATS APP | (+91) 8250846979</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Resume;

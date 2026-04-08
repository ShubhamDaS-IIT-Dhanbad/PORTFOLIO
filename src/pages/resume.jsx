import React, { useState } from 'react';
import '../styles/resume.css';
import resume from '../assets/resume.pdf';

import { FaPython, FaDownload, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiMicrosoftazure, SiMysql, SiPowerbi } from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";

function Resume() {
    const [activeSection, setActiveSection] = useState('education');

    return (
        <div className='resume'>
            <div className='resume-container'>
                <div className='resume-sidebar'>
                    <div className='resume-title'>Why hire me?</div>
                    <p className='resume-description'>
                        I am an AI/ML engineer and quantitative analyst with a strong foundation in
                        Engineering Physics from IIT (ISM) Dhanbad. I build intelligent, data-driven systems —
                        from credit risk dashboards managing $435M+ portfolios to NLP-based trading signal
                        engines. Hire me for rigorous analytical thinking, financial modelling capability,
                        and the drive to turn complex data into actionable decisions.
                    </p>
                    <div className='resume-nav'>
                        <div
                            className={`resume-nav-item ${activeSection === 'experience' ? 'resume-nav-item-active' : ''}`}
                            onClick={() => setActiveSection('experience')}
                        >
                            EXPERIENCE
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
                            DOWNLOAD CV <FaDownload className='FaDownload' />
                        </a>
                    </div>
                </div>

                {/* ── EXPERIENCE ── */}
                {activeSection === 'experience' && (
                    <div className='resume-content'>
                        <h2>My Experience</h2>
                        <p>
                            From building AI-powered retrieval systems to quantitative finance projects,
                            my work sits at the intersection of machine learning, data science and financial
                            analytics — with a focus on delivering measurable, real-world impact.
                        </p>
                        <div className='experience'>
                            <div className='experience-item'>
                                <p>Apr 2025 – Jun 2025</p>
                                <h3>DATA & AI ANALYST INTERN</h3>
                                <h5>NARESH VASHISHT CENTRE FOR TINKERING & INNOVATION (NVCTI)</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    Built RAG-based chatbot · 93% accuracy · 500+ PDF pages processed
                                </div>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    LangChain · OpenAI GPT-4o · FAISS · Hybrid BM25 + MMR retrieval
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2024 – PRESENT</p>
                                <h3>QUANTSENTINEL — TRADING SIGNAL ENGINE</h3>
                                <h5>PERSONAL PROJECT</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    NLP-driven BUY/SELL/HOLD signals · Twitter & news sentiment · Backtesting
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2024 – PRESENT</p>
                                <h3>CREDIT RISK ANALYTICS SYSTEM</h3>
                                <h5>PERSONAL PROJECT</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    $435M loan portfolio · 38,600+ applications · Power BI dashboard
                                </div>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    86% / 14% performing vs non-performing loan classification
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2024 – PRESENT</p>
                                <h3>MED-VISION — DISEASE CLASSIFICATION</h3>
                                <h5>PERSONAL PROJECT</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    85% accuracy · EfficientNet-B0 · 16,000+ images · Transfer Learning
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── EDUCATION ── */}
                {activeSection === 'education' && (
                    <div className='resume-content'>
                        <h2>My Education</h2>
                        <p>
                            I completed my schooling from Saraswati Devi Public School (CBSE) and
                            cleared JEE Advanced to secure admission at IIT (ISM) Dhanbad, where I am
                            pursuing a B.Tech in Engineering Physics (Expected 2026) with a GPA of 8.62/10.
                        </p>
                        <div className='experience'>
                            <div className='experience-item'>
                                <p>2019 – 2020</p>
                                <h3>CLASS X</h3>
                                <h4>BOARD | CBSE</h4>
                                <h5>SARASWATI DEVI PUBLIC SCHOOL</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    GRADE 90%
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2021 – 2022</p>
                                <h3>CLASS XII</h3>
                                <h4>BOARD | CBSE</h4>
                                <h5>SARASWATI DEVI PUBLIC SCHOOL</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    GRADE 90%
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2022</p>
                                <h3>JEE MAIN</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    PERCENTILE 98.7
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2022</p>
                                <h3>JEE ADVANCED</h3>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    ALL INDIA RANK UNDER 12,000 (GEN)
                                </div>
                            </div>
                            <div className='experience-item'>
                                <p>2022 – 2026</p>
                                <h3>B.TECH — ENGINEERING PHYSICS</h3>
                                <h5>INDIAN INSTITUTE OF TECHNOLOGY (ISM) DHANBAD</h5>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    GPA: 8.62 / 10
                                </div>
                                <div className='experience-item-div'>
                                    <div className='experience-item-div-circle'></div>
                                    Coursework: ML, Probability & Stats, Linear Algebra, DSA, AI
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── SKILLS ── */}
                {activeSection === 'skills' && (
                    <div className='resume-content'>
                        <h2>My Skills</h2>
                        <p>
                            My technical stack spans machine learning, deep learning, NLP, quantitative
                            finance, data engineering and cloud platforms — with a strong command of the
                            analytical tools used in financial services and investment banking.
                        </p>
                        <div className='skills-grid'>
                            <FaPython className='skill' title="Python" />
                            <SiTensorflow className='skill' title="TensorFlow" />
                            <SiPytorch className='skill' title="PyTorch" />
                            <SiScikitlearn className='skill' title="Scikit-learn" />
                            <SiPandas className='skill' title="Pandas" />
                            <FaDatabase className='skill' title="SQL" />
                            <SiMysql className='skill' title="MySQL / MS SQL Server" />
                            <SiPowerbi className='skill' title="Power BI" />
                            <FaChartBar className='skill' title="Excel / Financial Modelling" />
                            <SiMicrosoftazure className='skill' title="Azure" />
                            <RiRobot2Fill className='skill' title="LangChain / LLMs" />
                        </div>
                    </div>
                )}

                {/* ── ABOUT ── */}
                {activeSection === 'about' && (
                    <div className='resume-content'>
                        <h2>About Me</h2>
                        <p className='about-paragraph'>
                            I am a final-year Engineering Physics student at IIT (ISM) Dhanbad, driven by a
                            deep interest in artificial intelligence, machine learning and quantitative finance.
                            I thrive at the intersection of rigorous mathematics and real-world problem solving —
                            whether that means building an AI retrieval system, modelling credit risk across a
                            $435M portfolio, or generating systematic trading signals from market sentiment data.
                        </p>
                        <p className='about-paragraph'>
                            My goal is to bring AI-driven analytical thinking into the world of investment banking
                            and capital markets. I am currently pursuing opportunities at JPMorgan Chase's
                            Investment Banking division, where I aim to contribute to M&A, LBO and capital
                            markets advisory under the guidance of world-class senior leaders.
                        </p>
                        <p className='about-paragraph'>
                            My guiding principle: <strong>"Build something rigorous enough to trust, simple enough to explain."</strong>
                        </p>
                        <h3 className='about-phn'>WHATS APP | (+91) 8250846979</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Resume;

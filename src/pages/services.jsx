// Services.jsx
import React from 'react';
import '../styles/services.css';
import { CiLocationArrow1 } from "react-icons/ci";

function Services() {
    return (
        <div className='services'>
            <div className='services-grid'>
                <div className='services-item'>
                    <div className='services-item-header'>
                        01
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>FRONT DEVELOPMENT</div>
                    <p>I am a full-stack MERN developer capable of creating customizable websites and writing production-ready code.</p>
                </div>
                <div className='services-item'>
                    <div className='services-item-header'>
                        02
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>BACKEND DEVELOPMENT</div>
                    <p>I am a full-stack MERN developer capable of creating customizable websites and writing production-ready code.</p>
                </div>
                <div className='services-item'>
                    <div className='services-item-header'>
                        03
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>COMPETITIVE PROGRAMMING</div>
                    <p>I am a competitive programmer with expertise in C++. I am fluent in writing optimized code and can provide these services.</p>
                </div>
                <div className='services-item'>
                    <div className='services-item-header'>
                        04
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>EDITTING</div>
                    <p>I have strong editing skills and can provide this service</p>
                </div>
            </div>
        </div>
    );
}

export default Services;


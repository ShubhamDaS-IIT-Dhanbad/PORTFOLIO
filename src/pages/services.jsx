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
                    <div className='services-item-title'>WEB DEVELOPER</div>
                    <p>Lorem ipsum dolor sit amet consectetur, iusto corporis at sunt officia! Itaque, deleniti qui!</p>
                </div>
                <div className='services-item'>
                    <div className='services-item-header'>
                        02
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>BACKEND DEVELOPER</div>
                    <p>Lorem ipsum dolor sit amet consectetur, iusto corporis at sunt officia! Itaque, deleniti qui!</p>
                </div>
                <div className='services-item'>
                    <div className='services-item-header'>
                        03
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>COMPETITIVE PROGRAMMER</div>
                    <p>Lorem ipsum dolor sit amet consectetur, iusto corporis at sunt officia! Itaque, deleniti qui!</p>
                </div>
                <div className='services-item'>
                    <div className='services-item-header'>
                        04
                        <CiLocationArrow1 size={30} className='services-item-arrow' />
                    </div>
                    <div className='services-item-title'>SEO</div>
                    <p>Lorem ipsum dolor sit amet consectetur, iusto corporis at sunt officia! Itaque, deleniti qui!</p>
                </div>
            </div>
        </div>
    );
}

export default Services;


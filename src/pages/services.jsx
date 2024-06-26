import React from 'react';
import '../styles/services.css';

import { CiLocationArrow1 } from "react-icons/ci";

function Services() {
    return (
        <div className='services'>
            <div className='services-div'>
                <div className='services-div-1'>
                    <div className='services-div-1-1'>
                        <div className='services-div-1-1-1'>
                            01
                             <CiLocationArrow1 size={30} className='services-div-1-arrow'/>
                        </div>
                        <div className='services-div-1-1-2'>WEB DEVELOPMENT</div>
                        <p>Lorem ipsum dolor sit amet consectetur, iusto corporis at sunt officia! Itaque, deleniti qui!</p>
                    </div>
                    <div className='services-div-1-1'>
                        <div className='services-div-1-1-1'>02 <CiLocationArrow1 size={30} className='services-div-1-arrow'/>
                        </div>
                        <div className='services-div-1-1-2'>BACKEND DEVELOPER</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facere!</p>
                    </div>
                </div>
                <div className='services-div-1'>
                    <div className='services-div-1-1'>
                        <div className='services-div-1-1-1'>03 
                             <CiLocationArrow1 size={30} className='services-div-1-arrow'/>
                        </div>
                        <div className='services-div-1-1-2'>COMPETITIVE PROGRAMMER</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facere!</p>
                    </div>
                    <div className='services-div-1-1'>
                        <div className='services-div-1-1-1'>04 
                             <CiLocationArrow1 size={30} className='services-div-1-arrow'/>
                        </div>
                        <div className='services-div-1-1-2'>SEO</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facere!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/startup.css';
import bharat1 from '../assets/bharatp1.png';
import bharat2 from '../assets/bharatp2.png';
import bharat3 from '../assets/bharatp3.png';
import bharat4 from '../assets/bharatp4.png';
import bharat5 from '../assets/bharatp5.png';
import bharat6 from '../assets/bharatp6.png';
import bharat7 from '../assets/bharatp7.png';
import bharat8 from '../assets/bharatp8.png';
import bharat9 from '../assets/bharatp9.png';
import bharat10 from '../assets/bharatp10.png';
import bharat11 from '../assets/bharatp11.png';
import bharat12 from '../assets/bharatp12.png';

import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

function Startup() {
    const images = [bharat1, bharat2, bharat3, bharat4, bharat5, bharat6, bharat7, bharat8, bharat9, bharat10, bharat11, bharat12];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='startup'>
            <div className='startup-div'>
                <div className='startup-div-left'>
                    <div className='startup-div-left-name'>
                        BHARAT | LINKER
                    </div>
                    <h3>MERN - Technology</h3>
                    <p>
                        Bharat Linker, your one-stop platform designed specifically
                        for retailers and local shop owners to seamlessly connect and
                        centralize their businesses. At Bharat Linker, our mission is to
                        empower local retailers by bringing their shops online, making them
                        accessible to the community and beyond.
                    </p>
                    <div className='startup-icons'>
                        <Link to="https://www.bharatlinker.shop"><CiLocationArrow1 className='startup-icons-CiLocationArrow1'/></Link>
                        <Link to="https://github.com/ShubhamDaS-IIT-Dhanbad"><FaGithub className='startup-icons-FaGithub'/></Link>
                    </div>
                </div>
                <div className='startup-div-right'>
                    <img src={images[currentImageIndex]} alt="Bharat Linker" />
                    <div className='startup-div-right-button'>
                        <div onClick={handlePrevClick}>
                            <GrFormPrevious className='startup-div-right-button-prev' size={30} />
                        </div>
                        <div onClick={handleNextClick}>
                            <MdNavigateNext className='startup-div-right-button-next' size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Startup;

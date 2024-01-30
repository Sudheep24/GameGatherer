import React from 'react';
import './footer.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <Link href='/home'>
                  Home
                </Link>
                <Link href='/Events'>
                  Events
                </Link>
                <Link href='/write'>
                  Post Events
                </Link>
            </div>
            <div className="footer-middle">
                <img src="https://i.pinimg.com/736x/24/3f/8f/243f8f7c11cd929fe553f53095847d9f.jpg" alt="logo" />
                &copy; Game Gatherer
            </div>
            <div className="footer-right">
                
            </div>
        </footer>
    );
};

export default Footer;

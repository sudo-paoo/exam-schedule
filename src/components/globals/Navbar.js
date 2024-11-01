import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import './Navbar.css';
import CCSLogo from '../../assets/ccs_200x200.png'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
            closeMobileMenu();
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    
        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <a className='navbar-logo' onClick={() => scrollToSection('home')}>
                    <img src={CCSLogo}className='navbar-img' alt="CCS Logo" />EXAMINATION<br />SCHEDULE
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes className='fa-bars' /> : <FaBars className='fa-bars' />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a className='nav-links' onClick={() => scrollToSection('home')}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-links' onClick={() => scrollToSection('find-sched')}>
                            Help
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-links' onClick={() => scrollToSection('table-sched')}>
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

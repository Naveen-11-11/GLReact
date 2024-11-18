import React, { useState } from 'react';
import './Navbar.css';
import imglogo from '../assets/logo.png';
import User from '../assets/User.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='nav-container'>
            <nav className='logo'>
                <div className='imglogo'><img src={imglogo} alt="logo" /></div>
            </nav>

            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass" />
                <input type='search' placeholder='Type to Search'/>
            </div>

            <div className="right-nav">
                {/* Toggle Button (Hamburger Menu) */}
                <div className="toggle-button" onClick={handleToggleMenu}>
                    <i className="fa-solid fa-bars" />
                </div>

                {/* Right Navigation Icons (hidden on small screens initially) */}
                <div className={`right-nav-icons ${isMenuOpen ? 'open' : ''}`}>
                   
                        <i className="fa-solid fa-envelope" />
                        <i className="fa-solid fa-bell" />
                   
                    <img src={User} alt="user" className="user-icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

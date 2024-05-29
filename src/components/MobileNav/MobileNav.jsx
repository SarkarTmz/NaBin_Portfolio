import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';
import { RiMenu3Fill } from "react-icons/ri";
import Logo from '../../images/logo.jpg'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className= "mobilenav">
        <div className="mobilenav__wrapper">
            <Link to="/">
                <img src={Logo} alt="logo" className='logo' />
            </Link>
            
            <RiMenu3Fill className="bar"
                onClick={toggleMenu} />

            <div className= {isOpen ? "mobile-li" : "menu-li"}  id="mobile">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="about">WhoAmI</Link>
                    <Link to="project">Projects</Link>
                    <Link to="contact">Contact</Link>
                </ul>
            </div>
      </div>
    </div>
  );
};

export default MobileNav;
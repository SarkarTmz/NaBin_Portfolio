import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.jpg'

import './Header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__wrapper container1 flex justify-between ">
            <Link to="/">
                <img src={Logo} alt="logo" className='logo w-28' />
            </Link>
          <ul className='flex gap-5 text-lg'>
              <Link to='/'>Home</Link>
              <Link to="about">WhoAmI</Link>
              <Link to="project">Projects</Link>
              <Link to='/contact'>Contact</Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
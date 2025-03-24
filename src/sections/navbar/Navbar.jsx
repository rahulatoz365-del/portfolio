import React from 'react'
import { useState } from 'react';
import Logo from '../../assets/logo.jpg'
import data from './data'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import './navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className="container nav__container">
        <div className='nav__brand'>
          <a href="index.html" className='nav__logo'><img src={Logo} alt="Logo" /></a>
          <h4 className='nav__name'>Rahul Singh</h4>
        </div>
          <ul className='nav__menu'>
            {data.map(item => <li  key={item.id}><a href={item.link}>{item.title}</a></li>)}
          </ul>
        <button className="nav__sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? <RxCross1 className='nav__sidebar-icon'/> : <GiHamburgerMenu className='nav__sidebar-icon'/>}
          <div className={isOpen ? 'nav__menu__mobile' : 'nav__hide'} >
            <ul>
              {data.map(item => <li  key={item.id}><a href={item.link}>{item.title}</a></li>)}
            </ul>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

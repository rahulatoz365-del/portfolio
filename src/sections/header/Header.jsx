import React from 'react'
import './header.css'
import data from './data'
import Image from "../../assets/developer.jpg"
const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
          <img src={Image} alt="" />
        </div>
        <h3>Rahul Singh</h3>
        <p>Web Developer</p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#project" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {data.map(item => <a href
          ={item.link} key={item.id} target="_blank" rel=' noopener noreferrer'>{item.icon}</a>)}
        </div>
      </div>
    </header>
  )
}

export default Header

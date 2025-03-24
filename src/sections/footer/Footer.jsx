import React from 'react'
import './footer.css'
import data from './data'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__socials'>
        {data.map(social => (
          <a key={social.id} href={social.link} className='footer__social' target='_blank' rel='noopener noreferrer'>
            {social.icon}
          </a>
        ))}
      </div>
      <p className='footer__copyright'>
        &copy; {new Date().getFullYear()} | All rights reserved
      </p>
    </footer>
  )
}

export default Footer

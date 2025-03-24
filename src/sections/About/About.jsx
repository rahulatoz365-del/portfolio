import React from 'react'
import './about.css'
import AboutImage from "../../assets/download.jpg"
import CV from "../../assets/Rahul_CV.pdf"
import { IoIosCloudDownload } from "react-icons/io";
import Card from '../../components/Card'
import data from './data'
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map(item => (
              <a href={item.link}>
                <Card key={item.id} className='about__card'>
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              </a> 
            ))}
          </div>
          <p>
          Hello! I'm Rahul Singh, a passionate MERN stack developer with a strong focus on creating dynamic and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building both the front-end and back-end of web solutions that deliver exceptional user experiences. I am driven by a love for clean, efficient code and always strive to stay up-to-date with the latest technologies to provide innovative solutions. Whether it's developing intuitive user interfaces or crafting robust APIs, I am committed to delivering high-quality results that meet both client needs and user expectations.
          </p>
          <a href={CV} download className='btn primary'>Download CV   <IoIosCloudDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About

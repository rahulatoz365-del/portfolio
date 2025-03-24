import React from 'react'
import './projects.css'
import data from './data'
import Card from '../../components/Card'
const Projects = () => {
  return (
    <section id='project'>
      <div className="container project__container">
        <h2 className='project__title'>Recent Projects</h2>
        <p className='project__desc'>Here are some of my recent projects</p>
        <div className="project__grid">
          {data.map(item => (
            <Card key={item.id} className='project__card'>
              <img src={item.img} alt="" />
              <br />
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              <br />
              <div className="project__cta">
                <button><a href={item.link} target='_blank' rel='noopener noreferrer' className='btn primary'>Demo</a></button>
                <button><a href={item.github} target='_blank' rel='noopener noreferrer' className='btn primary'>Github</a></button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

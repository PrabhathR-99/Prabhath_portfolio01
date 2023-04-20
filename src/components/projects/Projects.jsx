import React from 'react'
import './projects.css'
import Works from './Works'


const Projects = () => {
 
  return (
    <section className='projects section' id='portfolio'>
        <h2 className='section__title'>Projects</h2>
        <span className='section__subtitle'>Some of my selected projects</span>
        <Works />
    </section>
    
  )
}

export default Projects
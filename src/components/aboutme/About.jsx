import React from 'react'
import "./about.css"
import AboutImg from "./assests01/me01.png"
import CV from "./assests01/Resume - Prabhath Rathnayaka.pdf"
import Infome from './Infome'


export const About = () => {
  return (
    <section className = "about section" id = "about">
        <h1 className="section__title ">About me</h1>
        <span className='section__subtitle'>Designer based in Sri Lanka</span>
        
        

        <div className="about__container container grid">
            
            <div className="about__data">
                <Infome />

                <p className='about__description'>
                Hi there! I'm a passionate and versatile freelancer with a love for all things design. With 4 years of experience under my belt, I specialize in graphic design, UX/UI design, and digital painting.<br></br> As a beginner frontend developer, I'm excited to expand my skill set and take on new challenges. I'm dedicated to creating visually stunning, user-friendly designs that leave a lasting impression. Let's work together to bring your ideas to life!
                </p>

                <a download = " " href= {CV} className='button__cv button--flex'>
                    Download CV
                </a>
                
            </div>
            <img src={AboutImg} alt="" className="about__img"/>
        </div>
    </section>
  )
}

export default About;

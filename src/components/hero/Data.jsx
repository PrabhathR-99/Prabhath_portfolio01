import React from 'react'
import Me from '../header/assests/me.png'


export const Data = () => {
  return (
    <div className="hero__data">
        <img src={Me} alt="me" style={{ width: '160px', }}/>
        <h1 className="hero__title">Prabhath Rathnayaka
        </h1>
        <h3 className="hero__subtitle">UX & UI designer | Graphic designer | Frontend Developer</h3>
        <div className='flex-content'>
        <div className='flex-hero__buttons container'>
          
            <div className='flex-contact__button'>
            <a href="#contact" className="button__hero button--flex">
            Contact me</a>
            </div>
            <div className='flex-down__button'>
            <a href= '#about' className="button__projects button--flex">
            Scroll down
            <div className='down__icon'><i class="uil uil-mouse-alt"></i></div>
            </a>
            </div>
            <div className='flex-down__buttonsm'>
            <a className="button__projectssm button--flex">
            Scroll
            <div className='down__iconsm'><i class="uil uil-mouse-alt"></i></div>
            </a>
            </div>
          
          
          
        </div>
        </div>
        
    </div>
  )
}

export default Data

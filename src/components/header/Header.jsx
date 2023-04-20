import React from 'react'
import './header.css';
import Logo from '../header/assests/logo .png'

const Header = () => {
    
    return(
        <header className="header">

               
            <nav className="nav container">
                <div className="logo">
                <img src={Logo} alt="logo" style={{ width: '70px', }} />
                </div>

                <div className="nav__menu">
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#hero " className="nav__link active-link">
                                <i className="uli uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uli uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i class="uil uil-briefcase nav__icon"></i>
                                Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i class="uil uil-palette nav__icon"></i>
                              
                                Projects
                            </a>
                        </li>

                        
                        <li className="nav__item">
                               <button className='button'><a href="#contact" className="nav__link">
                               <i class="uil uil-message nav__icon"></i> <div className='nav__nme'>Say hi!</div></a></button>        
                        </li>

                       
                      
                        
                        

                     
                    </ul>
                    
                </div>
            </nav>
        </header>
    )
}

export default Header
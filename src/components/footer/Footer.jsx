import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Prabhath Rathnayaka</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#about" 
                    className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects"
                     className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#portfolio"
                     className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                    <a href="https://www.instagram.com/prabhath_rathnayka/" className="footer__social-icon" >
                <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/prabhath-rathnayaka-01203b217/" className="footer__social-icon" >
                <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://www.behance.net/prabathrathnay2" className="footer__social-icon" >
                <i class="uil uil-behance"></i>
                </a>

                <a href="https://github.com/PrabhathR-99" className="footer__social-icon" >
                <i class="uil uil-github"></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; Prabhath Rathnayaka. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
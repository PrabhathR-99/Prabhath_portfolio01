import React from 'react';
import "./hero.css";

import Data from './Data';



const Hero = () => {
    return(
        <section className="hero section" id="hero">
                
            <div className="hero__container container grid">
               
                    <div className="hero__content grid">
                
                    <div className="hero__img"></div>
                    <Data />
                    
                    
                </div>
                
            </div>
        </section>
    )
}

export default Hero
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_397zsbf', 'template_965gczh', form.current, 'R6gt1NViRroJP8zTN')
        e.target.reset()
    };
  return (
    <section className="contact section" id="contact">
        <h2 className='section__title'>Say Hi!</h2>
        <span className='section__subtitle'>Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className= 'contact__title'>Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i class="uil uil-envelope-edit contact__card-icon">
                            <h3 className="contact__card-title">
                                Email</h3>
                                <span className="contact__card-data">prabhathrathnayaka77@gmail.com</span>

                                <a href="mailto:prabhathrathnayaka77@gmail.com.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            
                        </i>
                    </div>


                    <div className="contact__card">
                        <i class="uil uil-whatsapp contact__card-icon">
                            <h3 className="contact__card-title">
                                Whatsapp</h3>
                                <span className="contact__card-data">+94 75 39 65 737</span>

                                <a href="https://wa.me/94753965737" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            
                        </i>
                    </div>




                    
                </div>
            </div>

            <div className="contact__content">
                <h3 className= 'contact__title'>Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type ="text" name="name" className='contact__form-input' placeholder="Insert your name"/>
                    </div>


                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type ="email"
                         name="email" 
                         className='contact__form-input' 
                         placeholder="Insert your email"/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea
                       
                        name="project" 
                        
                        cols="30"
                        rows="10"
                        className='contact__form-input' placeholder="Write your project"/>
                    </div>
                    <div className='contactme__button'>
            <input type="submit" value="Submit" className="buttonme__hero "/>
            
            </div>  


                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact
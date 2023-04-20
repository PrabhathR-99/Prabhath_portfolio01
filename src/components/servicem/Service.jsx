import React, {useState} from 'react'
import "./service.css"

const Service = () => {
    const [toggleState,setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>

        <div className="services__container container grid">
            







            <div className="service__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                        <h3 className="service__title">Graphic <br /> Designer </h3>
                    
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View more <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "service__modal active-modal" : "service__modal"}>
                    <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close " ></i>

                        <h3 className="services__modal-title">Graphic Designer</h3>
                        <p className="services__modal-description">Service with more than 4 years of experience. Providing quality work to clients and companies</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Design Social Ads, Facebook/Twitter/Google+ Timeline Cover. 
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Design Social Media Flyers, Website Headers, Media kits.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Creative and professional design with standard sizes and resolutions.
                                    </p>
                                </i>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>







            <div className="service__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="service__title">UX & UI <br /> Designer</h3>
                    
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View more <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 2 ? "service__modal active-modal" : "service__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close " onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">UX & UI Designer</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work to clients and companies</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    ️ Web & Mobile (UX/UI)
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Pixel perfect, Unique and Modern Design.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Eye-Catching Typography & Color Combination.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Layered & Editable Figma file.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Wireframes (if needed).
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Support even after the order is complete.
                                    </p>
                                </i>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>







            <div className="service__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                        <h3 className="service__title">Frontend <br /> Developer</h3>
                    
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View more <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 3 ? "service__modal active-modal" : "service__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close " onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Frontend Developer</h3>
                        <p className="services__modal-description">As a beginner frontend developer working with React, I offer affordable services to help build modern and dynamic web sites.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Will develop lightweight UI,  responsive and faster website or web application.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    I'll write clean and readable code so that its easy to change in future if needed.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Pay special attention to UX & UI for a better user experience.
                                    </p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">
                                    Providing ongoing support and maintenance for ReactJS applications.
                                    </p>
                                </i>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Service
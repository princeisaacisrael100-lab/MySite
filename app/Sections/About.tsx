import React from 'react'
import aboutImage from '../../public/assets/images/about.jpg';
import "./About.css"

export const About = () => {
  return (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-6 order-1 order-lg-2"
                 data-aos="zoom-in" 
                 data-aos-delay="100">
                    <div className="about-img">
                        <img src={aboutImage.src} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3 className="about-title">About Us</h3>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <ul>
                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                        <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    </ul>
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

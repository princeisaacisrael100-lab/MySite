'use client'

import React, { useEffect } from 'react'
import "./Hero.css"
import Herobtn from '../Components/Herobtn'

export const Hero = () => {
    useEffect(() => {
        const initGLightbox = async () => {
            const GLightbox = (await import('glightbox')).default;
            GLightbox({
                selector: '.glightbox'
            });
        };
        initGLightbox();
    }, []);
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className='container position-relative text-center text-lg-start'
                data-aos="zoom-in"
                data-aos-delay="100"
            >
                <div className='row'>
                    <div className='col-lg-8'>
                        <h1>Welcome to Oasis <span>Restaurant</span></h1>
                        <p>Experience the flavors of the world with our delicious food and drinks.</p>

                        <div className='btn'>
                            <Herobtn name="our menu" target="menu" />
                            <Herobtn name="Book a table" target="book" />
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex align-items-center justify-content-center position-relative'
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <a href="https://youtube.com/shorts/wLL8H_h_nvs?si=et5DXWLJiQZDX9JG" className='glightbox play-btn'></a>
                    </div>
                </div>


            </div>

        </section>
    )
}

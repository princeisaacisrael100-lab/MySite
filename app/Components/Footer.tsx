'use client'

import React from 'react'
import './Footer.css'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            {/* Column 1: Info & Socials */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>RESTAURANT</h3>
                                    <p>
                                        100 Your Street<br />
                                        State 1234, AUS<br /><br />
                                        <strong>Phone:</strong> +61 1234 5678<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div className="social-links">
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-youtube"></i></a>
                                        <a href="#"><i className="bi bi-reddit"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Useful Links */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><a onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
                                        <li><a onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About us</a></li>
                                        <li><a onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>Menu</a></li>
                                        <li><a onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}>Events</a></li>
                                        <li><a onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>Gallery</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 3: Our Services */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><a href="#">Functions</a></li>
                                        <li><a href="#">Parties</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Private Chef</a></li>
                                        <li><a href="#">Ceremony</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 4: Newsletter */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form>
                                        <input type="email" placeholder="" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong>Restaurant</strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="#">Hisoka </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <a className="back-to-top" onClick={scrollToTop}>
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    )
}

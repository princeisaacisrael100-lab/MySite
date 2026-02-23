'use client';

import React from 'react';
import { Sectiontitle } from '../Components/Sectiontitle';

import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <Sectiontitle
                    title="CONTACT"
                    subtitle="Contact Us"
                />

                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.234567890!2d153.0251235!3d-27.4697707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzExLjIiUyAxNTPCsDAxJzMwLjQiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Restaurant Location"
                    ></iframe>
                </div>

                <div className="contact-body">
                    <div className="contact-info-list">
                        <div className="contact-info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                            </div>
                            <div className="details">
                                <h4>Location:</h4>
                                <p>100 Your Street, Your City, State 1234</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 7.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                            </div>
                            <div className="details">
                                <h4>Open Hours:</h4>
                                <p>Monday-Saturday:<br />11:00 AM - 23:00 PM</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
                                </svg>
                            </div>
                            <div className="details">
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div className="details">
                                <h4>Call:</h4>
                                <p>+61 1234 5678</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

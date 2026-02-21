
'use client'
import React, { useState } from 'react'
import { Sectiontitle } from '../Components/Sectiontitle'
import './Booking.css'
export const Booking = () => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };
    const [text, setText] = useState(initialState);

    const handleTextChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value });
    };

    const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, phone, date, time, people, message } = text;
        if (!name || !email || !phone || !date || !time || !people || !message) {
            setText({ ...text, validate: 'incomplete' });
            return;
        }
        setText({ ...text, validate: 'loading' });

        try {
            const response = await fetch('/api/Booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(text),
            });

            if (response.ok) {
                setText({ ...initialState, validate: 'success' });
            } else {
                setText({ ...text, validate: 'error' });
            }
        } catch (error) {
            console.error('Booking error:', error);
            setText({ ...text, validate: 'error' });
        }
    };

    return (
        <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
                <Sectiontitle title="Reservation" subtitle="Book a Table" />

                <form
                    onSubmit={handleSubmitBooking}
                    className="booking-form"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="name"
                                value={text.name}
                                className="form-control"
                                placeholder="Your Name"
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={text.email}
                                placeholder="Your Email"
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={text.phone}
                                placeholder="Your Phone"
                                onChange={handleTextChange}
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={text.date}
                                placeholder="Date"
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                value={text.time}
                                placeholder='time'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="number"
                                className="form-control"
                                name="people"
                                value={text.people}
                                placeholder="# of people"
                                onChange={handleTextChange}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name="message"
                            value={text.message}
                            rows={5}
                            placeholder="Message"
                            onChange={handleTextChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        {text.validate === 'loading' && (
                            <div className="loading">Send Booking</div>
                        )}
                        {text.validate === 'incomplete' && (
                            <div className="error-message">
                                Please fill in all above details for booking a table
                            </div>
                        )}
                        {text.validate === 'success' && (
                            <div className="sent-message">
                                Your booking request was sent. We will call back or send an
                                Email to confirm your reservation. Thank you!
                            </div>
                        )}
                        {text.validate === 'error' && (
                            <div className="error-message">Server Error</div>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit">Book a Table</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

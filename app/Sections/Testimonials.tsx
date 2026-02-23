'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Sectiontitle } from '../Components/Sectiontitle';

import './Testimonials.css';

interface Testimonial {
    id: number;
    content: string;
    avatar: string;
    client: string;
    position: string;
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    const getTestimonialsData = () => {
        fetch('/api/Testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getTestimonialsData();
    }, []);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
                <Sectiontitle
                    title="TESTIMONIALS"
                    subtitle="What they' saying about us"
                />

                <div data-aos="fade-up" data-aos-delay="100">
                    {testimonials.length > 0 && (
                        <Swiper
                            spaceBetween={30}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: '.testimonials .swiper-pagination',
                                type: 'bullets',
                                clickable: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            observer={true}
                            observeParents={true}
                            className="testimonials-slider swiper-container"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="testimonial-item">
                                        <div className="testimonial-content">
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            <img
                                                src={item.avatar.replace('./', '/')}
                                                alt={item.client}
                                            />
                                        </div>
                                        <h3>{item.client}</h3>
                                        <h4>{item.position}</h4>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}

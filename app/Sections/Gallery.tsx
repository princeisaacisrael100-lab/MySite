'use client';

import React, { useState } from 'react';
import { Sectiontitle } from '../Components/Sectiontitle';
import { gallery } from '../Data/data';

import './Gallery.css';

export default function Gallery() {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <Sectiontitle
                    title="GALLERY"
                    subtitle="Some photos from Our Restaurant"
                />

                <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
                    {gallery.length > 0 &&
                        gallery.map((item) => (
                            <div
                                className="gallery-item"
                                key={item.id}
                                onClick={() => setLightbox(item.image)}
                            >
                                <img
                                    src={item.image}
                                    alt={`Gallery ${item.id}`}
                                />
                            </div>
                        ))}
                </div>
            </div>

            {lightbox && (
                <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
                    <button
                        className="gallery-lightbox-close"
                        onClick={() => setLightbox(null)}
                    >
                        &times;
                    </button>
                    <img src={lightbox} alt="Full view" />
                </div>
            )}
        </section>
    );
}

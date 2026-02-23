'use client';

import React, { useState, useEffect } from 'react';
import { Sectiontitle } from '../Components/Sectiontitle';

import './Gallery.css';

interface GalleryItem {
    id: number;
    image: string;
}

export default function Gallery() {
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [lightbox, setLightbox] = useState<string | null>(null);

    const getGalleryData = () => {
        fetch('/api/Gallery')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getGalleryData();
    }, []);

    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <Sectiontitle
                    title="GALLERY"
                    subtitle="Some photos from Our Restaurant"
                />

                <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
                    {images.length > 0 &&
                        images.map((item) => (
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

'use client'

import React, { useEffect, useState } from 'react'
import "./Hero.css"
import Herobtn from '../Components/Herobtn'

export const Hero = () => {
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        // Load YouTube IFrame API
        if (playVideo) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            (window as any).onYouTubeIframeAPIReady = () => {
                new (window as any).YT.Player('youtube-player', {
                    events: {
                        'onStateChange': (event: any) => {
                            if (event.data === (window as any).YT.PlayerState.ENDED) {
                                setPlayVideo(false);
                            }
                        }
                    }
                });
            };
        }
    }, [playVideo]);

    const handlePlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setPlayVideo(true);
    };

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
                        {playVideo ? (
                            <div className="video-container">
                                <button
                                    className="close-video"
                                    onClick={() => setPlayVideo(false)}
                                    aria-label="Close video"
                                >
                                    <i className="bi bi-x"></i>
                                </button>
                                <iframe
                                    id="youtube-player"
                                    src="https://www.youtube.com/embed/qgwHxIXuyvQ?enablejsapi=1&autoplay=1"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <a
                                href="https://www.youtube.com/watch?v=qgwHxIXuyvQ"
                                className='play-btn'
                                onClick={handlePlayClick}
                            ></a>
                        )}
                    </div>
                </div>


            </div>

        </section>
    )
}

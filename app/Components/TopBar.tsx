'use client'

import { useState, useEffect } from "react"
import React from 'react'
import "./TopBar.css"

export default function TopBar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => (
            window.removeEventListener("scroll", () => {
                setScroll(window.scrollY);
            })
        );
    }, [scroll])
    return (
        <div id="topbar" className={`d-flex align-center fixed top ${scroll > 100 ? "scrolled" : ""}`}
        >
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                    <i className="bi bi-clock d-flex align-items-center ms-4"><span>Mon-Fri 9:00 AM - 5:00 PM</span></i>
                </div>
                <div className="languages d-none d-md-flex align-items-center">
                    <ul>
                        <li>En</li>
                        <li>
                            <a href="#">JP</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

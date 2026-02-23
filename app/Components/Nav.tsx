import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { navs } from '../Data/data'

export const Nav = () => {
    const [navList, setNavList] = useState(navs)
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(0);
    const handleToggleMenu = () => {
        setOpen(!open);
    };


    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrolled(window.scrollY);
        });
        return () => (
            window.removeEventListener("scroll", () => {
                setScrolled(window.scrollY);
            })
        );
    }, [scrolled]);
    const handScrollto = (section: string) => {

    }
    const handleNavActive = () => {

    }

    const handleNavClick = (target: string) => {
        setNavList(navList.map(nav => ({
            ...nav,
            active: nav.target === target
        })));

        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };

    return (
        <nav id='navbar'
            className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}>
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        <a
                            className={`nav-links scrollto ${nav.active ? 'active' : ''}`}
                            onClick={() => handleNavClick(nav.target)}
                        >
                            {nav.name === 'Home' ? <i className="bi bi-house-door-fill"></i> : nav.name}
                        </a>
                    </li>
                ))}
            </ul>
            <i
                className={`bi ${open ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
                onClick={() => setOpen(!open)}
            ></i>
        </nav>
    )
}

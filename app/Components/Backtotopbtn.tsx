'use client'

import React, { useState, useEffect } from 'react'
import './Backtotopbtn.css'

export const Backtotopbtn = () => {
    const [backtotop, setBacktotop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBacktotop(true);
            } else {
                setBacktotop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const backToTop = () => {
        window.scrollTo(0, 0);

    }
    return (
        <a onClick={backToTop}
            className={`back-to-top d-flex align-items-center justify-content-center ${backtotop ? 'active' : undefined}`}
        >
            <i className='bi bi-arrow-up-short'></i>

        </a>
    );
}

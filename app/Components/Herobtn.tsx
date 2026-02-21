'use client'

import React from 'react'
import './Herobtn.css'

const Herobtn = ({
    name, target
}:
    { name: string, target: string }) => {
    const handleSchrollTo = (target: string) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }; 

    return (
        <a onClick={() => handleSchrollTo(target)}
            className={`btn-hero animation fade-in-up scrollto ${name.includes('book') ? 'book-a-table' : 'ms-4'}`}>
            {name}
        </a>
    )
}

export default Herobtn
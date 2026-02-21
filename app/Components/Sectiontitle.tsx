import React from 'react'
import './Sectiontitle.css'

export const Sectiontitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className='section-title'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

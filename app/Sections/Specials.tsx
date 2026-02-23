'use client'

import React, { useState } from 'react'
import './Specials.css'
import { Sectiontitle } from '../Components/Sectiontitle';
import { specialsFilters, specials } from '../Data/data';
import { SpecialsItems } from '../Components/SpecialsItems';

export const Specials = () => {
    const [items, setItems] = useState<any[]>(specials);

    const handleFilterAcive = (id: number) => {
        specialsFilters.map(filter => {
            filter.active = false;
            if (filter.id === id) filter.active = true;
        });
    };


    const handleSpecialChange = (id: number) => {
        handleFilterAcive(id);
        const updatedItems = items.map(
            (item: {
                id: number;
                image: string;
                title: string;
                subtitle: string;
                content: string;
                active: boolean;
            }) => {
                item.active = item.id === id;
                return item;
            }
        );
        setItems(updatedItems);
    };

    return (
        <section id='specials' className='specials'>
            <div className="container" data-aos='fade-up'>
                <Sectiontitle title='Specials' subtitle='Check our specials' />

                <div className="row" data-aos='fade-up' data-aos-delay='100'>
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column" >
                            {specialsFilters.map(filter => (
                                <li className="nav-item" key={filter.id}>
                                    <a
                                        className={`nav-link ${items.find(i => i.id === filter.id)?.active ? 'active show' : ''}`}
                                        onClick={() => handleSpecialChange(filter.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {filter.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            {items.map((
                                item: {
                                    id: number;
                                    image: string;
                                    title: string;
                                    subtitle: string;
                                    content: string;
                                    active: boolean;
                                }
                            ) => (
                                <SpecialsItems key={item.id} items={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

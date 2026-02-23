'use client'
import React, { useState } from 'react';
import './Menu.css';
import { filters, menu } from '../Data/data';
import { Sectiontitle } from '../Components/Sectiontitle';
import { Menuitem } from '../Components/Menuitem';

export const Menu = () => {
  const [items, setItems] = useState(menu);

  const handleFilterAcive = (id: number) => {
    filters.map(filter => {
      filter.id === id ? filter.active = true : filter.active = false
    })
  }

  const handleFilterChange = (id: number, category: string) => {
    handleFilterAcive(id);
    if (category === 'all') {
      setItems(menu);
    } else {
      const result = menu.filter((item: any) => item.category === category);
      setItems(result);
    }
  };

  return (
    <section id='menu' className='menu section-bg'>
      <div className='container' data-aos='fade-up'>
        <Sectiontitle title='our menu' subtitle='check our tasty menu' />
        <div className='row' data-aos='fade-up' data-aos-delay='100'>
          <div className='co-lg-12 d-flex justify-content-center'>
            <ul id='menu-filters'>
              {filters.map(filter => (
                <li key={filter.id}
                  className={`${filter.active ? 'filters-active' : undefined}`}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='row menu-container'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {items.length > 0 &&
            items.map(
              (item: {
                id: number;
                name: string;
                preview: string;
                price: number;
                ingredients: string;
              }) => <Menuitem key={item.id} items={item} />
            )
          }
        </div>
      </div>
    </section>
  )
} 

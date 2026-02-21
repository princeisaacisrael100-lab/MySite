'use client'
import React, { useState, useEffect } from 'react';
import './Menu.css';
import { filters } from '../Data/data';
import { Sectiontitle } from '../Components/Sectiontitle';
import { Menuitem } from '../Components/Menuitem';
import Preloader from '../Components/Preloader';

export const Menu = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);


  const getMenuData = () => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(menu => setData(menu))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterAcive = (id:number) => {
   filters.map(filter => {
    filter.id === id ? filter.active = true : filter.active = false
   } )
  }

  const handleFilterChange = (id: number, category: string) => {
    handleFilterAcive(id);
    if (category === 'all') {
      setItems(data);
    } else {
      const result = data.filter((item: any) => item.category === category);
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
          {items.length > 0 ? (
            items.map(
              (item: {
                id: number;
                name: string;
                preview: string;
                price: number;
                ingredients: string;
              }) => <Menuitem key={item.id} items={item} />
            )
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  )
} 

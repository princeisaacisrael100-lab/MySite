import React from 'react'
import './Menuitem.css'
import Link from 'next/link';

export const Menuitem = ({
  items
}: {
  items: {
    id: number;
    name: string;
    price: number;
    ingredients: string;
    preview: string;
  };
}) => {
  return (
    <div className='col-lg-6 menu-item'>
      <img src={items.preview} className='menu-img' alt="" />
      <div className='menu-content'>
        <Link href={`/menu/${items.id}`}>{items.name}</Link>
        <span>${items.price}</span>
      </div>
      <div className="menu-ingredients">{items.ingredients}</div>
    </div>
  );
}

import { Content } from 'next/font/google'
import React from 'react'

export const Whyuscart = ({
    item
}:
{item: {id: number; title: string; Content:string}}) => {
  return (
   <div className='col-lg-4 mt-4 mt-lg-0'>
    <div className='box' data-aos="zoom-in" data-aos-delay="200">
        <span>0{item.id}</span>
        <h4>{item.title}</h4>
        <p>{item.Content}</p>

    </div>

   </div>
  )
}

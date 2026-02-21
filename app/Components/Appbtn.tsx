import React from 'react'
import "./Appbtn.css"

export default function Appbtn({name}: {name: string} ) {

    const handlescrollto = (section: string) => {

        //go to booking section
    };


  return (
 <a className="app-btn scrollto d-name d-lg-flex" onClick={()=> handlescrollto('book-a-table')}>
    {name}
 </a> 
  )
}
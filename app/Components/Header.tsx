'use client'

import React, { useState, useEffect } from 'react'
import "./Header.css"
import Appbtn from './Appbtn'
import { Nav } from './Nav'

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="header" className={`d-flex align-items-center ${scroll > 100 ? "scrolled" : ""}`}>
      <div className="container-fluid d-flex align-items-center container-xl justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Restaurant</a>
        </h1>

        <Nav />

        <Appbtn name='Book a table' />


      </div>
    </header>
  );
}
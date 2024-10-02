import React from 'react'
import Navbar from "../component/Navbar";
import Nav from '../component/Nav';
import NavbarHero from '../component/NavbarHero';




const home = () => {
  return (
    <div className='h-[100vh] relative z-40 bg-[#191b1c]' >
        <Navbar />
        <div className='flex items-center justify-center'>
        <NavbarHero />
        <Nav />
        </div>
    </div>
  )
}

export default home
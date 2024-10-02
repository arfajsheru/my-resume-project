import React, { useState } from 'react'
import Navbar from "../component/Navbar";
import Nav from '../component/Nav';
import NavbarHero from '../component/NavbarHero';




const home = () => {
  const[aboutme,setAboutme] = useState(false);
  return (
    <div className='h-[100vh] relative z-40 bg-[#191b1c]' >
        
        {!aboutme && <Navbar />}
        <div className='flex items-center justify-center'>
        <NavbarHero aboutme={aboutme} setAboutme={setAboutme}/>
        {!aboutme && <Nav/>}
        
        </div>
    </div>
  )
}

export default home
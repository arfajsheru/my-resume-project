import React, { useEffect, useState } from 'react'
import Navbar from "../component/Navbar";
import Nav from '../component/Nav';
import NavbarHero from '../component/NavbarHero';
import MatterCanvas from '../component/MatterCanvas';




const home = () => {

  const[aboutme,setAboutme] = useState(false);

  return (
    <div className='h-[100vh] relative z-40 bg-[#191b1c]' >
        {!aboutme && <Navbar/>}
        <div className='flex items-center justify-center'>
        <NavbarHero aboutme={aboutme} setAboutme={setAboutme}/>
        {!aboutme && <Nav/>}
        </div>
          {/* <div className='absolute inset-0 -z-30'>
              <MatterCanvas />
          </div> */}


    </div>
  )
}

export default home
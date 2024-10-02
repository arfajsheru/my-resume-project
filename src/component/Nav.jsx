import React, { useState } from 'react'
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";

const Nav = () => {

  const navData = [
    {name: 'home', path:'/home', imgpath:<IoIosHome /> },
    {name: 'work', path:'/work', imgpath:<MdOutlineLaptopChromebook /> },
    {name: 'skills', path:'/skills', imgpath:<FaBriefcase /> },
    {name: 'contact', path:'/contact', imgpath:<MdOutlineContactPhone /> },
  ];


  return (
    <nav className='flex flex-col items-center justify-around lg:justify-center gap-y-4 fixed h-max bottom-0  mt-auto lg:right-[2%] z-30 top-0 w-full lg:w-12 lg:max-w-md lg:h-screen'>
 
      {/* inner div */}
      <div className=' flex w-full lg:flex-col items-center justify-around lg:justify-center gap-y-5 px-4 md:px-40 lg:px-0 h-[70px]  lg:h-max py-8 bg-[#182028] lg:rounded-full '>
        {navData.map((item,index) => {
          return <div onClick={() => setActive(index)} key={index} className={`w-20 h-10 lg:w-8 lg:h-12 flex items-center justify-center cursor-pointer rounded-full background transition-all duration-500 `}>
            <a href={item.path}><p className='text-center text-xl text-white'>{item.imgpath}</p></a>
            </div>
        })}    
      </div>
    </nav>
  )
}

export default Nav
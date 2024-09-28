import React from 'react'
import work from "../asstes/work.png"
import home from "../asstes/home.png"
import contact from "../asstes/contact.png"
import skills from "../asstes/skills.png"


const Nav = () => {
  const navData = [
    {name: 'home', path:'/home', imgpath:home },
    {name: 'work', path:'/work', imgpath:work },
    {name: 'skills', path:'/skills', imgpath:skills },
    {name: 'contact', path:'/contact', imgpath:contact },
  ]
  return (
    <nav className='flex flex-col items-center justify-around lg:justify-center gap-y-4 fixed h-max bottom-0  mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-12 lg:max-w-md lg:h-screen'>
 
      {/* inner div */}
      <div className=' flex w-full lg:flex-col items-center justify-around lg:justify-center gap-y-5 px-4 md:px-40 lg:px-0 h-[70px]  lg:h-max py-8 bg-white bg-opacity-20 lg:rounded-full '>
        {navData.map((item,index) => {
          return <div className="w-20 h-10 lg:w-8 lg:h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#43b0f1] transition-all duration-500">
            <a href={item.path}> <img src={item.imgpath} className='w-6 md:w-5' alt="" /></a>
            </div>
        })}    
      </div>
    </nav>
  )
}

export default Nav
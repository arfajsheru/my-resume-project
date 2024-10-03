import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
import Nav from "./Nav";
const Navbar = () => {
  const socialicon = [
    {
      icon: <FaLinkedin />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaGithub />,
    },
    {
      icon: <ImWhatsapp />,
    },
    {
      icon: <IoMailOutline />,
    },
  ];
  return (
    <>
    <div className=" flex justify-between items-center  px-[4vw] sm:px-[6vw] md:px-[8vw] pt-2 pointer-events-none">
      {/* logo name */}
      <div className="w-16 md:w-20 hover:opacity-60 transition-all duration-500 pointer-events-auto">
        <svg
          viewBox="0 0 406 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782"
            stroke="white"
            strokeWidth="10"
          />
        </svg>
      </div>

      {/* lap top socila media icon */}
      <div className="flex gap-5 items-center">
        <div className="hidden md:flex gap-5">
          {socialicon.map((item,index) => {
            return (
              <div key={index} className="w-10 flex text-2xl items-center justify-center bg-[#001820] text-white box-shadow p-2 cursor-pointer rounded-xl background transition-all duration-700 hover:translate-y-[-8px] pointer-events-auto">
                <a>{item.icon}</a>
              </div>
            );
          })}
        </div>
        <div className="w-10 flex text-2xl items-center justify-center bg-[#001820] text-white  box-shadow p-2 cursor-pointer rounded-xl background transition-all duration-700 hover:translate-y-[-8px] pointer-events-auto">
          <MdDarkMode />
        </div>
      </div>

      {/* mobile socila media icon */}
      <div className="flex flex-col lg:hidden items-center justify-center absolute -z-10 h-screen right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
        <div className="flex flex-col gap-5 py-3 px-2 rounded-3xl">
          {socialicon.map((item, index) => {
            return (
              <div key={index} className="w-6 flex text-[16px] items-center justify-center text-white shadow p-1 cursor-pointer rounded-md background transition-all duration-700">
                <a>{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;

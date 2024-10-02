import React from "react";
import { GiThornedArrow } from "react-icons/gi";
const NavbarHero = () => {
  return (
    <div>
      {/* Banner logo */}
      <div className="flex items-center justify-center w-full h-full">

      <div className="absolute top-[40%] md:top-[32%] left-[15%] text-white flex flex-col gap-4 md:gap-9 items-start ">
          <h1 className="text-4xl md:text-7xl font-roboto font-bold tracking-wider"><span className="text-[#43b0f1]">A</span>rfaj <span className="text-[#43b0f1]">S</span>heru</h1>
          <p className="font-[notoserif] text-[14px] md:text-xl italic tracking-wider">MERN Stack Developer</p>
          <button
              class="flex items-center gap-3 bg-[#43b0f1] py-2 px-5 rounded font-medium font-roboto relative hover:scale-110 ease-in-out duration-100 group"
            >
              About Me
              <GiThornedArrow className="absolute -right-4 -rotate-[45deg] text-2xl font-thin " />
          </button>
      </div>

      <div className=" ">

    
        <svg
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[650px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
         
          viewBox="0 0 406 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
            stroke="#00202e"
            stroke-opacity="1"
            stroke-width="8"
          />
          <path
            d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
            stroke="url(#paint0_linear)"
            stroke-width="8"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="205.549"
              y1="20.0169"
              x2="204.338"
              y2="342.461"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#43b0f1" />
              <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        </div>
      </div>
    </div>
  );
};

export default NavbarHero;

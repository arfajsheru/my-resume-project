import React from 'react'
import project_1 from "../asstes/Projectimg/project-1.png"
const LatestWork = () => {
  return (
    <div className='h-[100vh] bg-[#191b1c] text-white px-5 sm:pb-16'>
        <h1 className='text-3xl text-[40px] mx-auto w-max px-4 text-center font-bold font-montserrat border-b border-b-[#43b0f1]'>Latest works</h1>
        <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-2/4 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        
        <a
          href="https://cr-hotel.vercel.app/"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
          >
            <img
              className="max-w-[500px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={project_1}
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Cafe Rajasthan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                trokelnejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
          Cafe Rajasthan
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg"
            >(Restuarant)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
            Deeply understand advanced concepts, practice with real-world
            exercises, build expertise with hands-on projects to boost your
            career.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #express.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #node.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #swiper.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #mongoDB
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #mongoose
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
};

export default LatestWork
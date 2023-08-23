import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  let [show, setShow] = useState(false);
  let options = [
    {to:"/", title:"Home"},
    {to:"/cities", title:"Cities"}

    
    
  ]

  return (
    <header className="h-[87px] px-12 flex items-center bg-gray-500 md:h-[87px] md:px-12 md:flex md:justify-between md:items-center md:bg-gray-500 lg:flex lg:justify-center lg:items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer md:cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
  
      <div className="text-black font-[700] text-[20px] ml-2 md:text-black md:font-[700] md:text-3xl md:ml-3">My Tinerary</div>
  
      {show ? (
        <nav className="h-30 flex flex-col items-center md:space-x-4 md:flex-row md:items-center md:justify-between md:m-auto lg:flex lg:space-x-5">
          <div className="font-segoe-ui text-black text-[14px] font-[500] leading-5 flex items-center flex-col mb-0 md:font-segoe-ui md:text-black md:text-lg md:font-[700] md:leading-8 md:flex md:flex-row md:items-center md:justify-between md:space-x-4 lg:flex lg:ml-80">
            {options.map(each => <Anchor key={each.to} to={each.to}>{each.title}</Anchor>)}
          </div>
  
          <button className="flex items-center justify-center space-x-2 w-20 px-2 bg-[#4F46E5] hover:bg-[#473fde] text-white text-[14px] font-[500] rounded-md h-full lg:text-[18px] lg:h-[40px] lg:mt-auto lg:flex lg:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 lg:w-7 lg:h-7"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </nav>
      ) : null}
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 ml-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </header>
  );
      }  

/* export default function NavBar() {
  let [show, setShow] = useState(false);

  return (
    <header className="h-[87px] px-12 flex justify-between items-center bg-white">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
        </svg>
        <div className="text-black font-[700] text-2xl ml-3">My Tinerary</div>
      </div>

      {show && (
        <nav className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 ml-[35vw] mx-auto h-30 justify-between">
          <Anchor to = "/home" className="font-segoe-ui text-black text-lg font-[700] leading-8"
          >
            Home
          </Anchor>

          <Anchor to = "/cities" className=" font-segoe-ui text-black text-lg font-[700] leading-8"
          >
            Cities
          </Anchor>
          <button className="flex items-center space-x-2 w-[159px] h-[64px] px-4 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-[700] rounded-md py-[16px] px-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
        </nav>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9 ml-auto"
      >
        {<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>}
      </svg>
    </header>
  );
}
 */

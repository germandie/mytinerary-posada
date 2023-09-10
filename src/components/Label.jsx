import { Link as Anchor } from "react-router-dom"

export default function Label({options}) {
  
  return (
    <nav className="hidden h-30 items-center md:space-x-4 md:flex md:items-center md:justify-between md:m-auto lg:flex lg:space-x-5">
          <div className="font-segoe-ui text-white text-[14px] font-[500] leading-5 flex items-center flex-col mb-0 md:font-segoe-ui 
          md:text-white md:text-lg md:font-[700] md:leading-8 md:flex md:flex-row md:items-center md:justify-between md:space-x-4 
          lg:flex lg:ml-80 lg:text-white
          xl:text-white">
            {options.map(each => <Anchor key={each.to} to={each.to}>{each.title}</Anchor>)}
          </div>
  
          <Anchor to= "/signin">
          <button className="flex items-center justify-center space-x-2 w-20 px-2 bg-[#4F46E5] hover:bg-[#473fde] text-white text-[14px] font-[500] rounded-md h-full lg:text-[18px] lg:h-[40px] lg:mt-auto lg:flex lg:items-center
          xl:w-24 xl:h-13">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 lg:w-7 lg:h-7
              xl:w-5 xl:h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
          </Anchor>
          
        </nav>
  )
}

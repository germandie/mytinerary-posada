import { useState } from "react";

import { useSelector,useDispatch } from "react-redux";
import Display from "./Display";
import Label from "./Label";
import user_actions from "../store/actions/users";
const { signout } = user_actions

export default function NavBarSignin() {
  let [show, setShow] = useState(false);
  let options = [
    {to:"/", title:"Home"},
    {to:"/cities", title:"Cities"}
   ]

   let name = useSelector(store=>store.users.user?.name)
   //let photo = useSelector(store=>store.users.user?.photo)
   console.log(name)
   let dispatch = useDispatch()

   




  return (
    <header className="mt-[0rem] h-[87px] px-12 flex items-center 
    md:h-[87px] md:px-12 md:flex md:justify-between md:items-center md:mt-[0rem]
    lg:flex lg:justify-center lg:items-center lg:mt-[0rem] 
    xl:mt-[0rem] xl:flex xl:items-center
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer text-white
         md:hidden"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
  
      <div className="text-white font-[600] text-[18px] ml-2  md:font-[600] md:text-3xl md:ml-3">My Tinerary - {name} </div>
  
     
      {show && <Display options={options}/>}
      
      

      <Label options={options} />
  
      
     {/* <div className="flex space-x-2">
     <img className="rounded-full w-12 h-12 mx-auto" src= {photo}  alt="photo" />
     <span
      className="flex items-center justify-center space-x-2 w-20 px-2 cursor-pointer bg-[#4F46E5] hover:bg-[#473fde] text-white text-[14px] font-[500] rounded-md h-full lg:text-[18px] lg:h-[40px] lg:mt-auto lg:flex lg:items-center xl:w-24 xl:h-13"
      onClick={()=>dispatch(signout())}
    >
      Signout
    </span>
     </div> */}


{/* <div className="flex items-center space-x-2">
  {name ? (
    <div className="flex space-x-2">
    <img className="rounded-full w-12 h-12 mx-auto" src= {photo}  alt="photo" />
    
    <span
     className="flex items-center justify-center space-x-2 w-20 px-2 cursor-pointer bg-[#4F46E5] hover:bg-[#473fde] text-white text-[14px] font-[500] rounded-md h-full lg:text-[18px] lg:h-[40px] lg:mt-auto lg:flex lg:items-center xl:w-24 xl:h-13"
     onClick={()=>dispatch(signout())}
   >
     Signout
   </span>
    </div>
    
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-11 h-11 ml-auto"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )}
  
</div> */}

     
















      
     {/* <div className="flex space-x-2">

     {photo ? (<img className="rounded-full w-12 h-12 mx-auto" src= {photo}  alt="photo" />) : (<svg
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
      </svg>) }
     
     <span
      className="flex items-center justify-center space-x-2 w-20 px-2 cursor-pointer bg-[#4F46E5] hover:bg-[#473fde] text-white text-[14px] font-[500] rounded-md h-full lg:text-[18px] lg:h-[40px] lg:mt-auto lg:flex lg:items-center xl:w-24 xl:h-13"
      onClick={()=>dispatch(signout())}
    >
      Signout
    </span>
     </div> */}
      
      
    </header>
  );
      }  
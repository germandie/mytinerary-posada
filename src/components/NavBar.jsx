import { useState } from "react";

import Display from "./Display";
import Label from "./Label";
import backgroundImage from "/public/img/dubai3.jpg"
import { useSelector,useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions




export default function NavBar() {
  let [show, setShow] = useState(false);
  let options = [
    {to:"/", title:"Home"},
    {to:"/cities", title:"Cities"}

    
]
//let profile_picture = useSelector(store=>store.users.user?.photo)
let name = useSelector(store=>store.users.user?.name)
let photo = useSelector((store) => store.users.user?.photo);
let mail = useSelector(store=>store.users.user?.mail)
let dispatch = useDispatch()





  return (
    <header className="h-[87px] px-12 flex items-center bg-gray-500 md:h-[87px] md:px-12 md:flex md:justify-between md:items-center md:bg-gray-500 lg:flex lg:justify-center lg:items-center xl:h-[12rem] "
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url(${backgroundImage})`, backgroundRepeat: "no-repeat",backgroundPosition: "center", minWidth: "80vw",backgroundSize: "object-cover" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer md:cursor-pointer text-white
        md:hidden"
        onClick={()=>setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div className=" hidden text-white font-[700] text-[20px] ml-2 
      md:flex md:font-[700] md:text-3xl md:ml-3 md:text-white
      lg:text-white
      xl:text-white">My Tinerary - {name} </div>
      
       
    
   {/* <div className="flex justify-center items-center ml-auto">
   {show && <Display options={options}/>}

 <Label options={options} />
   </div> */}
      
  {show && <Display options={options}/>}
   

    <Label options={options} />

      
      {mail? (
 
 <img
 className="rounded-full w-12 h-12 border-solid border-2 border-gray-200 mx-auto object-cover absolute inset-y-4 right-8 md:hidden"
 src={photo}
 alt="photo"
/>

      ) : (<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="gray"
        className="w-11 h-11 ml-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      )
      
    }


    


</header>
  );
      }  


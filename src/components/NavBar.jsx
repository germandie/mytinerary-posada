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
let profile_picture = useSelector(store=>store.users.user?.photo)
let dispatch = useDispatch()



const [isAuthenticated, setIsAuthenticated] = useState(!!profile_picture);
const handleSignoutClick = () => {
  // Realizar acciones de cierre de sesión aquí
  dispatch(signout());

  // Actualizar el estado local para reflejar que el usuario está deslogueado
  setIsAuthenticated(false);
};



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
      xl:text-white">My Tinerary</div>
      
       
    
  
      {show && <Display options={options}/>}

      <Label options={options} />

      

      {/* <img className="rounded-full w-12 h-12 ml-auto" src={profile_picture} alt="photo" /> */}
  
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 ml-auto text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg> */}

<div className="flex flex-col justify-center items-center ml-auto">
  {/* Mostrar la imagen del perfil solo si el usuario está autenticado */}
  {isAuthenticated && (
    <div className="mb-4">
      <img className="rounded-full w-12 h-12 mx-auto" src={profile_picture} alt="photo" />
    </div>
  )}

  {/* Mostrar el botón SIGNOUT solo si el usuario está autenticado */}
  {isAuthenticated && (
    <span
      className="flex items-center justify-center space-x-2 w-20 px-2 cursor-pointer bg-[#4F46E5] hover:bg-[#473fde] text-white text-[14px] font-[500] rounded-md h-full lg:text-[18px] lg:h-[40px] lg:mt-auto lg:flex lg:items-center xl:w-24 xl:h-13"
      onClick={handleSignoutClick}
    >
      SIGNOUT
    </span>
  )}
</div>







      

    </header>
  );
      }  


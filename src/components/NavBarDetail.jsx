import { useState } from "react";

import { useSelector,useDispatch } from "react-redux";
import Display from "./Display";
import Label from "./Label";
import user_actions from "../store/actions/users";
const { signout } = user_actions

export default function NavBar() {
  let [show, setShow] = useState(false);
  let options = [
    {to:"/", title:"Home"},
    {to:"/cities", title:"Cities"}
   ]

   
   let profile_picture = useSelector(store=>store.users.user?.photo)
   let name = useSelector(store=>store.users.user?.name)
   let dispatch = useDispatch()

   const [isAuthenticated, setIsAuthenticated] = useState(!!profile_picture);
   const handleSignoutClick = () => {
     // Realizar acciones de cierre de sesión aquí
     dispatch(signout());
   
     // Actualizar el estado local para reflejar que el usuario está deslogueado
     setIsAuthenticated(false);
   };




  return (
    <header className="mt-[-7rem] h-[87px] px-12 flex items-center 
    md:h-[87px] md:px-12 md:flex md:justify-between md:items-center md:mt-[-7rem]
    lg:flex lg:justify-center lg:items-center lg:mt-[-8rem]
    xl:mt-[0rem]
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
  
      
    <div className="w-1/6 flex flex-col justify-center items-center ml-auto mt-6">
  {/* Mostrar la imagen del perfil solo si el usuario está autenticado */}
  {isAuthenticated && (
    <div className="mb-4">
      <img className="rounded-full w-12 h-12 mx-auto" src={profile_picture} alt="photo" />
    </div>
  )}

  
</div>
      
      
      
    </header>
  );
      }  
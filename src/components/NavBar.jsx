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
let dispatch = useDispatch()



// const [isAuthenticated, setIsAuthenticated] = useState(!!profile_picture);
// const handleSignoutClick = () => {
//   // Realizar acciones de cierre de sesión aquí
//   dispatch(signout());

//   // Actualizar el estado local para reflejar que el usuario está deslogueado
//   setIsAuthenticated(false);
// };



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

      
    


</header>
  );
      }  


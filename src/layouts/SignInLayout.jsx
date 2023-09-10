import NavBarSignin from "../components/NavBarSignin";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"


export default function DetailLayout() {
  return (
    <div className="bg-cover bg-center h-screen 
    md: bg-gray-800
    lg:bg-gray-800" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url(/img/water.jpg)' }}>
    
   
    < NavBarSignin/>
    <Outlet/>
    
    </div>
    
    
  );
}
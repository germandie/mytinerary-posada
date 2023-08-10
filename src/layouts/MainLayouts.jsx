import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayouts() {
  return (
    <div className="w-[full] min-h-screen m-auto
    sm: bg-black
    md: bg-black
    lg:bg-black">
    < NavBar/>
    <Outlet/>
    <Footer />
    </div>
    
    
  );
}

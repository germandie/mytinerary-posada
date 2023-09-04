
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"


export default function DetailLayout() {
  return (
<div className="w-full min-h-screen m-auto
">
     
      <Outlet />
      <Footer />
   </div>
  );
}

import CardDetail from "../components/CardDetail";
import { Outlet } from "react-router-dom";


export default function DetailLayout() {
  return (
<div className="w-full min-h-screen m-auto">
     
      <Outlet />
   </div>
  );
}

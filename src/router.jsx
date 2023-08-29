import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import MainLayouts from "./layouts/MainLayouts"
import CityDetail from "./pages/CityDetail"
import DetailLayout from "./layouts/DetailLayout"

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayouts />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        {path: "/cities", element:<Cities/>},
        
        ],
  },
  {
    path: "/",
    element: <DetailLayout />,
    children: [
      {path: "/city/:city_id", element: <CityDetail />}
      
    ],
  },
]);
export default router;




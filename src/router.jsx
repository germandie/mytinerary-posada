import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cities from "./pages/Cities"

import MainLayouts from "./layouts/MainLayouts"
import CityDetail from "./pages/CityDetail"
import DetailLayout from "./layouts/DetailLayout"
import SignInLayout from "./layouts/SignInLayout"

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayouts />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        {path: "/cities", element:<Cities/>},
        {path: "/signup", element:<SignUp />}
        ],
  },
  {
    path: "/",
    element: <DetailLayout />,
    children: [
      {path: "/city/:city_id", element: <CityDetail />}
      
    ],
  },

  {
    path: "/",
    element: <SignInLayout />,
    children: [
      {path: "/signin", element:<SignIn />}
      
    ],
  },
]);
export default router;




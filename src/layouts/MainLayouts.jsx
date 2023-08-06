import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayouts({children}) {
  return (
    <>
    < NavBar/>
    {children}
    <Footer />
    </>
    
    
  )
}

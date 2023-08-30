import { Link as Anchor } from "react-router-dom";
import NavBarDetail from "./NavBarDetail";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions

export default function CardDetail({ src, alt, text, id, p }) {
  // Estilo para el contenedor principal que ocupa toda la página
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url(${src})`, // Establece la imagen como fondo
    backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir el contenedor
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
    backgroundPosition: "center", // Centra la imagen en el contenedor
    minHeight: "100vh", // Establece la altura mínima para ocupar toda la pantalla
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [ show,setShow ] = useState(false)
  const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
  console.log(itineraries);
  const dispatch = useDispatch()
  useEffect(
    ()=>{dispatch(read_itineraries_from_city({ city_id:id }))},
    []
  )

  return (
    <div style={containerStyle}>
      <div className="fixed top-0 w-full p-4">
        <NavBarDetail />
      </div>
      <h1 className="text-[6vw] font-segoe-ui text-white font-bold mb-[20px] ">
        {text}
      </h1>
      <p className="text-[1.5vw] mx-[22vw] font-segoe-ui text-white font-semibold">
        {" "}
        {p}{" "}
      </p>
      
        <div className="flex flex-col ">
        <Anchor to={"/city/"+id} className="w-[300px] text-white flex flex-col">
          <button
            className=" w-auto h-auto px-8 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-3  ml-5
             md:w-40  md:h-[8vw] 
             lg:w-[17vw] lg:h-[4vw] lg:m-auto lg:mt-4"
          >
            <span onClick={()=>setShow(!show)} className="text-[16px]">{show ? ('Hide') : ('View Itineraries')}</span>
            
          </button>
          {show && itineraries.map(each=> <p key={each._id}>{each.name}</p> )}
        </Anchor>
        </div>
      
    </div>
  );
}


// import React from 'react'

// export default function CardDetail() {
//   return (
//     <div>CardDetail</div>
//   )
// }

import React, { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import NavBarDetail from "./NavBarDetail";
import { useDispatch, useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import ItineraryCard from "./ItineraryCard"; // Importa el componente ItineraryCard

const { read_itineraries_from_city } = itinerary_actions;

export default function CardDetail({ src, alt, text, id, p }) {
  // ... Tu código existente ...

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url(${src})`, // Establece la imagen como fondo
    backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir el contenedor
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
    backgroundPosition: "center", // Centra la imagen en el contenedor
    minHeight: "50vh", // Establece la altura mínima para ocupar toda la pantalla
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [show, setShow] = useState(false);
  const itineraries = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: id }));
  }, []);

  return (
    <>
    <div style={containerStyle}>
      <div className="top-0 w-full p-4">
        <NavBarDetail />
      </div>
      <h1 className="text-[6vw] font-segoe-ui text-white font-bold mb-[20px] xl:mt-auto">
        {text}
      </h1>
      <p className="text-[1.5vw] mx-[22vw] font-segoe-ui text-white font-semibold xl:mt-auto 
      lg:
      xl:mb-48">
        {" "}
        {p}{" "}
      </p>
    </div>    
    {/* Representación header */}


      
      <div className="bg-[#4E4452] flex flex-col justify-center items-center
      md:
      lg:bg-[#4E4452] lg:flex lg:flex-col lg:justify-center lg:items-center 
      xl:bg-[#4E4452] xl:flex xl:flex-col xl:justify-center xl:items-center">
      <div className="flex flex-col">
        <Anchor
          to={"/city/" + id}
          className="w-[300px]  text-white flex flex-col md:flex md:flex-col md:items-center
          lg:
          xl:mt-7"
        >
          <button className="w-auto h-12 px-8 bg-[#4F46E5] mb-5 hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-5 md:w-40  lg:w-[17vw]  lg:m-auto lg:mt-4 xl:w-13  xl:mb-10   ">
            <span onClick={() => setShow(!show)} className="text-[16px]">
              {show ? "Hide" : "View Itineraries"}
            </span>
          </button> 
          {show ? (
            itineraries.length > 0 ? (
              <div className="p-0 flex flex-col justify-center items-center md: lg: xl:flex xl:flex-col xl:justify-center xl:items-center">
                {itineraries.map((each) => (
                  <ItineraryCard key={each._id} itinerary={each} />
                ))}
              </div>
            ) : (
              <p className="xl:w-96 xl:mt-5">
                There are no itineraries enabled for this city
              </p>
            )
          ) : null}
        </Anchor>
        </div>
        </div>
    </>
  );
}


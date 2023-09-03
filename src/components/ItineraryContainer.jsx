// import ItineraryCard from "./ItineraryCard"; // Importa el componente ItineraryCard

// export default function ItineraryContainer({ backgroundImage, itineraries }) {
//   const containerStyle = {
//     position: "relative", // Permite que los elementos internos respeten este contenedor
//   };

//   const backgroundStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     minHeight: "50vh", // Ajusta la altura mínima para mostrar la imagen de fondo
//   };

//   return (
//     <div style={containerStyle}>
//        {/* <div style={backgroundStyle}></div>  */}
//       <div className="">
//         {itineraries.map((itinerary) => (
//           <ItineraryCard key={itinerary._id} itinerary={itinerary} />
//         ))}
//       </div>
//     </div>
//   );
// }

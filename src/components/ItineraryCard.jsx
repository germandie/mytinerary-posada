export default function ItineraryCard({ itinerary }) {
  return (
    <div
      className="text-black bg-white p-1 mb-4 shadow w-[44vw] my-3 rounded-md
    md:w-[40vw]
    lg:w-[40vw]
    xl:w-auto xl:h-auto xl:p-2"
    >
      <h1
        className="text-xl font-bold text-center flex justify-center items-center 
      xl:text-2xl"
      >
        {itinerary.name}
      </h1>
      <img
        src={itinerary.photo}
        alt={itinerary.name}
        className="mb-2 rounded-md w-full"
      />
      <p>Likes: {itinerary.likes}</p>

      <div
        className="
      xl:flex  xl:justify-center xl:space-between xl:space-x-3"
      >{""} {/* Contenedor flex para elementos en línea  */}
        <div
          className="xl:flex xl:flex-col xl:justify-center xl:items-center 
                     lg:flex lg:flex-col"
        >
          <p className="text-xl font-semibold xl:flex xl:flex-col xl:w-24 xl:ml-5 ">User</p>
          <img 
            src={itinerary.profile_picture}
            alt={itinerary.creator}
            className="rounded-full w-12 h-12 object-cover
      lg:rounded-full lg:w-20 lg:h-20
      xl:rounded-full xl:w-20 xl:h-20 "
          />

          <h2 className="text-gray-700 text-xl font-semibold xl:flex xl:flex-col">
            {itinerary.creator}
          </h2>
        </div>
        <div className="flex items-center mb-2">
          {/* Aquí puedes mostrar los billetitos o íconos alusivos según el valor de price */}
          {/* Puedes usar un componente de ícono o imágenes para representar los billetitos */}
          {/* Por ejemplo, para price = 3, puedes mostrar tres billetitos */}
        </div>
        
        <div className="xl:flex xl:flex-col  lg:flex lg:flex-col">
        <p className="lg:text-xl lg:font-semibold xl:text-xl xl:justify-start xl:font-semibold">Price:</p>
        <p className="xl:text-lg xl:justify-end">{"💵".repeat(itinerary.price)}</p>
        </div>

        

        <div className="xl:flex xl:flex-col lg:flex lg:flex-col">
        <p className="lg:text-xl lg:font-semibold xl:text-xl xl:font-semibold">Duration:</p>
        <p className="xl:text-lg">{itinerary.duration}</p>
        </div>

        
        <div className="flex flex-wrap mt-2">
          {itinerary.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 mr-2 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function ItineraryCard({ itinerary }) {
//     return (
//       <div className="text-black bg-white p-1 mb-4 shadow w-[44vw] my-3 rounded-md md:w-[40vw] lg:w-[40vw] xl:w-[40vw] xl:p-2">
//         <h1 className="text-xl font-semibold text-center">{itinerary.name}</h1>
//         <img src={itinerary.photo} alt={itinerary.name} className="mb-2 rounded-md w-full" />
//         <div className="flex items-center justify-center space-between"> {/* Contenedor flex para elementos en línea */}
//           <h2 className="text-xl font-semibold mr-3">{itinerary.city_id.admin_id.name}</h2>
//           <p className="text-xl flex flex-col

//           xl:flex xl:flex-col">Price: {itinerary.price} billetitos</p>
//           <p className="text-xl ml-3">Duration: {itinerary.duration} horas</p>
//         </div>
//         <div className="mt-2"> {/* Contenedor para etiquetas */}
//           {itinerary.tags.map((tag) => (
//             <span key={tag} className="bg-gray-200 px-2 py-1 mr-2 rounded">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <p className="mt-2">Likes: {itinerary.likes}</p>
//       </div>
//     );
//   }

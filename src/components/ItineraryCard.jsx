import ButtonCard from "./ButtonCard";
import ContadorMeGusta from "./ContadorMeGusta";

export default function ItineraryCard({ itinerary }) {
  return (
    <div
      className="text- bg-black p-1 mb-4 shadow w-[44vw] my-3 rounded-md
    md:w-[80vw]
    lg:w-[53vw]
    xl:w-[40vw] xl:h-auto xl:p-2"
    >
      <h1
        className="text-xl font-bold text-center flex justify-center items-center 
      xl:text-2xl"
      >
        {itinerary.name}
      </h1>
      <img
        src={itinerary.photo}
        alt= {itinerary.creator}
        className="mb-2 rounded-md w-full"
      />
      <div className="flex flex-row-reverse
      md:flex md:flex-row-reverse
      lg:flex lg:flex-row-reverse
      xl:flex xl:flex-row-reverse">  <ContadorMeGusta /></div>
      

      <div
        className="
        md:flex  md:justify-center md:space-between md:space-x-3
        lg:flex  lg:justify-center lg:space-between lg:space-x-3
      xl:flex  xl:justify-center xl:space-between xl:space-x-3"
      >{""} {/* Contenedor flex para elementos en línea  */}
      
    

    

       {/* creador,nombre y foto de perfil */}
        <div
          className="ml-13 mt-[-5rem]
                     xl:flex xl:flex-col xl:justify-center xl:items-center xl:mt-[-7rem]
                     lg:flex lg:flex-col lg:mt-[-5rem]
                     md:flex md:flex-col md:mt-[-4rem] "
        >
          <p className="text-xl font-semibold xl:flex xl:flex-col xl:w-24 xl:ml-5 "></p> {/* Usuario */}
          <img 
            src={itinerary.profile_picture}
            alt={itinerary.creator}
            className="rounded-full w-12 h-12 object-cover border-double border-4 border-sky-500
            md:w-24 md:h-24
            lg:rounded-full lg:w-20 lg:h-20
            xl:rounded-full xl:w-[9rem] xl:h-[9rem] xl:border-solid xl:border-4 xl:border-gray-400 xl:ml-12
"
          />

          <h2 className="text-gray-700 text-xl font-semibold xl:flex xl:flex-col">
            {itinerary.creator}
          </h2>
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
          {itinerary.tags.map((tag,index) => (
            <span key={index} className="bg-gray-400 px-2 py-1 mr-2 mb-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div><ButtonCard itinerary={itinerary} /></div>
    </div>
    
    
  );
}


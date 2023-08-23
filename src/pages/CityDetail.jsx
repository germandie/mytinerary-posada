import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function CityDetail() {
  const { _id } = useParams();
  const [city, setCity] = useState([]);

  useEffect(
    () => {
      axios(apiUrl + 'cities/' + _id)
        //.then((resp) => console.log(resp.data.data_carousel))
        .then(res =>{setCity(res.data.response)
          })
        .catch((err) => console.log(err))
    },
    [_id] 
  );
  return (
    <div>
      <main className="lg:text-stone-950">
        <div className="h-[50rem]">
          <div className="">
            <h1 className="text-2xl font-semibold text-center lg:w-[38rem]">
              City Detail {city.text}
            </h1>
          </div>
          <div className="lg:flex lg:justify-center">
            <img
              className="w-50 lg:w-[30rem]" 
              src={city.photo}
              alt=""
            />
          </div>
          <div className="">
            {/* Aplica clases específicas para pantallas grandes */}
            <p className="lg:text-lg lg:font-semibold lg:mb-2 lg:m-20 lg:flex lg:justify-center lg:text-stone-950">{city.city}</p>
            <p className="lg:text-lg lg:mb-2">{city.featuredDescription}</p>
            <p className="lg:text-lg">{city.smalldescription}</p>
          </div>
          <Anchor to= '/cities'>
         <button id="buttonAccess" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"> Return <i className="bi bi-search"></i>
         </button> 
         </Anchor>
        
        </div>
        <div class="font-semibold text-xl text-[black] text-center lg:w-[38rem] mt-2">Under construction</div>
      </main>
    </div>
  );
  
}
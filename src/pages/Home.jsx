import {useState, useEffect} from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import ViewMore from "../components/ViewMore";
import apiUrl from '../apiUrl.js'


export default function Home() {
  const [show,setShow] = useState(true)
  const [data,setData] = useState([])
  
    

 useEffect(
  ()=>{
    axios(apiUrl+'cities/carousel')
    .then(res=>setData(res.data.data_carousel))
    .catch(err=>console.log(err))
  },
  []
 )


  
  return (
    
   

<main className="flex justify-items-center bg-gray-300 w-full 
lg:w-[100%] 
lg:">
  
  
  <div className="w-full max-w-[1291px] px-[2vw] mt-[17rem] mb-[25vw] space-x-4 flex flex-col md:flex-row lg:flex-row lg:justify-between ">
  
    <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center justify-center px-4 mt-8 space-y-4
    lg: pb-8 lg:space-y-12">
    <h1 className="text-3xl font-bold text-center lg:m-auto">Popular Mytineraries</h1>
      <div className="w-full">
        <div className="flex-col w-full items-center">
          <h2 className="text-2xl font-semibold text-center">
            Find your perfect trip, designed by insiders who know and love their cities!
          </h2>
          <p className="font-semibold text-xl text-[#1C1C1C99] text-center mt-2">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <ViewMore />
        </div>
      </div>
    </div>
    <div className="w-full md:w-[40%] lg:w-[50%]">
      
      
     
      <Carousel data={data} />
    </div>
  </div>
</main>






  );
}

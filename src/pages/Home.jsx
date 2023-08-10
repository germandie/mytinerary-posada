import {useState, useEffect} from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import ViewMore from "../components/ViewMore";


export default function Home() {
    const [data,setData]= useState([])
    const[show,setShow] = useState(true)
  
    

 useEffect(
  ()=>{
    axios('/data.json')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },
  []
 )


  
  return (
    
   /*  <main className="grow flex justify-center items-center bg-gray-100">
  <div className="w-[1291px] h-[40vw] flex flex-col items-center justify-center px-[2vw] mt-[25vw] mb-[25vw] space-y-4">
    <h1 className="text-4xl font-semibold mb-48">Popular Mytineraries</h1>
    <div className="w-full flex justify-between">
      <div className="flex-col w-[600px]">
        <h2 className="text-[30px] font-segoe-ui h-[64px] font-[700] leading-[40px]">
          Find your perfect trip, designed by insiders who know and love their cities!
        </h2>
        <p className="font-segoe-ui font-semibold w-[500px] h-[96px] text-[23px] text-[#1C1C1C99] leading-[30px] mt-24 font-[600]">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <ViewMore />
      </div>
      <Carousel data={data} />
    </div>
  </div>
</main>
 */

<main className="flex justify-center items-center bg-gray-300 w-full">
<div className="w-full md:max-w-[480px] flex flex-col items-center justify-center px-4 mt-8 space-y-4">
  <h1 className="text-lg font-bold text-center">Popular Mytineraries</h1>
  <div className="w-full">
    <div className="flex-col w-full">
      <h2 className="text-md font-semibold text-center">
        Find your perfect trip, designed by insiders who know and love their cities!
      </h2>
      <p className="font-semibold text-xs text-[#1C1C1C99] text-center mt-2">
        Our app will help you find the perfect path for your next trip. With
        an easy-to-use interface and a host of itinerary options, planning
        your next trip has never been easier.
      </p>
      <ViewMore />
    </div>
    <Carousel data={data} />
  </div>

  
  
</div>
</main>




  );
}

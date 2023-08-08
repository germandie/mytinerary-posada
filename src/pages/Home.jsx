import {useState, useEffect} from "react";
import Carousel from "../components/Carousel";
import axios from "axios";


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
    
    <main className="grow flex justify-center items-center bg-red-300">
      
      <div className="w-[1291px] h-[40vw] flex justify-between px-[2vw] mt-[25vw] mb-[25vw] bg-green-300 space-x-4">
        <div className=" flex-col w-[600px]  bg-pink-500">

          <h1 className="text-[30px] font-segoe-ui h-[64px] font-[700] leading-[40px]">
          Find your perfect trip, designed by insiders who know and love their cities!
          </h1>
          <p className="font-segoe-ui font-semibold w-[500px] h-[96px] text-[23px] text-[#1C1C1C99] leading-[30px] mt-20">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <button className=" justify-items-center space-x-2 w-[346px] h-[64px] px-4 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-14">
            <span className="text-[24px]">View More</span>
          </button>
        </div>
        
        {/* () ?(true) : (false) */}
        
        <Carousel data={data} />
        
      </div>
    </main>
  );
}

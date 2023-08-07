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
    
    <main className="flex justify-center items-center mx-[219px]">
      
      <div className="w-[1291px] h-[304px] flex justify-between p-4 mt-[318px] mb-[399px]">
        <div className="flex flex-col w-[742px] h-[304px]">
          <h1 className="text-[48px] font-semibold h-[64px] font-[700] leading-[63.84px]">
            Find the perfect destination
          </h1>
          <p className="font-segoe-ui font-semibold w-[628px] h-[96px] text-[24px] text-[#1C1C1C99] leading-[31.92px] mt-10">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <button className=" justify-items-center space-x-2 w-[346px] h-[64px] px-4 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-10">
            <span className="text-[24px]">View More</span>
          </button>
        </div>
        
        {/* () ?(true) : (false) */}
        
        <Carousel data={data} />
        
      </div>
    </main>
  );
}

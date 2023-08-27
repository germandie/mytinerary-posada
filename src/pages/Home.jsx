import {useState, useEffect} from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import ViewMore from "../components/ViewMore";
import apiUrl from '../apiUrl.js'
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_carousel } = city_actions


export default function Home() {
  const [show,setShow] = useState(true)
  
  // const store = useSelector(store=>store)
  // console.log(store);
  // const city_reducer = useSelector(store=>store.cities)
  // console.log(city_reducer);
  const carousel = useSelector(store=>store.cities.carousel)
  
  const dispatch = useDispatch()
  
  useEffect(
  ()=>{
    if(carousel.length===0){
      dispatch(read_carousel())
    }
    
    
  },
  []
 )
 console.log(carousel);

  
  return (
    
   

<main className="flex items-center bg-gray-300 lg:">
  <div className="w-full max-w-[1291px] px-[2vw] mt-[3rem] mb-[3rem] space-x-4 flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-between">
    <div className="w-full md:w-[60%] flex flex-col items-center px-4 mt-8 space-y-4 lg:pb-8 lg:space-y-12">
      <h1 className="text-3xl font-bold text-center lg:ml-0">Popular Mytineraries</h1>
      <div className="w-full lg:flex">
        <div className="lg:w-[50%] lg:ml-4">
          <h2 className="text-2xl font-semibold text-center lg:w-[38rem]">
            Find your perfect trip, designed by insiders who know and love their cities!
          </h2>
          <p className="font-semibold text-xl text-[#1C1C1C99] text-center lg:w-[38rem] mt-2">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-4">
            <ViewMore />
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-[50%] lg:ml-4 mt-4 lg:mt-0 lg:flex ">
      <Carousel data={carousel} />
    </div>
  </div>
</main>

 );
}

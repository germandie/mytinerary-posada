import { Link as Anchor } from "react-router-dom";
export default function ViewMore() {
  return (
    <Anchor to= "/cities">

< button  className=" w-auto h-auto px-8 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-3  ml-5
md:w-40  md:h-[8vw] 
lg:w-[17vw] lg:h-[4vw] lg:m-auto lg:mt-4 lg:ml-[11rem]">
            <span  className="text-[16px]">View More</span>
          </button > 
    </Anchor>
  )
}

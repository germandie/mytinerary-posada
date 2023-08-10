import { Link as Anchor } from "react-router-dom";
export default function ViewMore() {
  return (
    <Anchor to= "/cities">

< button  className=" w-[70%] h-[10vw] px-2 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-3  ml-5
md:w-40  md:h-[8vw] md:ml-[25rem]
lg:w-[17vw] lg:h-[4vw] lg:m-auto lg:mt-4 lg:ml-[13vw]">
            <span  className="text-[16px]">View More</span>
          </button > 
    </Anchor>
  )
}

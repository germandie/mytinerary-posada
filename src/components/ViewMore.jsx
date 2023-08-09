import { Link as Anchor } from "react-router-dom";
export default function ViewMore() {
  return (
    <Anchor to= "/cities">

< button  className=" justify-items-center w-[70%] h-[10vw] px-4 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-3  ml-7  ">
            <span  className="text-[16px]">View More</span>
          </button > 
    </Anchor>
  )
}

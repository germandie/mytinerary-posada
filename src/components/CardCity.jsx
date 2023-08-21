/* import { Link as Anchor } from "react-router-dom"

 export default function CardCity({src, alt, text, id}) {
    return (
      <div className="w-[vw] flex flex-col items-center bg-slate-200 m-1 rounded-md border border-neutral-400 drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)] wrap
  
      md:w-[20vw] md: flex md:flex-col md:items-center md:p-2 md:bg-slate-200 m-2
  
      lg:flex lg:flex-wrap
      ">
      <Anchor to={'/city/'+id} className="w-2/5 flex flex-col items-center p-2 m-2 bg-white">
              <img className="rounded-md " src={src} alt={alt} />
              <p className="mt-1 text-[5vw] font-segoe-ui font-semibold
              md:mt-2 md:text-base md:font-segoe-ui md:font-semibold">{text}</p>
              </Anchor>
            </div>
      )
      
      
  }  */




  import { Link as Anchor } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function CardCity({ src, alt, text, id }) {
  return (
<div className="flex flex-wrap">
    <Anchor to={'/city/'+id} className=" flex flex-col items-center p-2 m-4 bg-white rounded-md border border-neutral-400 drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)]">
      <img className="rounded-md" src={src} alt={alt} />
      <p className="text-[20px]">{text}</p>
    </Anchor>
    </div>
  );
}



export default function CardPolaroid({src, alt, text}) {
  return (
    <div className="w-[vw] flex flex-col items-center bg-slate-200 m-1 rounded-md border border-neutral-400 drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)] wrap">
            <img className="rounded-md " src={src} alt={alt} />
            <p className="mt-1 text-[5vw] font-segoe-ui font-semibold">{text}</p>
          </div>
    )
    
    
}

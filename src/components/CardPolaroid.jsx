

export default function CardPolaroid({src, alt, text}) {
  return (
    <div className="w-[15vw] flex flex-col items-center p-2 bg-slate-300 m-2 rounded-md">
            <img src={src} alt={alt} />
            <p className="text-base">{text}</p>
          </div>
    )
}

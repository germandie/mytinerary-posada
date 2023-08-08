

export default function CardPolaroid({src, alt, text}) {
  return (
    <div className="w-[20vw] flex flex-col items-center p-2 bg-slate-300 m-2 rounded-md border-{black}">
            <img className="rounded-md " src={src} alt={alt} />
            <p className="mt-2 text-base font-segoe-ui font-semibold">{text}</p>
          </div>
    )
}

import Arrow from "../components/Arrow";
import CardPolaroid from "../components/CardPolaroid";

export default function Carousel({data}) {
  return (
    <div className="flex justify-center items-center">
          <div className="flex-none">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
          </div>
          <div className="flex flex-wrap h-[304px] rounded-md bg-black">
            {data.slice(0, 4).map((each) => (
              <CardPolaroid
                key={each.id}
                src={each.photo}
                alt={each.id}
                text={each.city}
              />
            ))}
          </div>
          <div className="flex-none">
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </div>
        </div>
  )
}

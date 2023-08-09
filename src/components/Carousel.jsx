import Arrow from "../components/Arrow";
import CardPolaroid from "../components/CardPolaroid";
import {useState} from "react";

export default function Carousel({data}) {
  let [counter,setCounter] = useState(0)
  let [counterTo,setCounterTo] = useState(4)

  function next_slide(){
    if(data.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    }else {
      setCounter(counter+4)
    setCounterTo(counterTo+4)

    }
    console.log(counter);
    console.log(counterTo);
  }

  function prev_slide(){
    if(counter <= 0) {
      setCounter(data.length - 4)
      setCounterTo(data.length)
    }else {
      setCounter(counter-4)
    setCounterTo(counterTo-4)

    }
    console.log(counter);
    console.log(counterTo);
  }
  
  /* return (
    <div className="flex justify-center items-center">
          <div className="flex-none">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide}/>
          </div>
          <div className="flex flex-wrap justify-center h-[304px] rounded-md bg-black">
            {data.slice(counter,counterTo).map((each) => (
              <CardPolaroid
                key={each.id}
                src={each.photo}
                alt={each.id}
                text={each.city}
              />
            ))}
          </div>
          <div className="flex-none">
            
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
          </div>
        </div>
  ) */

  return (
    
    <div className="flex flex-col justify-center items-center ">

      <div className="flex flex-wrap justify-center max-w-[100%] h-auto rounded-md mb-5 m-auto">
      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
        
        {data.slice(counter, counterTo).map((each) => (
          <CardPolaroid
            key={each.id}
            src={each.photo}
            alt={each.id}
            text={each.city}
          />
          
        ))}
        <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
      </div>
          
      <div className="flex items-center space-x-40 ">
        
        
      </div>
    </div>
  )
  
}

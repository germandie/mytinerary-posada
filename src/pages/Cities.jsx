import { useState, useEffect, useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector,useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions




export default function Cities() {
  const cities = useSelector(store=> store.cities.cities)
  const [reEffect, setreEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch()
  console.log(cities)
  
  
  useEffect(
    () => {
       dispatch(read_cities({ text:text.current?.value}))
    }, [reEffect]);

  function handlerFilter() {
    console.log(text.current.value);
    setreEffect(!reEffect);
  }

  return (
    <>
      <div className="flex items-center justify-center xl:mb-4 xl:mt-4">
        <div className="mx-auto mt-4 relative">
          <input
            ref={text}
            type="text"
            name="text"
            id="text"
            onKeyUp={handlerFilter}
            className="pl-10 py-2 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 mb-3
            md:mb-4
            lg:mb-4
            xl:"
            placeholder="Search your city"
          />
          <span className="absolute left-3 top-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>
      </div>
      

      <main className="flex-grow">

      {cities.length === 0 ? (
        <div className="h-full text-center text-2xl text-gray-500 mt-[12rem]
        md:mt-[14rem] md:text-2xl
        lg:mb-12
        xl:text-5xl">
          Not found city, please type another
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 bg-[#4E4452]
        lg:grid-cols-3 bg-[#4E4452] 
        xl:grid-cols-5 bg-[#4E4452]">
          {cities.map((each) => (
            <CardCity
              key={each._id}
              src={each.photo}
              alt={each._id}
              text={each.city}
              id={each._id}
            />
          ))}
        </div>
        
      )}
      </main>
    </>
  );
}


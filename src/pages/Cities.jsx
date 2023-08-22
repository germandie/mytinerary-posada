import { useState, useEffect, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import CardCity from "../components/CardCity";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [reEffect, setreEffect] = useState(true);
  const text = useRef();
  useEffect(() => {
    axios(apiUrl + "cities?city=" + text.current.value)
      //.then(res=>console.log(res.data.response))
      .then((res) => setCities(res.data.response))
      .catch((err) => console.log(err));
  }, [reEffect]);
  function handlerFilter() {
    console.log(text.current.value);
    setreEffect(!reEffect);
  }

  return (
    <>
  <div className="flex items-center justify-center">
  <div className="mx-auto relative">
    <input
      ref={text}
      type="text"
      name="text"
      id="text"
      onKeyUp={handlerFilter}
      className="pl-10 py-2 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Search your city"
    />
    <span className="absolute left-3 top-2 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </span>
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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

</>

  );
}

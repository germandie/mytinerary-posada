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
  <div className="flex items-center justify-center my-3">
  <div className="mx-auto">
    <input
      ref={text}
      type="text"
      name="text"
      id="text"
      onKeyUp={handlerFilter}
      className="relative pl-10 py-2 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Search your city"
    />
    <span className="absolute left-3 top-2 text-gray-400">
      {/* Aquí coloca tu icono de lupa */}
      <i className="feather-icons feather-icon-search"></i>
    </span>
  </div>
</div>

  {cities.map((each) => (
    <CardCity
      key={each._id}
      src={each.photo}
      alt={each._id}
      text={each.city}
      id={each._id}
    />
  ))}
</>

  );
}

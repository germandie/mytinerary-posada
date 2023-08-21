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
      <input
        ref={text}
        type="text"
        name="text"
        id="text"
        onKeyUp={handlerFilter}
      />
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

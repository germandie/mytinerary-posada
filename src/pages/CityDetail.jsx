import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;
import CardDetail from "../components/CardDetail";


export default function CityDetail() {
  const { city_id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);
  //console.log(city);

  useEffect(() => {
    dispatch(read_city({ id: city_id }));
  }, []);

  return (
    <div>
    <CardDetail
      src={city.photo}
      alt={city._id}
      text={city.city}
      id={city_id}
      p={city.description}
    />
    </div>
  );
}

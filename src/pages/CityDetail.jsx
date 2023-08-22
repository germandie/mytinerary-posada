/* import { useParams } from 'react-router-dom'

export default function CityDetail() {
  const { city_id } = useParams()
  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  return (
    <div>CityDetail of city {city_id} under construction</div>
  )
} */


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiUrl from "../apiUrl";


export default function CityDetail() {
  const { city_id } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    // Utiliza un bloque try...catch para manejar errores de axios
    try {
      axios(apiUrl + "cities?city=" + text.current.value)
        .then((res) => setCities(res.data.response))
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            // Cuando el servidor responde con un 404, muestra el mensaje personalizado
            setCities([]);
          } else {
            // Si hay otro tipo de error, puedes manejarlo aquí
            console.error(err);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }, [city_id]);

  return (
    <div className="">
      {city ? (
        <>
          <h1>{city.city}</h1>
          <p>{city.description}</p>
        </>
      ) : (
        'Cargando...'
      )}
    </div>
  );
}



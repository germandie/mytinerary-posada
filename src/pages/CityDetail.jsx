/* import { useParams } from 'react-router-dom'


export default async function CityDetail() {
  const { city_id} = useParams()
  
  const city = await axios.get(`/api/cities/${city_id}`)
  
  return (
    <div className="">CityDetail of city {city.data.name} under construction</div>
  )
} */

import { useParams } from 'react-router-dom'

export default function CityDetail() {
  const { city_id } = useParams()
  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  return (
    <div>CityDetail of city {city_id} under construction</div>
  )
}
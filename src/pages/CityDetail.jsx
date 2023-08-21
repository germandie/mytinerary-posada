import { useParams } from 'react-router-dom'


export default function CityDetail() {
  const { city_id } = useParams()
  
  return (
    <div className="text-white">CityDetail of city {city_id} under construction</div>
  )
}
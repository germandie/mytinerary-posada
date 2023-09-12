import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import activity_actions from "../store/actions/activities";
const { read_activities_from_itinerary } = activity_actions;

function ButtonCard({ itinerary }) {
  let [activities, setActivities] = useState([]);
  console.log(activities);

  //const activities = useSelector(store=>store.activities.activities_from_itinerary)

  //const activities = useSelector((store) => store.activities[itineraryData._id]);

  //console.log(store)
  const dispatch = useDispatch();
  useEffect(() => {
    // Utiliza el ID del itinerario para cargar las actividades relacionadas
    dispatch(read_activities_from_itinerary({ itinerary_id: itinerary._id }))
      .then((res) => setActivities(res.payload.activities_from_itinerary))
      .catch((error) => console.log(error));
  }, []);

  const [isUnderConstruction, setIsUnderConstruction] = useState(false);
  const [buttonText, setButtonText] = useState("View More");

  const handleClick = () => {
    setIsUnderConstruction(!isUnderConstruction);
    setButtonText(isUnderConstruction ? "View More" : "Hide");
  };

  return (
    <div
      className="flex flex-col justify-center items-center
    md:flex md:flex-col md:justify-center md:items-center 
    lg:flex lg:flex-col lg:justify-center lg:items-center"
    >
      <button
        onClick={handleClick}
        className="w-auto h-auto px-8 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-3 ml-5 
        md:w-40 md:h-auto  
        lg:w-[15vw] lg:h-[3vw] lg:m-auto lg:mt-4
        xl: "
      >
        <span className="text-[16px] md:text-sm">{buttonText}</span>
      </button>
      {isUnderConstruction && (
        <div className="flex flex-col justify-center items-center mt-7">
          <div className="flex space-x-4 ">
            {activities.map((activity) => (
              <div key={activity._id}>
                <img className="w-[12rem] h-[6rem] rounded-md object-cover" src={activity.photo} alt={activity.name} />
                <p className="text-center">{activity.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonCard;

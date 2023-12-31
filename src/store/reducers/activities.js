import { createReducer } from "@reduxjs/toolkit";
import activity_actions from "../actions/activities"
const { read_activities_from_itinerary } = activity_actions

const initial_state = {
    activities_from_itinerary: []
}

const activity_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
            read_activities_from_itinerary.fulfilled,
            (state,action)=> {
                let new_state = {
                    ...state,
                    activities_from_itinerary: action.payload.activities_from_itinerary
                }
                return new_state
            }
       )
)





// const activity_reducer = createReducer(
//     initial_state,
//     builder => builder.addCase(read_activities_from_itinerary.fulfilled, (state, action) => {
//         return {
//             ...state,
//             [action.payload.itinerary_id]: action.payload.activities,
//         };
//             }
//        )
// )
 export default activity_reducer



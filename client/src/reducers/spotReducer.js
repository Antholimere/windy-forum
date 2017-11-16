import { SAVE_SPOT, FETCH_SPOTS, DESTROY_SPOT, UPDATE_SPOT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_SPOT:
      return [...state, action.payload]
    case DESTROY_SPOT:
      return state.filter(spot => spot._id !== action.payload)
    case FETCH_SPOTS:
      return action.payload
    case UPDATE_SPOT:
      return state.map((item, index) => {
        if (item._id !== action.payload._id) {
          return item
        }

        return {
          ...item,
          ...action.payload
        }
      })
  }

  return state;
}

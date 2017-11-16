import { combineReducers } from "redux";
import spotReducer from "./spotReducer";

export default combineReducers({
  spots: spotReducer,
});

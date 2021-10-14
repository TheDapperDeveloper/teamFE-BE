import { combineReducers } from "redux";
import StudentData from "./studentData";
import BackEnd from "./backEnd";

const rootReducer = combineReducers({
  // insert your reducers here
  StudentData, BackEnd
});

export default rootReducer;

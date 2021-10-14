//reducer

import { TEAM_BACKEND } from "../../action-types/backend-types";
const initialState = [];


const BackEnd = (state = initialState, action) => {
  switch (action.type) {

    case TEAM_BACKEND:
      return {...state, type: action.payload }
    
      default:
      return state;
  }
};
export default BackEnd;

import "../SotreConstants.js";
import { ADD_NAME } from "../SotreConstants.js";

export let nameReducer = (state = "Giri", action) => {
  switch (action.type) {
    case ADD_NAME:
      return action.payload;
    default:
      return "Giri";
  }
};

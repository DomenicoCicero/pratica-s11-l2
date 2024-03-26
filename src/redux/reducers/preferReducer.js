import { ADD_TO_PREFER, REMOVE_FROM_PREFER } from "../actions";

const initialState = {
  content: [],
};

const preferReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREFER:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    case REMOVE_FROM_PREFER:
      return {
        ...state,
        content: state.content.filter((prefer, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default preferReducer;

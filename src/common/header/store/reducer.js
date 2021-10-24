import * as actionTypes from "./constants";

const defaultState = {
  focused: false,
};

// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      focused: true,
    };
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false,
    };
  }
  return state;
};

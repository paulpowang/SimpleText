import { fromJS } from "immutable";

import * as actionTypes from "./constants";

const defaultState = fromJS({
  focused: false,
});

// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set("focused", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  return state;
};

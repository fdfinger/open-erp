import { actions } from "../constant";

export const listReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.LOGIN_SUBMIT:
      console.log(state);
      return state;
    default:
      return Object.assign({}, state, action);
  }
};

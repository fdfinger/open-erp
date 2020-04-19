import { actions } from "../constant";

export const userReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case actions.LOGIN_SUBMIT:
      return Object.assign({}, state, action.value);
    case actions.LOGIN_ERROR:
      return Object.assign({}, state, action.value, { status: 0 });
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, action.value, { status: 1 });
    default:
      return state;
  }
};

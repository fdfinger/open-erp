import { LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from "../constant/login";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return Object.assign({}, state, action.value);
    case LOGIN_ERROR:
      return Object.assign({}, state, action.value, { status: 0 });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, action.value, { status: 1 });
    default:
      return state;
  }
};

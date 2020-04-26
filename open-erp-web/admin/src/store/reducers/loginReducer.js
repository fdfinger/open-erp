import { LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from "../constant/login";

const initState = {
  status: 0,
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return { ...state, ...action.value };
    case LOGIN_ERROR:
      return { ...state, ...action.value, status: 0 };
    case LOGIN_SUCCESS:
      return { ...state, ...action.value, status: 1 };
    default:
      return state;
  }
};

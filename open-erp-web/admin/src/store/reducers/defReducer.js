export const defReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERS':
      console.log(action);
      return {};
    default:
      break;
  }
  return Object.assign({}, state, action);
};

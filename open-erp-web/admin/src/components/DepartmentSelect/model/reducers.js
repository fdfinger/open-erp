import { INIT_DEPARTMENT } from "./actionTypes";

const initstate = {
  isloading: false,
  items: [],
};

/** 获取列表 */
const setDepartment = (state = initstate, action) => {
  switch (action.type) {
    case INIT_DEPARTMENT:
      return Object.assign({}, state, { items: action.department });
    default:
      return state;
  }
};

export default setDepartment

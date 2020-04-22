import {
  USER_ON_SEARCH,
  USER_SEARCH_FROM_CHANGE,
  USER_UPDATE_TABLE_DATA,
} from "../constant/user";

const initQueryForm = {
  page: 1,
  pageSize: 20,
};

const initState = {
  isLoading: false,
  dataSource: [],
  count: 0,
  queryForm: initQueryForm,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case USER_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    default:
      return state;
  }
};

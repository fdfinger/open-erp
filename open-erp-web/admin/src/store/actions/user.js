import { USER_ON_SEARCH, USER_SEARCH_FROM_CHANGE } from "../constant/user";

export const onSearch = (value) => {
  return {
    type: USER_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: USER_SEARCH_FROM_CHANGE,
    value,
  };
};
